<script lang="ts">
  import { onDestroy, onMount, getContext } from 'svelte';
  import type { Writable } from 'svelte/store';
  import { db } from '$lib/firebase';
  import {
    collection,
    query,
    where,
    onSnapshot,
    getDocs,
    serverTimestamp,
    addDoc as addDocFB,
    doc,
    getDoc
  } from 'firebase/firestore';
  import { getAuth, onAuthStateChanged } from 'firebase/auth';

  // Context stores
  const patientStore = getContext('loggedInPatient') as Writable<any>;

  // State
  let currentUserUid = '';
  let patientId = '';
  let patientData: { name: string; surname: string } | null = null;
  let showModal = false;

  // Data state
  let doctors: string[] = [];
  let bills: { id: string; description: string; amount: number; status: string }[] = [];
  let appointments: {
    id: string;
    date: any;
    time: string;
    doctor: string;
    reason: string;
    status: string;
  }[] = [];
  let prescriptions: { id: string; medicine: string; dosage: string; frequency: string }[] = [];
  let labTests: { id: string; testName: string; date: string; result?: string }[] = [];
  let nextAppointmentDays: number | null = null;
  // Modal state and form variables
  let isLoadingDoctors = false;
  let specialties: string[] = [];
  let doctorsList: { id: string; name: string; surname: string; specialty: string }[] = [];
  let specialty = '';
  let doctor = '';
  let appointmentDate = '';
  let appointmentTime = '';
  let reason = '';
  let submissionMessage = '';
  let submissionMessageType: 'success' | 'error' = 'success';
  let today = new Date().toISOString().split('T')[0];
  
  $: isSubmitDisabled = !doctor || !appointmentDate || !appointmentTime || !reason || !specialty || isLoadingDoctors;

  // Update patient context
  async function updatePatient(value: any) {
    patientId = value.id || currentUserUid;
    
    // Fetch patient data from Firestore
    if (patientId) {
      try {
        const docRef = doc(db, 'users', patientId);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          const data = docSnap.data();
          patientData = {
            name: data.name || '',
            surname: data.surname || ''
          };
        }
      } catch (error) {
        console.error('Error fetching patient data:', error);
      }
    }
    
    loadDynamicData();
  }

  // Subscribe to patient store
  if (patientStore && typeof patientStore.subscribe === 'function') {
    unsubPatient = patientStore.subscribe(updatePatient);
  }

  // On mount: auth & real-time listeners
  onMount(async () => {
    const auth = getAuth();
    if (auth.currentUser) {
      currentUserUid = auth.currentUser.uid;
      patientId = currentUserUid;
      await updatePatient({ id: currentUserUid });
    } else {
      onAuthStateChanged(auth, async user => {
        if (user) {
          currentUserUid = user.uid;
          patientId = user.uid;
          await updatePatient({ id: user.uid });
        }
      });
    }

    loadDynamicData();
  });

  onDestroy(() => {
    unsubPatient && unsubPatient();
    unsubDoctors && unsubDoctors();
    unsubPrescriptions && unsubPrescriptions();
    unsubLabTests && unsubLabTests();
    unsubAppointments && unsubAppointments();
    unsubBills && unsubBills();
  });

  // Load doctors, prescriptions, lab tests, appointments
  function loadDynamicData() {
    if (!patientId) return;

    // Bills
    const billsQ = query(collection(db, 'bills'), where('patientId', '==', patientId));
    unsubBills = onSnapshot(billsQ, snap => {
      bills = snap.docs.map(d => ({ id: d.id, ...d.data() } as any));
    });

    // Doctors taking care
    const docQ = query(collection(db, 'appointments'), where('patientId', '==', patientId));
    unsubDoctors = onSnapshot(docQ, snap => {
      const unique = new Set<string>();
      snap.docs.forEach(d => {
        const docName = d.data().doctor;
        if (docName) unique.add(docName);
      });
      doctors = Array.from(unique);
    });

    // Prescribed medicines
    const rxQ = query(collection(db, 'prescriptions'), where('patientId', '==', patientId));
    unsubPrescriptions = onSnapshot(rxQ, snap => {
      prescriptions = snap.docs.map(d => ({ id: d.id, ...d.data() } as any));
    });

    // Lab tests
    const labQ = query(collection(db, 'labTests'), where('patientId', '==', patientId));
    unsubLabTests = onSnapshot(labQ, snap => {
      labTests = snap.docs.map(d => ({ id: d.id, ...d.data() } as any));
    });    // Appointments and next appointment calculation
    const appQ = query(
      collection(db, 'appointments'),
      where('patientId', '==', patientId)
    );
    unsubAppointments = onSnapshot(appQ, snap => {
      // Update appointments list
      appointments = snap.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      // Calculate next appointment
      const upcoming = appointments
        .filter(a => a.date && a.status === 'Pending')
        .map(a => ({
          ...a,
          dateObj: a.date.toDate ? a.date.toDate() : new Date(a.date)
        }))
        .filter(a => a.dateObj >= new Date())
        .sort((a, b) => a.dateObj.getTime() - b.dateObj.getTime());

      if (upcoming.length) {
        const diffMs = upcoming[0].dateObj.getTime() - new Date().getTime();
        nextAppointmentDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
      } else {
        nextAppointmentDays = null;
      }
    });
  }

  async function submitAppointment() {
    if (!doctor || !appointmentDate || !appointmentTime || !reason || !specialty) {
      submissionMessage = 'Please fill in all required fields.';
      submissionMessageType = 'error';
      return;
    }

    try {
      const selectedDoctor = doctorsList.find(d => d.id === doctor);
      if (!selectedDoctor) {
        throw new Error('Selected doctor not found');
      }

      const appointment = {
        patientId,
        patientName: patientData ? `${patientData.name} ${patientData.surname}` : '',
        doctorId: selectedDoctor.id,
        doctor: `${selectedDoctor.name} ${selectedDoctor.surname}`,
        doctorSpecialty: selectedDoctor.specialty,
        date: appointmentDate,
        time: appointmentTime,
        reason,
        status: 'Pending',
        createdAt: serverTimestamp()
      };

      // Create the appointment first
      const appointmentRef = await addDocFB(collection(db, 'appointments'), appointment);

      // Then create the corresponding bill
      const bill = {
        amount: 500,
        appointmentId: appointmentRef.id,
        createdAt: serverTimestamp(),
        description: `Appointment with Dr. ${selectedDoctor.name} ${selectedDoctor.surname}`,
        patientId,
        patientName: patientData ? `${patientData.name} ${patientData.surname}` : '',
        status: 'pending',
        type: 'appointment'
      };

      await addDocFB(collection(db, 'bills'), bill);

      submissionMessage = 'Appointment booked successfully!';
      submissionMessageType = 'success';
      setTimeout(() => {
        showModal = false;
        resetForm();
      }, 2000);
    } catch (error: any) {
      console.error('Error booking appointment:', error);
      submissionMessage = `Failed to book appointment: ${error.message}`;
      submissionMessageType = 'error';
    }
  }
  function resetForm() {
    specialty = '';
    doctor = '';
    appointmentDate = '';
    appointmentTime = '';
    reason = '';
    submissionMessage = '';
  }
  async function fetchDoctors() {
    isLoadingDoctors = true;
    try {
      const doctorsQuery = query(collection(db, 'users'), where('role', '==', 'Doctor'));
      const snapshot = await getDocs(doctorsQuery);
      
      doctorsList = snapshot.docs.map(doc => {
        const data = doc.data();
        return {          id: doc.id,
          name: data.name || '',
          surname: data.surname || '',
          specialty: data.specialty || 'General Practice'
        };
      });

      // Get unique specialties from doctors who have them set
      specialties = Array.from(new Set(
        doctorsList
          .map(doc => doc.specialty)
          .filter(spec => spec && spec.trim() !== '')
      ))
      .sort((a, b) => a.localeCompare(b));// Sort alphabetically
    } catch (error) {
      console.error('Error fetching doctors:', error);
      submissionMessage = 'Failed to load doctors list';
      submissionMessageType = 'error';
    } finally {
      isLoadingDoctors = false;
    }
  }
  // Unsubscribes
  let unsubPatient: () => void;
  let unsubDoctors: () => void;
  let unsubPrescriptions: () => void;
  let unsubLabTests: () => void;
  let unsubAppointments: () => void;
  let unsubBills: () => void;
