<script lang="ts">
  import { onDestroy, onMount, getContext } from 'svelte';
  import type { Writable } from 'svelte/store';
  import { db } from '$lib/firebase';
  import { collection, getDocs, serverTimestamp, query, where, onSnapshot } from 'firebase/firestore';
  import { doc, setDoc, getDoc, updateDoc, collection as fbCollection, addDoc as addDocFB } from 'firebase/firestore';

  // Retrieve patient-specific data from context
  let userName = '';
  let appointments: any[] = [];
  let bills: any[] = [];
  
  const userNameStore = getContext('userName') as Writable<string>;
  const patientStore = getContext('loggedInPatient') as Writable<any>;
  const appointmentsStore = getContext('appointments') as Writable<any[]>;

  let unsubUserName: (() => void) | undefined;
  let unsubPatient: (() => void) | undefined;
  let unsubAppointmentsRealtime: (() => void) | undefined;
  let unsubBillsRealtime: (() => void) | undefined;

  if (userNameStore && typeof userNameStore.subscribe === 'function') {
    unsubUserName = userNameStore.subscribe((value: string) => {
      userName = value;
    });
  }

  if (patientStore && typeof patientStore.subscribe === 'function') {
    unsubPatient = patientStore.subscribe((value: any) => {
      appointments = value.appointments || [];
      bills = value.bills || [];
    });
  }

  onMount(() => {
    // Fetch appointments for this patient in real time from Firestore
    if (userName) {
      const q = query(collection(db, 'appointments'), where('patientName', '==', userName));
      unsubAppointmentsRealtime = onSnapshot(q, (snapshot) => {
        appointments = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      });
      // Listen to bills for this patient (try both name and fallback to email if needed)
      const billQ = query(fbCollection(db, 'bills'), where('patientName', '==', userName));
      unsubBillsRealtime = onSnapshot(billQ, (snapshot) => {
        bills = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      });
    }
    fetchDoctors();
  });

  onDestroy(() => {
    unsubUserName && unsubUserName();
    unsubPatient && unsubPatient();
    unsubAppointmentsRealtime && unsubAppointmentsRealtime();
    unsubBillsRealtime && unsubBillsRealtime();
  });

  // --- Appointment Modal State and Logic ---
  let showModal = false;
  let doctor = '';
  let appointmentDate = '';
  let appointmentTime = '';
  let reason = '';
  let specialization = '';
  let specializations: string[] = [];
  let doctorsList: { id: string, name: string, surname: string, specialization: string }[] = [];
  let patientName = userName;
  let patientId = '';

  if (patientStore && typeof patientStore.subscribe === 'function') {
    patientStore.subscribe((value: any) => {
      patientName = value?.name || userName;
      patientId = value?.id || value?.uid || '';
    });
  }

  async function fetchDoctors() {
    try {
      const snapshot = await getDocs(collection(db, 'users'));
      doctorsList = snapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data(), specialization: doc.data().specialization || doc.data().specialty || '' }))
        .filter(doc => doc.role === 'Doctor');
      specializations = Array.from(new Set(doctorsList.map(doc => doc.specialization).filter(Boolean)));
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  }

  async function submitAppointment() {
    if (!doctor || !appointmentDate || !appointmentTime) return;
    const doctorObj = doctorsList.find(d => d.id === doctor);
    const appointment = {
      patientName,
      doctor: doctorObj ? `${doctorObj.name} ${doctorObj.surname}` : doctor,
      doctorId: doctor,
      date: appointmentDate,
      time: appointmentTime,
      reason,
      status: 'Pending',
      createdAt: serverTimestamp()
    };
    try {
      const docRef = await addDocFB(collection(db, 'appointments'), appointment);
      // Create a bill for this appointment (500 pesos)
      await addDocFB(fbCollection(db, 'bills'), {
        patientName,
        patientId, // Add patientId to the bill
        type: 'appointment',
        appointmentId: docRef.id,
        description: `Appointment with Dr. ${doctorObj ? `${doctorObj.name} ${doctorObj.surname}` : doctor}`,
        amount: 500,
        status: 'pending',
        createdAt: serverTimestamp()
      });
      if (appointmentsStore && typeof appointmentsStore.update === 'function') {
        appointmentsStore.update(list => [
          ...list,
          { id: docRef.id, ...appointment, createdAt: new Date() }
        ]);
      }
      showModal = false; // Close modal only after successful submission
      doctor = '';
      appointmentDate = '';
      appointmentTime = '';
      reason = '';
      specialization = '';
    } catch (error) {
      console.error('Failed to submit appointment:', error);
      // Optionally, show an error message to the user here
    }
  }
</script>

