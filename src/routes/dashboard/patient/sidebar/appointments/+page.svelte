<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { getAuth, onAuthStateChanged } from 'firebase/auth';
  import { db } from '$lib/firebase';
  import { collection, query, where, onSnapshot, doc, updateDoc } from 'firebase/firestore';

  let appointments: {
    id: string;
    date: any;
    time: string;
    doctor: string;
    reason: string;
    status: string;
  }[] = [];
  let loading = true;
  let error: string | null = null;
  let unsubAppointments: (() => void) | undefined;

  function formatDate(date: any) {
    if (!date) return '-';
    const d = date.toDate ? date.toDate() : new Date(date);
    return d.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric'
    });
  }

  async function cancelAppointment(appointmentId: string) {
    try {
      const appointmentRef = doc(db, 'appointments', appointmentId);
      await updateDoc(appointmentRef, {
        status: 'Cancelled'
      });
    } catch (err) {
      console.error('Error cancelling appointment:', err);
      error = 'Failed to cancel appointment';
    }
  }

  onMount(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        error = 'Please login to view your appointments';
        loading = false;
        return;
      }

      try {
        // Set up real-time listener for appointments
        const appointmentsQuery = query(
          collection(db, 'appointments'),
          where('patientId', '==', user.uid)
        );

        unsubAppointments = onSnapshot(appointmentsQuery, (snap) => {
          appointments = snap.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          } as any));
          loading = false;
        }, (err) => {
          console.error('Error fetching appointments:', err);
          error = 'Failed to load appointments';
          loading = false;
        });
      } catch (err) {
        console.error('Error in appointment setup:', err);
        error = 'Failed to setup appointment listener';
        loading = false;
      }
    });
  });

  onDestroy(() => {
    if (unsubAppointments) unsubAppointments();
  });
</script>

<div class="p-6 bg-[#2c2c2c] rounded-2xl shadow-md text-white h-140">
  <h2 class="text-2xl font-bold mb-4 text-white">My Appointments</h2>

  {#if error}
    <p class="text-red-400">{error}</p>
  {/if}

  {#if loading}
    <p class="text-gray-400">Loading appointments...</p>
  {:else if appointments.length > 0}
    <div class="overflow-x-auto overflow-y-auto">
      <table class="min-w-full text-left text-sm">
        <thead class="bg-[#181818] text-gray-300 uppercase text-xs">
          <tr>
            <!-- Follow this table format -->
            <th class="px-4 py-3">Date</th>
            <th class="px-4 py-3">Time</th>
            <th class="px-4 py-3">Doctor</th>
            <th class="px-4 py-3">Reason</th>
            <th class="px-4 py-3">Status</th>
            <th class="px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {#each appointments as appt}
            <tr class="border-b border-[#3a3a3a] hover:bg-[#1f1f1f]">
              <td class="px-4 py-3">{formatDate(appt.date)}</td>
              <td class="px-4 py-3">{appt.time}</td>
              <td class="px-4 py-3">{appt.doctor}</td>
              <td class="px-4 py-3">{appt.reason}</td>
              <td class="px-4 py-3">
                <span class="px-2 py-1 rounded-full text-xs font-semibold
                  {appt.status === 'Pending' ? 'badge badge-warning' : ''}
                  {appt.status === 'Completed' ? 'badge badge-success' : ''}
                  {appt.status === 'Cancelled' ? 'badge badge-error' : ''}">
                  {appt.status}
                </span>
              </td>              
              <td class="px-4 py-3">
                {#if appt.status === 'Pending'}
                  <button class="btn btn-soft btn-error" on:click={() => cancelAppointment(appt.id)}>Cancel</button>
                {:else}
                  <span class="text-gray-500">-</span>
                {/if}
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  {:else}
    <p class="text-gray-400">You have no appointments yet.</p>
  {/if}
</div>

<style>
  body {
    background-color: #181818;
  }
</style>