</script>

<h1 class="text-2xl font-bold ml-6">Hello, {patientData ? `${patientData.name} ${patientData.surname}` : 'Patient'}!</h1>
<div class="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
  <!-- Doctors Section -->
  <div class="bg-[#2c2c2c] rounded-2xl p-4 shadow-md flex flex-col items-center justify-center">
    <h2 class="text-xl font-semibold mb-2">Doctors Taking Care of You</h2>
    {#if doctors.length}
      <ul class="menu text-base">
        {#each doctors as docName}
          <li>Dr. {docName}</li>
        {/each}
      </ul>
    {:else}
      <p class="text-gray-500">No doctors assigned yet.</p>
    {/if}
  </div>

  <!-- Next Appointment Countdown -->
  <div class="bg-[#2c2c2c] rounded-2xl p-4 shadow-md flex items-center justify-center">
    <div class="text-center">
      <h2 class="text-xl font-semibold mb-2">Next Appointment</h2>
      {#if nextAppointmentDays !== null}
        <p class="text-4xl font-bold">{nextAppointmentDays} days</p>
      {:else}
        <p class="text-gray-500">No upcoming appointments.</p>
      {/if}
    </div>
  </div>

  <!-- Billing Table -->
 <div class="bg-[#2c2c2c] rounded-xl shadow-lg w-full p-5 flex flex-col items-center justify-center">
    <span class="text-2xl font-semibold text-white mb-2">
      My Bills (Pending)
    </span>
    <div class="w-full h-40 overflow-y-auto">
      <table class="table table-sm w-full text-white">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {#if bills.filter(b => b.status === 'pending').length === 0}
            <tr>
              <td colspan="3" class="text-center text-gray-400">
                No bills found.
              </td>
            </tr>
          {/if}

          {#each bills.filter(b => b.status === 'pending').slice(0,5) as bill}
            <tr>
              <td>{bill.description || '-'}</td>
              <td>₱{bill.amount || '0'}</td>
              <td>{bill.status === 'paid' ? '✅ Paid' : '🔴 Pending'}</td>
            </tr>
          {/each}
        </tbody>
      </table>

      <div class="flex items-center justify-center mt-2">
        <a href="/dashboard/patient/listbill" class="text-lg underline text-green-400">
          View All
        </a>
      </div>
    </div>
  </div>


  <div class="bg-[#2c2c2c] rounded-xl shadow-lg w-full p-5 flex flex-col items-center justify-center">
    <span class="text-2xl font-semibold text-white mb-2">
      My Appointments (Pending)
    </span>

    <div class="w-full h-40 overflow-y-auto">
      <table class="table table-sm w-full text-white">
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Doctor</th>
            <th>Reason</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {#if appointments.filter(a => a.status === 'Pending').length === 0}
            <tr>
              <td colspan="5" class="text-center text-gray-400">
                No pending or completed appointments found.
              </td>
            </tr>
          {/if}

          {#each [...appointments].filter(a => a.status === 'Pending').slice(0, 5) as appointment}
            <tr>
              <td>
                {appointment.date
                  ? (typeof appointment.date === 'string'
                      ? new Date(appointment.date).toLocaleDateString()
                      : appointment.date.toDate
                      ? appointment.date.toDate().toLocaleDateString()
                      : '-')
                  : '-'}
              </td>
              <td>{appointment.time || '-'}</td>
              <td>{appointment.doctor || '-'}</td>
              <td>{appointment.reason || '-'}</td>
              <td>{appointment.status || '-'}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>

    <a href="/dashboard/patient/sidebar/appointments" class="text-lg underline text-green-400 mt-2">
      View All
    </a>
</div>

</div>
<!-- Book Appointment Button -->
<div class="flex justify-center">
  <button
    class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition-all duration-150 ease-in-out transform hover:scale-105"
    on:click={() => {
      showModal = true;
      fetchDoctors();
    }}
  >
    <span class="mr-2">📅</span> Book Appointment
  </button>
</div>

{#if showModal}
<div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4 transition-opacity duration-300 ease-in-out" on:click|self={() => showModal = false}>
  <div class="bg-[#2c2c2c] p-6 sm:p-8 rounded-xl shadow-2xl max-w-lg w-full text-gray-100 transform transition-all duration-300 ease-in-out scale-100" role="dialog" aria-modal="true" aria-labelledby="modal-title" on:click|stopPropagation>
    <div class="flex justify-between items-center mb-6">
      <h2 id="modal-title" class="text-2xl font-semibold text-white">New Appointment</h2>
      <button on:click={() => showModal = false} class="text-gray-400 hover:text-white text-3xl leading-none focus:outline-none">&times;</button>
    </div>

    {#if submissionMessage}
      <div class={`p-3 mb-4 rounded-md text-sm font-medium ${submissionMessageType === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}`} role="alert">
        {submissionMessage}
      </div>
    {/if}

    <form on:submit|preventDefault={submitAppointment}>
      <div class="space-y-5">
        <div>          <label for="specialty" class="block text-sm font-medium text-gray-300 mb-1">Specialty <span class="text-red-400">*</span></label>          
          <select 
            id="specialty" 
            bind:value={specialty} 
            class="w-full bg-[#3b3b3b] text-gray-100 p-2.5 border border-gray-600 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors" 
            on:change={() => {
              doctor = '';
              // Reset doctor selection when specialty changes
            }} 
            required
          >
            <option value="">Select a specialty</option>
            {#if isLoadingDoctors}
              <option disabled>Loading specialties...</option>
            {:else if specialties.length === 0}
              <option disabled>No specialties available.</option>
            {:else}
              {#each specialties as spec (spec)}
                <option value={spec}>{spec}</option>
              {/each}
            {/if}
          </select>
        </div>

        <div>
          <label for="doctor" class="block text-sm font-medium text-gray-300 mb-1">Doctor <span class="text-red-400">*</span></label>          <select 
            id="doctor" 
            bind:value={doctor} 
            class="w-full bg-[#3b3b3b] text-gray-100 p-2.5 border border-gray-600 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors" 
            disabled={!specialty || isLoadingDoctors || doctorsList.filter(doc => doc.specialty === specialty).length === 0} 
            required
          >
            <option value="" disabled>Select a doctor</option>
            {#if specialty && !isLoadingDoctors}
              {#each doctorsList.filter(doc => doc.specialty === specialty) as doc (doc.id)}
                <option value={doc.id}>{doc.name} {doc.surname}</option>
              {/each}
              {#if doctorsList.filter(doc => doc.specialty === specialty).length === 0}
                  <option disabled>No doctors for this specialty.</option>
              {/if}
            {/if}
          </select>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label for="appointmentDate" class="block text-sm font-medium text-gray-300 mb-1">Date <span class="text-red-400">*</span></label>
            <input type="date" id="appointmentDate" bind:value={appointmentDate} min={today}
              class="w-full bg-[#3b3b3b] text-gray-100 p-2.5 border border-gray-600 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors" required>
          </div>
          <div>
            <label for="appointmentTime" class="block text-sm font-medium text-gray-300 mb-1">Time <span class="text-red-400">*</span></label>
            <input type="time" id="appointmentTime" bind:value={appointmentTime}
              class="w-full bg-[#3b3b3b] text-gray-100 p-2.5 border border-gray-600 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors" required>
          </div>
        </div>

        <div>
          <label for="reason" class="block text-sm font-medium text-gray-300 mb-1">Reason for Appointment <span class="text-red-400">*</span></label>
          <select id="reason" bind:value={reason} class="w-full bg-[#3b3b3b] text-gray-100 p-2.5 border border-gray-600 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors" required>
            <option value="" disabled>Select a reason</option>
            <option value="Routine Checkup">Routine Checkup</option>
            <option value="Consultation">Consultation</option>
            <option value="Follow-up">Follow-up</option>
            <option value="Medication Refill">Medication Refill</option>
            <option value="Test Results Review">Test Results Review</option>
            <option value="Injury Consultation">Injury Consultation</option>
            <option value="Mental Health Concern">Mental Health Concern</option>
            <option value="Headache">Headache</option>
            <option value="Chest Pain">Chest Pain</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row justify-end gap-3 mt-8 pt-6 border-t border-gray-700">
        <button type="button" on:click={() => showModal = false}
          class="w-full sm:w-auto bg-gray-600 hover:bg-gray-500 text-white font-semibold py-2.5 px-5 rounded-lg transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-400">
          Cancel
        </button>
        <button type="submit"
          disabled={isSubmitDisabled}
          class="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 px-5 rounded-lg transition duration-150 ease-in-out disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-green-400">
          {#if isSubmitDisabled && !isLoadingDoctors}Confirm Appointment{:else}Confirm Appointment{/if}
        </button>
      </div>
    </form>
  </div>
</div>
{/if}