<script lang="ts">
  import { getContext } from 'svelte';
  import type { Writable } from 'svelte/store';

  // Retrieve patient's appointments from context
  let appointments: any[] = [];
  const patientStore = getContext('loggedInPatient') as Writable<any>;

  let unsubPatient: (() => void) | undefined;
  if (patientStore && typeof patientStore.subscribe === 'function') {
    unsubPatient = patientStore.subscribe((value: any) => {
      appointments = value.appointments || [];
    });
  }
</script>

<div class="bg-gray-700 rounded-xl shadow-lg w-full p-5 flex flex-col items-center">
  <h2 class="text-2xl font-bold text-white">📅 Appointment History</h2>

  {#if appointments.length > 0}
    <div class="overflow-x-auto w-full mt-4">
      <table class="table-auto w-full border border-gray-600 text-white">
        <thead>
          <tr class="bg-gray-800">
            <th class="px-4 py-2">Date</th>
            <th class="px-4 py-2">Doctor</th>
            <th class="px-4 py-2">Reason</th>
            <th class="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {#each [...appointments].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) as appointment}
          <tr class="border-t">
            <td class="px-4 py-2">{appointment.date ? new Date(appointment.date).toLocaleDateString() : '-'}</td>
            <td class="px-4 py-2">{appointment.doctor}</td>
            <td class="px-4 py-2">{appointment.reason}</td>
            <td class="px-4 py-2">
              {#if appointment.status === 'completed'}
                <span class="text-green-400 font-semibold">✔ Completed</span>
              {:else if appointment.status === 'cancelled'}
                <span class="text-red-400 font-semibold">✖ Cancelled</span>
              {:else}
                <span class="text-yellow-400 font-semibold">🕒 Upcoming</span>
              {/if}
            </td>
          </tr>
          {/each}
        </tbody>
      </table>
    </div>
  {:else}
    <p class="text-white mt-4">No past appointments found.</p>
  {/if}
</div>