<div class="flex flex-col h-full w-full p-4 pt-1 pl-1">
  <h1 class="text-3xl text-black-500 pb-4">Hello, {userName}!</h1>
  
  <!-- Top Row: Appointments & Billing -->
  <div class="flex flex-row w-full justify-between gap-6">
    <!-- My Appointments Table -->
    <div class="bg-[#2c2c2c] rounded-xl shadow-lg w-full p-5 flex flex-col items-center justify-center">
      <span class="text-2xl font-semibold text-white mb-2">My Appointments (Pending & Completed)</span>
      <div class="overflow-x-auto w-full">
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
            {#if appointments.filter(a => a.status === 'Pending' || a.status === 'Completed').length === 0}
              <tr><td colspan="5" class="text-center text-gray-400">No pending or completed appointments found.</td></tr>
            {/if}
            {#each [...appointments].filter(a => a.status === 'Pending' || a.status === 'Completed').slice(0, 5) as appointment}
              <tr>
                <td>{appointment.date ? (typeof appointment.date === 'string' ? new Date(appointment.date).toLocaleDateString() : appointment.date.toDate ? appointment.date.toDate().toLocaleDateString() : '-') : '-'}</td>
                <td>{appointment.time || '-'}</td>
                <td>{appointment.doctor || '-'}</td>
                <td>{appointment.reason || '-'}</td>
                <td>{appointment.status || '-'}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
      <a href="/dashboard/patient/sidebar/appointmentlist" class="text-lg underline text-green-400 mt-2">View All</a>
    </div>

    <!-- Billing Table -->
    <div class="bg-[#2c2c2c] rounded-xl shadow-md w-full p-6 flex flex-col items-center justify-center">
      <span class="text-2xl font-semibold text-white mb-2">My Pending Bills</span>
        <div class="overflow-x-auto w-full">
          <table class="table table-sm w-full text-white">
            <thead>
              <tr>
                <th>Description</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {#if bills.filter(b => b.status === 'pending' || b.status === 'paid').length === 0}
                <tr><td colspan="3" class="text-center text-gray-400">No bills found.</td></tr>
              {/if}
              {#each bills.filter(b => b.status === 'pending' || b.status === 'paid') as bill}
                <tr>
                  <td>{bill.description || '-'}</td>
                  <td>₱{bill.amount || '0'}</td>
                  <td>{bill.status === 'paid' ? '✅ Paid' : '🔴 Pending'}</td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
    </div>
  </div>

  <!-- Book Appointment Button -->
  <div class="flex justify-center w-full mt-6">
    <button on:click={() => showModal = true}
      class="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg">
      📅 Book My Appointment
    </button>
  </div>

  <!-- Appointment Modal -->
  {#if showModal}
  <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-[#2c2c2c] p-6 rounded-xl shadow-lg max-w-md w-full">
      <h2 class="text-2xl font-bold mb-4">New Appointment</h2>
      <label class="block mt-4 mb-2">Select Specialization</label>
      <select bind:value={specialization} class="w-full text-black p-2 border rounded-md" on:change={() => doctor = ''}>
        <option value="" disabled selected>Select a specialization</option>
        {#each specializations as spec}
          <option value={spec}>{spec}</option>
        {/each}
      </select>
      <label class="block mt-4 mb-2">Select Doctor</label>
      <select bind:value={doctor} class="w-full p-2 border rounded-md text-black" disabled={!specialization}>
        <option value="" disabled selected>Select a doctor</option>
        {#each doctorsList.filter(doc => doc.specialization === specialization) as doc}
          <option value={doc.id}>{doc.name} {doc.surname}</option>
        {/each}
      </select>
      <div class="flex gap-4 mt-4">
        <div>
          <label class="block mb-2">Date</label>
          <input type="date" bind:value={appointmentDate}
            class="w-full p-2 border rounded-md text-black">
        </div>
        <div>
          <label class="block mb-2">Time</label>
          <input type="time" bind:value={appointmentTime}
            class="w-full p-2 border rounded-md text-black">
        </div>
      </div>
      <label class="block mt-4 mb-2">Reason for Appointment</label>
      <select bind:value={reason} class="w-full p-2 border rounded-md text-black">
        <option value="" disabled selected>Select a reason</option>
        <option value="Routine Checkup">Routine Checkup</option>
        <option value="Headache">Headache</option>
        <option value="Chest Pain">Chest Pain</option>
        <option value="Follow-up">Follow-up</option>
        <option value="Medication Refill">Medication Refill</option>
        <option value="Test Results Review">Test Results Review</option>
        <option value="Injury Consultation">Injury Consultation</option>
        <option value="Mental Health Concern">Mental Health Concern</option>
      </select>
      <div class="flex justify-between mt-6">
        <button on:click={() => showModal = false} 
          class="bg-red-500 text-white font-bold py-2 px-4 rounded-lg">
          Cancel
        </button>
        <button on:click={submitAppointment} 
          class="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg">
          Confirm Appointment
        </button>
      </div>
    </div>
  </div>
  {/if}

</div>