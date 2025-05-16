<script lang="ts">
  import { onDestroy, getContext } from 'svelte';
  import type { Writable } from 'svelte/store';
  import { db } from '$lib/firebase';
  import { collection, query, where, onSnapshot } from 'firebase/firestore';
  import { getAuth, onAuthStateChanged } from 'firebase/auth';

  // Retrieve patient-specific data from context
  let userName = '';
  let appointments: any[] = [];
  
  const userNameStore = getContext('userName') as Writable<string>;

  let unsubUserName: (() => void) | undefined;

  if (userNameStore && typeof userNameStore.subscribe === 'function') {
    unsubUserName = userNameStore.subscribe((value: string) => {
      userName = value;
    });
  }

  let doctorUid = '';

  onAuthStateChanged(getAuth(), (user) => {
    if (user) {
      doctorUid = user.uid;
      // Listen to appointments where doctorId matches the logged-in doctor
      const q = query(collection(db, 'appointments'), where('doctorId', '==', doctorUid));
      onSnapshot(q, (snapshot) => {
        appointments = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      });
    }
  });

  onDestroy(() => {
    unsubUserName && unsubUserName();
  });
</script>

<div class="flex flex-col h-full w-full p-4 pt-1 pl-1">
  <h1 class="text-3xl text-black-500 pb-4">Hello Dr, {userName}! </h1>
  
  <!-- Top Row: Appointments & Billing -->
  <div class="flex flex-row w-full justify-between gap-6">
    
    <!-- My Appointments -->
    <div class="bg-gray-700 rounded-xl shadow-lg w-full p-5 flex flex-col items-center justify-center">
      <span class="text-2xl font-semibold text-white">My Appointments</span>
      {#if appointments.length > 0}
        {#each [...appointments].slice(0, 3) as appointment}
          <div class="text-white mt-2">
            <strong>{appointment.date ? new Date(appointment.date).toLocaleDateString() : '-'}</strong>
            with {appointment.patientName} ({appointment.status})
          </div>
        {/each}
        <a href="/Appointmentlist" class="text-lg underline text-green-400 mt-2">View All</a>
      {:else}
        <p class="text-white mt-2">No upcoming appointments.</p>
      {/if}
    </div>

   
  </div>


</div>