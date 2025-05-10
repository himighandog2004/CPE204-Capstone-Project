<script lang="ts">
// Removed: import modal from 'daisyui/components/modal';
import { getContext, onDestroy } from 'svelte';
import type { Writable } from 'svelte/store';

let doctors: any[] = [];
const doctorsStore = getContext('doctors') as Writable<any[]>;
let unsubDoctors: (() => void) | undefined;

if (doctorsStore && typeof doctorsStore.subscribe === 'function') {
unsubDoctors = doctorsStore.subscribe((value: any[]) => {
    doctors = value;
});
}

onDestroy(() => {
unsubDoctors && unsubDoctors();
});

let searchQuery = '';
let sortField: keyof typeof doctors[0] | '' = '';
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

$: filteredDoctors = [...doctors]
.filter((d) => {
    const fullName = `${d.name} ${d.surname}`.toLowerCase();
    return fullName.includes(searchQuery.toLowerCase()) ||
            d.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            d.phone?.includes(searchQuery);
})
.map(d => ({ ...d, createdAt: d.createdAt ? new Date(d.createdAt) : new Date(0) }))
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

<div class="flex flex-row h-145 w-full justify-between items-between">
  <!-- Doctor Registration Form -->
  <div class="flex flex-col w-115">
    <div class="flex flex-row w-[100%] justify-between">
      <h1 class="text-3xl text-white">Doctor List</h1>
      <button class="btn btn-soft btn-success">Add Doctor</button>
    </div>

  </div>
  <!-- Search & Table -->
  <div class="flex flex-col bg-[#2c2c2c] p-3 pt-2 rounded-xl w-[60%]">
    <!-- Search and Sort Controls -->
    <div class="flex justify-between items-center mb-3 pr-2 mt-2">
      <input
        type="text"
        placeholder="Search name, email, or phone..."
        bind:value={searchQuery}
        class="input input-sm input-bordered w-1/2"
      />
      <div class="space-x-2">
        <button class="btn btn-xs" on:click={() => toggleSort('name')}>Sort by Name</button>
        <button class="btn btn-xs" on:click={() => toggleSort('createdAt')}>Sort by Date</button>
      </div>
    </div>

    <!-- Table -->
    <div class="overflow-x-auto overflow-y-scroll w-full h-128 bg-base-100 rounded-lg">
      <table class="table table-xs table-pin-rows table-pin-cols">
        <thead>
          <tr>
            <th>#</th>
            <td class="w-40">Name</td>
            <td>Specialty</td>
            <td>Phone</td>
            <td>Address</td>
            <td>Email</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          {#each filteredDoctors as doctor, i}
            <tr>
              <th>{i + 1}</th>
              <td>{capitalizeWords(doctor.name)} {capitalizeWords(doctor.surname)}</td>
              <td>{doctor.specialty || '-'}</td>
              <td>{doctor.phone || '-'}</td>
              <td>{doctor.email || '-'}</td>
              <td>{doctor.createdAt ? new Date(doctor.createdAt).toLocaleDateString() : '-'}</td>
              <td>
                {#if doctor.isActive === true}
                  <div class="badge badge-sm badge-success">Active</div>
                {:else}
                  <div class="badge badge-sm badge-error">Inactive</div>
                {/if}
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>
</div>