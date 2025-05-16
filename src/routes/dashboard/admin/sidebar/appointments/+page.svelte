<script lang="ts">
    import { onDestroy, onMount } from 'svelte';
    import { db } from '$lib/firebase';
    import { collection, onSnapshot, query, orderBy, deleteDoc, doc } from 'firebase/firestore';
  
    let appointments: any[] = [];
    let unsubAppointments: (() => void) | undefined;
  
    onMount(() => {
      // Listen to Firestore appointments collection in real-time
      const q = query(collection(db, 'appointments'), orderBy('createdAt', 'desc'));
      unsubAppointments = onSnapshot(q, (snapshot) => {
        appointments = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      });
    });
  
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
  
    async function deleteAppointment(id: string) {
      if (confirm('Are you sure you want to delete this appointment?')) {
        try {
          await deleteDoc(doc(db, 'appointments', id));
          // Optionally, show a success message
        } catch (error) {
          console.error('Failed to delete appointment:', error);
          // Optionally, show an error message
        }
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
        <a href="/dashboard/admin/sidebar/patientlist" class="text-xl text-white underline mt-1 mr-2">View Patients list</a>
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
          <button class="btn btn-xs" on:click={() => toggleSort('Doctor')}>Sort by Doctor</button>
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
              <td>Actions</td>
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
                <td>
                  <button class="btn btn-xs btn-error" title="Delete" on:click={() => deleteAppointment(appointment.id)}>
                    🗑️
                  </button>
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div>
  </div>