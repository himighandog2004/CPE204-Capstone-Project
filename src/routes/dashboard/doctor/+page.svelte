<script lang="ts">
  import { onDestroy, getContext } from 'svelte';
  import type { Writable } from 'svelte/store';
  import { db } from '$lib/firebase';
  import { collection, query, where, onSnapshot, getDocs, getDoc, doc, updateDoc } from 'firebase/firestore';
  import { getAuth, onAuthStateChanged } from 'firebase/auth';

  let userName = '';
  let appointments: any[] = [];
  let patients: any[] = [];
  let labResults: any[] = [];
  let totalPatients = 0;
  let completedAppointments = 0;
  let pendingAppointments = 0;
  let totalLabTests = 0;
  let loading = {
    patients: true,
    labResults: true
  };

  const userNameStore = getContext('userName') as Writable<string>;
  let unsubUserName: (() => void) | undefined;

  if (userNameStore?.subscribe) {
    unsubUserName = userNameStore.subscribe((value) => {
      userName = value;
    });
  }

  let doctorUid = '';

  // Load patients for current doctor
  async function loadPatients(doctorId: string) {
    try {
      const apptQuery = query(collection(db, 'appointments'), where('doctorId', '==', doctorId));
      const apptSnap = await getDocs(apptQuery);
      
      // Get unique patient IDs from appointments
      const patientIds = [...new Set(apptSnap.docs
        .map(doc => doc.data().patientId)
        .filter(id => id && id.trim() !== ''))]; // Filter out null/empty IDs
      
      if (patientIds.length === 0) {
        patients = [];
        totalPatients = 0;
        return;
      }

      // Fetch patient details in parallel
      const patientPromises = patientIds.map(async id => {
        const patientDoc = await getDoc(doc(db, 'users', id));
        if (patientDoc.exists()) {
          const data = patientDoc.data();
          return {
            id: patientDoc.id,
            name: data.name,
            surname: data.surname,
            ...data
          };
        }
        return null;
      });
      
      const patientResults = await Promise.all(patientPromises);
      patients = patientResults.filter(p => p !== null && p.name); // Only include patients with valid data
      totalPatients = patients.length;
      console.log('Loaded patients:', patients.length);
    } catch (error) {
      console.error('Error loading patients:', error);
    } finally {
      loading.patients = false;
    }
  }

  // Load lab results for current doctor
  async function loadLabResults(doctorId: string) {
    try {
      const labQuery = query(
        collection(db, 'laborders'),
        where('doctorID', '==', doctorId)
      );
      const labSnap = await getDocs(labQuery);
      // Only include completed lab orders
      labResults = labSnap.docs
        .map(doc => ({ id: doc.id, ...doc.data() }))
        .filter(result => result.status === 'Completed');
      totalLabTests = labResults.length;
    } catch (error) {
      console.error('Error loading lab results:', error);
    } finally {
      loading.labResults = false;
    }
  }

  // Handle resolving a lab result
  async function resolveLabResult(resultId: string) {
    try {
      const labRef = doc(db, 'laborders', resultId);
      await updateDoc(labRef, {
        status: 'Resolved'
      });
      // Remove from local list
      labResults = labResults.filter(result => result.id !== resultId);
      totalLabTests = labResults.length;
    } catch (error) {
      console.error('Error resolving lab result:', error);
    }
  }

  // Update onAuthStateChanged to load all data
  onAuthStateChanged(getAuth(), (user) => {
    if (user) {
      doctorUid = user.uid;
      
      // Set up appointments listener
      const appointmentsQuery = query(collection(db, 'appointments'), where('doctorId', '==', doctorUid));
      onSnapshot(appointmentsQuery, (snapshot) => {
        appointments = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        completedAppointments = appointments.filter(a => a.status === 'Completed').length;
        pendingAppointments = appointments.filter(a => a.status === 'Pending').length;
        
        // Reload patients after getting new appointments to ensure we have latest data
        loadPatients(doctorUid);
      });

      // Initial load of lab results
      loadLabResults(doctorUid);
    }
  });

  onDestroy(() => {
    unsubUserName?.();
  });
</script>

