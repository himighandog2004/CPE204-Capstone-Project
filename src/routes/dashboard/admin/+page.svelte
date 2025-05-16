<script lang="ts">
  import { patientCount, doctorCount } from '$lib/stores/userData';
  import { onDestroy, getContext, onMount } from 'svelte';
  import type { Writable } from 'svelte/store';
  import { onSnapshot, query, collection, where } from 'firebase/firestore';
  import { db } from '$lib/firebase'; // Adjust the import based on your project structure

  let count = 0;
  let doctors = 0;
  let appointments = 0;
  const unsubPatient = patientCount.subscribe(value => {
    count = value;
  });
  const unsubDoctor = doctorCount.subscribe(value => {
    doctors = value;
  });

  // Get patients store from layout context and subscribe reactively
  let patients: any[] = [];
  const patientsStore = getContext('patients') as Writable<any[]>;
  let unsubPatients: (() => void) | undefined;
  if (patientsStore && typeof patientsStore.subscribe === 'function') {
    unsubPatients = patientsStore.subscribe((value: any[]) => {
      patients = value;
    });
  }

  // Get userName store from context and subscribe
  let userName = '';
  const userNameStore = getContext('userName') as Writable<string>;
  let unsubUserName: (() => void) | undefined;
  if (userNameStore && typeof userNameStore.subscribe === 'function') {
    unsubUserName = userNameStore.subscribe((value: string) => {
      userName = value;
    });
  }

  function capitalizeWords(str: string): string {
    return str?.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase()) ?? '';
  }

  onMount(() => {
    // Listen to pending appointments in Firestore
    const q = query(collection(db, 'appointments'), where('status', '==', 'Pending'));
    unsubAppointments = onSnapshot(q, (snapshot) => {
      appointments = snapshot.size;
    });
  });

  onDestroy(() => {
    unsubPatient();
    unsubDoctor();
    unsubPatients && unsubPatients();
    unsubUserName && unsubUserName();
    unsubAppointments && unsubAppointments();
  });
</script>

<div class="flex flex-col h-full w-full p-4 pt-1 pl-1">
  <div class="flex flex-row w-full justify-between gap-6">
      <!-- Patient Count Card -->
      <div class="bg-[#2c2c2c] rounded-xl shadow-lg w-full p-5 flex flex-col items-center justify-center">
      <span class="text-2xl font-semibold text-white">Patients</span>
      <span class="text-5xl font-extrabold text-[#F5C45E] mt-2">{count}</span>
      <span class="text-white mt-1">Total Registered</span>
      </div>
      <!-- Staff Management Card -->
      <div class="bg-[#2c2c2c] rounded-xl shadow-md w-full p-6 flex flex-col items-center justify-center">
      <span class="text-2xl font-semibold text-white">Staff</span>
      <span class="text-5xl font-extrabold text-[#F5C45E] mt-2">{doctors}</span>
      <span class="text-white mt-1">Doctors</span>
      </div>
      <!-- Appointments Card -->
      <div class="bg-[#2c2c2c] rounded-xl shadow-md w-full p-6 flex flex-col items-center justify-center">
      <span class="text-2xl font-semibold text-white">Appointments</span>
      <span class="text-5xl font-extrabold text-[#F5C45E] mt-2">{appointments}</span>
      <span class="text-white mt-1">Upcoming</span>
      </div>
  </div>
  <div class="flex flex-row w-full h-96">
    <!-- Left -->
    <div class="card-container flex flex-col w-1/2 h-full bg-[#2C2C2C] rounded-xl shadow-md items-center p-5 pb-2 mt-6">
      <div class="flex flex-row w-full items-start justify-between">
        <h1 class="text-3xl font-bold text-white">Recent Patients</h1>
        <a href="/dashboard/admin/sidebar/patientlist" class="text-lg underline text-white mt-2">View Full List</a>
      </div>
      <div class="flex flex-row h-90 w-full pt-1 pb-1">
        <div class="overflow-x-auto w-full rounded-box border border-base-content/3 bg-base-200">
          <table class="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Date Registered</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {#each [...patients]
                .map(p => ({ ...p, createdAt: p.createdAt ? new Date(p.createdAt) : new Date(0) }))
                .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
                .slice(0, 5) as patient, i}
                <tr>
                  <th>{i === 0 ? 1 : i + 1}</th>
                  <td>{capitalizeWords(patient.name)} {capitalizeWords(patient.surname)}</td>
                  <td>{patient.createdAt && patient.createdAt.getTime() > 0 ? patient.createdAt.toLocaleDateString() : '-'}</td>
                  <td>
                    {#if patient.isActive === true}
                    <div class="badge badge-success">
                      Active
                    </div>
                    {:else}
                    <div class="badge badge-error">
                      Inactive
                    </div>
                    {/if}
                  </td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- Right -->
    <div class="card-container flex flex-col w-1/2 h-full bg-[#2c2c2c] rounded-xl shadow-md items-center p-5 pb-2 mt-6 ml-6">
      <h1 class="text-2xl font-bold text-white mb-4">Dashboard Insights</h1>
      <div class="flex flex-col items-center justify-center h-full w-full">
        <p class="text-lg text-white">More analytics and widgets coming soon!</p>
        <div class="mt-6 w-full flex flex-col items-center">
          <div class="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center text-green-500 text-4xl font-bold mb-2">📊</div>
          <span class="text-[#d9d9d9]">Stay tuned for updates</span>
        </div>
      </div>
    </div>
  </div>
</div>
