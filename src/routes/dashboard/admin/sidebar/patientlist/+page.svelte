<script lang="ts">
  import { getContext, onDestroy } from 'svelte';
  import type { Writable } from 'svelte/store';

  let patients: any[] = [];
  const patientsStore = getContext('patients') as Writable<any[]>;
  let unsubPatients: (() => void) | undefined;

  if (patientsStore && typeof patientsStore.subscribe === 'function') {
    unsubPatients = patientsStore.subscribe((value: any[]) => {
      patients = value;
    });
  }

  onDestroy(() => {
    unsubPatients && unsubPatients();
  });

  let searchQuery = '';
  let sortField: keyof typeof patients[0] | '' = '';
  let sortAsc = true;

  function toggleSort(field: typeof sortField) {
    if (sortField === field) {
      sortAsc = !sortAsc;
    } else {
      sortField = field;
      sortAsc = true;
    }
  }

  function capitalizeWords(str: string): string {
    return str?.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase()) ?? '';
  }

  $: filteredPatients = [...patients]
    .filter((p) => {
      const fullName = `${p.name} ${p.surname}`.toLowerCase();
      return fullName.includes(searchQuery.toLowerCase()) ||
             p.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
             p.phone?.includes(searchQuery);
    })
    .map(p => ({ ...p, createdAt: p.createdAt ? new Date(p.createdAt) : new Date(0) }))
    .sort((a, b) => {
      if (!sortField) return b.createdAt.getTime() - a.createdAt.getTime(); // default sort
      const aVal = a[sortField] ?? '';
      const bVal = b[sortField] ?? '';
      if (typeof aVal === 'string' && typeof bVal === 'string') {
        return sortAsc
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal);
      }
      if (a.createdAt && b.createdAt) {
        return sortAsc
          ? a.createdAt.getTime() - b.createdAt.getTime()
          : b.createdAt.getTime() - a.createdAt.getTime();
      }
      return 0;
    });
</script>

<div class="flex flex-col h-full w-full">
  <div class="bg-[#102e50] rounded-t-xl p-2 pt-3 px-4">
    <div class="flex flex-row w-full justify-between">
      <h1 class="text-3xl text-white">Patient List</h1>
      <a href="/dashboard/admin/sidebar/appointments" class="text-xl text-white underline mt-1 mr-2">View Appointments</a>
    </div>

    <!-- Search and Sort Controls -->
    <div class="flex justify-between items-center mb-3 pr-2 mt-2">
      <input
        type="text"
        placeholder="Search name, email, or phone..."
        bind:value={searchQuery}
        class="input input-sm w-1/2"
      />
      <div class="space-x-2">
        <button class="btn btn-xs btn-soft btn-success" on:click={() => toggleSort('name')}>Sort by Name</button>
        <button class="btn btn-xs btn-soft btn-success" on:click={() => toggleSort('createdAt')}>Sort by Date</button>
        <button class="btn btn-xs btn-soft btn-error">Remove Patient</button>
      </div>
    </div>
  </div>
  <hr class="border-t-2 border-black" />
  <div class="bg-[#2c2c2c] rounded-b-xl p-5">
    <!-- Table -->
    <div class="overflow-x-auto overflow-y-scroll w-full h-108 bg-base-100 rounded-lg">
      <table class="table table-sm table-pin-rows table-pin-cols">
        <thead>
          <tr>
            <th>#</th>
            <td class="w-50">Name</td>
            <td>Birthdate</td>
            <td>Age</td>
            <td>Sex</td>
            <td>Phone</td>
            <td>Address</td>
            <td>Email</td>
            <td>Date Registered</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          {#each filteredPatients as patient, i}
            <tr>
              <th>{i + 1}</th>
              <td>{capitalizeWords(patient.name)} {capitalizeWords(patient.surname)}</td>
              <td>{patient.birthdate || '-'}</td>
              <td>{patient.age ?? '-'}</td>
              <td>{capitalizeWords(patient.sex) || '-'}</td>
              <td>{patient.phone || '-'}</td>
              <td>{capitalizeWords(patient.address) || '-'}</td>
              <td>{patient.email || '-'}</td>
              <td>{patient.createdAt ? new Date(patient.createdAt).toLocaleDateString() : '-'}</td>
              <td>
                {#if patient.isActive === true}
                  <div class="badge badge-success">Active</div>
                {:else}
                  <div class="badge badge-error">Inactive</div>
                {/if}
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>
</div>
