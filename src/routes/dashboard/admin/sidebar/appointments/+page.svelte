<script lang="ts">
    import { getContext, onDestroy } from 'svelte';
    import type { Writable } from 'svelte/store';
  
    let appointments: any[] = [];
    const appointmentsStore = getContext('appointments') as Writable<any[]>;
    let unsubAppointments: (() => void) | undefined;
  
    if (appointmentsStore && typeof appointmentsStore.subscribe === 'function') {
      unsubAppointments = appointmentsStore.subscribe((value: any[]) => {
        appointments = value;
      });
    }
  
    onDestroy(() => {
      unsubAppointments && unsubAppointments();
    });
  
    let searchQuery = '';
    let sortField: keyof typeof appointments[0] | '' = '';
    let sortAsc = true;
  
    function toggleSort(field: typeof sortField) {
      if (sortField === field) {
        sortAsc = !sortAsc;
      } else {
        sortField = field;
        sortAsc = true;
      }
    }
  
    $: filteredAppointments = [...appointments]
      .filter((a) => {
        return a.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
               a.date.includes(searchQuery) ||
               a.status.toLowerCase().includes(searchQuery.toLowerCase())||
               a.doctor.toLowerCase().includes(searchQuery);
               
      })
      .sort((a, b) => {
        if (!sortField) return 0; // default sort
        const aVal = a[sortField] ?? '';
        const bVal = b[sortField] ?? '';
        if (typeof aVal === 'string' && typeof bVal === 'string') {
          return sortAsc
            ? aVal.localeCompare(bVal)
            : bVal.localeCompare(aVal);
        }
        return 0;
      });
  </script>
  
  <div class="flex flex-col h-full w-full">
    <div class="bg-gray-700 rounded-xl shadow-lg p-4">
      <div class="flex flex-row w-full justify-between">
        <h1 class="text-3xl text-white">Appointment List</h1>
        <a href="/dashboard/admin/sidebar/patients" class="text-xl text-white underline mt-1 mr-2">View Patients</a>
      </div>
  
    
      <div class="flex justify-between items-center mb-3 pr-2 mt-2">
        <input
          type="text"
          placeholder="Search by patient name, date, status, or doctor..."
          bind:value={searchQuery}
          class="input input-sm input-bordered w-1/2"
        />
        <div class="space-x-2">
          <button class="btn btn-xs" on:click={() => toggleSort('patientName')}>Sort by Patient Name</button>
          <button class="btn btn-xs" on:click={() => toggleSort('date')}>Sort by Date</button>
          <button class="btn btn-xs" on:click={() => toggleSort('status')}>Sort by Status</button>
          <button class="btn btn-xs" on:click={() => toggleSort('Dortor')}>Sort by Doctor</button>
        </div>
      </div>
  
      <!-- Table -->
      <div class="overflow-x-auto overflow-y-scroll w-full h-115 bg-base-100 rounded-lg">
        <table class="table table-sm table-pin-rows table-pin-cols">
          <thead>
            <tr>
              <th>#</th>
              <td class="w-50">Patient Name</td>
              <td>Date</td>
              <td>Time</td>
              <td>Doctor</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>
            {#each filteredAppointments as appointment, i}
              <tr>
                <th>{i + 1}</th>
                <td>{appointment.patientName}</td>
                <td>{appointment.date || '-'}</td>
                <td>{appointment.time || '-'}</td>
                <td>{appointment.doctor || '-'}</td>
                <td>
                  {#if appointment.status === 'Confirmed'}
                    <div class="badge badge-success">Confirmed</div>
                  {:else if appointment.status === 'Pending'}
                    <div class="badge badge-warning">Pending</div>
                  {:else}
                    <div class="badge badge-error">Cancelled</div>
                  {/if}
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div>
  </div>