<div class="p-6 w-full h-full text-white bg-[#181818] space-y-6">
  <!-- Greeting -->
  <h1 class="text-3xl font-bold">Hello, Dr. {userName}</h1>

  <!-- Dashboard Grid -->
  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
    <!-- Appointments Card -->
    <div class="bg-[#2c2c2c] rounded-2xl p-6 shadow-lg">
      <h2 class="text-xl font-semibold mb-4">Upcoming Appointments</h2>
      {#if appointments.length > 0}
        <ul class="space-y-2">
          {#each [...appointments]
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .slice(0, 2) as appointment}
            <li class="bg-[#1f1f1f] p-3 rounded-lg">
              <div class="font-medium">{appointment.patientName}</div>
              <div class="text-sm text-gray-400">
                {appointment.date ? new Date(appointment.date).toLocaleString() : '-'}
                • {appointment.status}
              </div>
            </li>
          {/each}
        </ul>
        <a href="/dashboard/doctor/sidebar/Appointmentlist" class="inline-block mt-4 text-blue-400 underline text-sm">View All Appointments</a>
      {:else}
        <p class="text-gray-400">No upcoming appointments.</p>
      {/if}
    </div>

    <!-- Patients Card -->
    <div class="bg-[#2c2c2c] rounded-2xl p-6 shadow-lg">
      <h2 class="text-xl font-semibold mb-4">Patients</h2>
      {#if loading.patients}
        <p class="text-gray-400">Loading patients...</p>
      {:else if patients.length > 0}
        <ul class="space-y-2">
          {#each patients.slice(0, 2) as patient}
            <li class="bg-[#1f1f1f] p-3 rounded-lg">
              <div class="font-medium">{patient.name}</div>
              <div class="text-sm text-gray-400">
                {patient.email}
              </div>
            </li>
          {/each}
        </ul>
        <a href="/dashboard/doctor/sidebar/Mpatient" class="inline-block mt-4 text-blue-400 underline text-sm">View All Patients</a>
      {:else}
        <p class="text-gray-400">No patients found.</p>
      {/if}
    </div>    <!-- Lab Results Card -->
    <div class="bg-[#2c2c2c] rounded-2xl p-6 shadow-lg">
      <h2 class="text-xl font-semibold mb-4">Lab Test Results</h2>
      {#if loading.labResults}
        <p class="text-gray-400">Loading lab results...</p>
      {:else if labResults.length > 0}
        <ul class="space-y-2">
          {#each labResults.slice(0, 1) as result}            <li class="bg-[#1f1f1f] p-3 rounded-lg">
              <div class="font-medium">Patient: {result.patient}</div>
              <div class="text-sm text-blue-400 font-semibold">Lab Result ready for Pick-up</div>
              <div class="text-sm text-gray-400">
                Test: {result.test} • 
                Date: {result.createdAt ? new Date(result.createdAt.seconds * 1000).toLocaleString() : '-'}
              </div>
              <div class="mt-2">
                <button 
                  class="bg-green-500 hover:bg-green-600 text-white text-sm px-3 py-1 rounded-md transition-colors"
                  on:click={() => resolveLabResult(result.id)}
                >
                  Resolve
                </button>
              </div>
            </li>
          {/each}
        </ul>
        <a href="/dashboard/doctor/sidebar/laborder" class="inline-block mt-4 text-blue-400 underline text-sm">View All Lab Results</a>
      {:else}
        <p class="text-gray-400">No completed lab results found.</p>
      {/if}
    </div>
  </div>

  <!-- Statistics Overview -->
  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">
    <div class="bg-[#2c2c2c] rounded-2xl p-6 shadow-lg">
      <h3 class="text-sm text-gray-400">Total Patients</h3>
      <p class="text-2xl font-bold mt-2">{totalPatients}</p>
    </div>

    <div class="bg-[#2c2c2c] rounded-2xl p-6 shadow-lg">
      <h3 class="text-sm text-gray-400">Completed Appointments</h3>
      <p class="text-2xl font-bold mt-2">{completedAppointments}</p>
    </div>

    <div class="bg-[#2c2c2c] rounded-2xl p-6 shadow-lg">
      <h3 class="text-sm text-gray-400">Pending Appointments</h3>
      <p class="text-2xl font-bold mt-2">{pendingAppointments}</p>
    </div>

    <div class="bg-[#2c2c2c] rounded-2xl p-6 shadow-lg">
      <h3 class="text-sm text-gray-400">Lab Tests Ordered</h3>
      <p class="text-2xl font-bold mt-2">{totalLabTests}</p>
    </div>
  </div>
</div>
