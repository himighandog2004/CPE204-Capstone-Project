<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { db } from '$lib/firebase';
  import { collection, onSnapshot, query, orderBy, getDocs } from 'firebase/firestore';

  let bills: any[] = [];
  let patients: Record<string, any> = {};
  let unsubBills: (() => void) | undefined;
  let searchQuery = '';
  let sortField: keyof typeof bills[0] | '' = '';
  let sortAsc = true;

  // Fetch all patients for name lookup
  async function fetchPatients() {
    const snapshot = await getDocs(collection(db, 'users'));
    patients = {};
    snapshot.forEach(doc => {
      const data = doc.data();
      if (data.role === 'Patient') {
        patients[doc.id] = data;
      }
    });
  }

  onMount(async () => {
    await fetchPatients();
    const q = query(collection(db, 'bills'), orderBy('createdAt', 'desc'));
    unsubBills = onSnapshot(q, (snapshot) => {
      bills = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    });
  });

  onDestroy(() => {
    unsubBills && unsubBills();
  });

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

  $: filteredBills = [...bills]
    .filter((bill) => {
      const patient = patients[bill.patientId] || {};
      const fullName = `${patient.name || bill.patientName || ''} ${patient.surname || ''}`.toLowerCase();
      return (
        fullName.includes(searchQuery.toLowerCase()) ||
        (patient.email?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
        (bill.type || '').toLowerCase().includes(searchQuery.toLowerCase())
      );
    })
    .sort((a, b) => {
      if (!sortField) return b.createdAt?.toMillis?.() - a.createdAt?.toMillis?.();
      const aVal = a[sortField] ?? '';
      const bVal = b[sortField] ?? '';
      if (typeof aVal === 'string' && typeof bVal === 'string') {
        return sortAsc ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
      }
      if (a.createdAt && b.createdAt) {
        return sortAsc ? a.createdAt.toMillis() - b.createdAt.toMillis() : b.createdAt.toMillis() - a.createdAt.toMillis();
      }
      return 0;
    });
</script>

<div class="flex flex-col h-full w-full">
  <div class="bg-[#102e50] rounded-t-xl p-4">
    <div class="flex justify-between">
      <h1 class="text-3xl text-white">Billing Overview</h1>
    </div>
    <div class="flex justify-between items-center my-3">
      <input type="text" placeholder="Search name, email, or type..." bind:value={searchQuery} class="input input-sm w-1/2" />
      <div class="space-x-2">
        <button class="btn btn-xs btn-success" on:click={() => toggleSort('patientName')}>Sort by Name</button>
        <button class="btn btn-xs btn-success" on:click={() => toggleSort('amount')}>Sort by Amount</button>
        <button class="btn btn-xs btn-success" on:click={() => toggleSort('status')}>Sort by Status</button>
      </div>
    </div>
  </div>
  <hr class="border-t-2 border-black" />
  <div class="bg-[#2c2c2c] rounded-b-xl p-5">
    <div class="overflow-x-auto overflow-y-scroll w-full h-100 bg-base-100 rounded-lg">
      <table class="table table-sm table-pin-rows">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Date</th>
            <th>Breakdown</th>
          </tr>
        </thead>
        <tbody>
          {#if filteredBills.length === 0}
            <tr><td colspan="7" class="text-center">No bills found.</td></tr>
          {:else}
            {#each filteredBills as bill, i}
              <tr>
                <th>{i + 1}</th>
                <td>{capitalizeWords(patients[bill.patientId]?.name || bill.patientName || '')} {capitalizeWords(patients[bill.patientId]?.surname || '')}</td>
                <td>{bill.type}</td>
                <td>₱{bill.amount}</td>
                <td>
                  {#if bill.status === 'paid'}
                    <div class="badge badge-success">Paid</div>
                  {:else if bill.status === 'pending'}
                    <div class="badge badge-warning">Pending</div>
                  {:else}
                    <div class="badge badge-error">Other</div>
                  {/if}
                </td>
                <td>{bill.createdAt ? new Date(bill.createdAt.seconds * 1000).toLocaleString() : '-'}</td>
                <td>
                  <details>
                    <summary class="btn btn-xs btn-info">View</summary>
                    <ul class="list-disc p-2">
                      {#if bill.type === 'appointment'}
                        <li>Appointment Fee: ₱{bill.amount}</li>
                      {:else if bill.type === 'labtest'}
                        <li>Lab Test: {bill.testName || bill.test} - ₱{bill.amount}</li>
                      {:else}
                        <li>₱{bill.amount}</li>
                      {/if}
                    </ul>
                  </details>
                </td>
              </tr>
            {/each}
          {/if}
        </tbody>
      </table>
    </div>
  </div>
</div>