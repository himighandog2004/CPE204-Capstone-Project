<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { db } from '$lib/firebase';  import { collection, query, where, onSnapshot, updateDoc, doc, getDocs, deleteDoc, QuerySnapshot, type DocumentData } from 'firebase/firestore';
  import { getAuth } from 'firebase/auth';
  import { writable, type Writable } from 'svelte/store';

  // Appointment type
  type Appointment = {
    id: string;
    patientName: string;
    date: string | number | Date;
    status: 'Pending' | 'Completed' | 'Cancelled' | string;
    [key: string]: any;
  };

  let appointments: Appointment[] = [];
  let filteredAppointments: Appointment[] = [];
  let search = '';
  let filter: Appointment['status'] | 'All' = 'All';
  let loading = true;
  let error: string | null = null;
  let unsub: (() => void) | undefined;
  let updating: Record<string, boolean> = {};

  // Debounce search
  let searchTimeout: ReturnType<typeof setTimeout>;
  let debouncedSearch = '';
  $: {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      debouncedSearch = search;
    }, 300);
  }

  // Real-time Firestore listener
  async function setupListener() {
    loading = true;
    error = null;
    const user = getAuth().currentUser;
    if (!user) {
      error = 'Not authenticated.';
      loading = false;
      return;
    }
    try {
      const q = query(collection(db, 'appointments'), where('doctorId', '==', user.uid));
      unsub = onSnapshot(q, (snapshot: QuerySnapshot<DocumentData>) => {
        appointments = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Appointment[];
        loading = false;
      }, (e) => {
        error = 'Failed to fetch appointments.';
        loading = false;
      });
    } catch (e) {
      error = 'Failed to fetch appointments.';
      loading = false;
    }
  }

  onMount(setupListener);
  onDestroy(() => { unsub && unsub(); });

  // Filtering logic (reactive)
  $: filteredAppointments = appointments.filter(a => {
    const matchesSearch = a.patientName?.toLowerCase().includes(debouncedSearch.toLowerCase());
    const matchesFilter = filter === 'All' || a.status === filter;
    return matchesSearch && matchesFilter;
  });
  // Update appointment status
  async function updateStatus(id: string, status: Appointment['status']) {
    updating = { ...updating, [id]: true };
    try {
      await updateDoc(doc(db, 'appointments', id), { status });
      
      // If the appointment is cancelled, find and delete the associated bill
      if (status === 'Cancelled') {
        const billsQuery = query(
          collection(db, 'bills'), 
          where('appointmentId', '==', id),
          where('type', '==', 'appointment')
        );
        const billsSnap = await getDocs(billsQuery);
        const deletePromises = billsSnap.docs.map(billDoc => 
          deleteDoc(doc(db, 'bills', billDoc.id))
        );
        await Promise.all(deletePromises);
      }
    } catch (e) {
      console.error('Failed to update status:', e);
      alert('Failed to update appointment status.');
    } finally {
      updating = { ...updating, [id]: false };
    }
  }

  function capitalizeWords(str: string): string {
    return str?.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase()) ?? '';
  }
</script>

<div class="p-6 text-white bg-[#181818] space-y-6">
  <h1 class="text-3xl font-bold">Appointment List</h1>

  <!-- Search & Filter -->
  <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
    <input
      type="text"
      bind:value={search}
      placeholder="Search by patient name"
      class="bg-[#2c2c2c] text-white px-4 py-2 rounded-lg border border-gray-600 w-full md:w-1/2"
    />
    <select
      bind:value={filter}
      class="bg-[#2c2c2c] text-white px-4 py-2 rounded-lg border border-gray-600"
    >
      <option>All</option>
      <option>Pending</option>
      <option>Completed</option>
      <option>Cancelled</option>
    </select>
  </div>

  <!-- Loading/Error State -->
  {#if loading}
    <div class="text-center py-8 text-gray-400">Loading appointments...</div>
  {:else if error}
    <div class="text-center py-8 text-red-400">{error}</div>
  {:else}
    <!-- Appointments Table -->
    <div class="overflow-x-auto mt-4 h-100 rounded-xl">
        <table class="table table-sm min-w-full overflow-y-scroll text-sm bg-[#2c2c2c] rounded-xl shadow-lg max-h-100">
            <thead class="text-left bg-[#1f1f1f] text-gray-400">
            <tr>
                <th class="px-6 py-3">Patient Name</th>
                <th class="px-6 py-3">Date & Time</th>
                <th class="px-6 py-3">Status</th>
                <th class="px-6 py-3">Actions</th>
                <th class="px-6 py-3">Reason</th>
            </tr>
            </thead>
            <tbody>
            {#if filteredAppointments.length === 0}
                <tr><td colspan="4" class="text-center py-6 text-gray-500">No appointments found.</td></tr>
            {:else}
                {#each filteredAppointments as appt}
                <tr class="border-t border-[#3a3a3a] hover:bg-[#262626] transition">
                    <td class="px-6 py-4">{appt.patientName}</td>
                    <td class="px-6 py-4">{appt.date ? new Date(appt.date).toLocaleString() : '-'}</td>
                    <td class="px-6 py-4 capitalize">{appt.status}</td>
                    <td class="px-6 py-4 flex gap-2">
                        <button
                            class="btn btn-xs btn-success"
                            disabled={appt.status !== 'Pending' || updating[appt.id]}
                            on:click={() => updateStatus(appt.id, 'Completed')}
                        >Complete</button>
                        <button
                            class="btn btn-xs btn-error"
                            disabled={appt.status !== 'Pending' || updating[appt.id]}
                            on:click={() => updateStatus(appt.id, 'Cancelled')}
                        >Cancel</button>
                    </td>
                    <td class="px-6 py-4">{appt.reason || appt.visitReason || '-'}</td><!--Reason for Visit-->
                </tr>
                {/each}
            {/if}
            </tbody>
        </table>
    </div>
  {/if}
</div>
