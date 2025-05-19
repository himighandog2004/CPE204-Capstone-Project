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
  let showModal = false;
  let selectedGroup: any = null;

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

  function openModal(group: any) {
    selectedGroup = group;
    showModal = true;
  }

  function closeModal() {
    showModal = false;
    selectedGroup = null;
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

  // Group bills by patient name
  $: groupedBills = (() => {
    const groups: Record<string, any> = {};
    for (const bill of filteredBills) {
      const patient = patients[bill.patientId] || {};
      const name = `${capitalizeWords(patient.name || bill.patientName || '')} ${capitalizeWords(patient.surname || '')}`.trim();
      if (!groups[name]) {
        groups[name] = {
          name,
          bills: [],
          total: 0,
          pending: 0,
          paid: 0
        };
      }
      groups[name].bills.push(bill);
      groups[name].total += Number(bill.amount) || 0;
      if (bill.status === 'pending') groups[name].pending++;
      if (bill.status === 'paid') groups[name].paid++;
    }
    return Object.values(groups);
  })();

  let expanded: Record<string, boolean> = {};

  function toggleExpand(name: string) {
    expanded = { ...expanded, [name]: !expanded[name] };
  }
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
            <th>Amount</th>
            <th>Breakdown</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {#if groupedBills.length === 0}
            <tr><td colspan="5" class="text-center">No bills found.</td></tr>
          {:else}
            {#each groupedBills as group, i}
              <tr>
                <th>{i + 1}</th>
                <td>{group.name}</td>
                <td>₱{group.total}</td>                
                <td>
                  <button 
                    class="btn btn-xs btn-info" 
                    type="button" 
                    on:click={() => openModal(group)}
                  >
                    View Details
                  </button>
                </td>
                <td>{group.pending} Pending{group.paid ? `, ${group.paid} Paid` : ''}</td>
              </tr>
            {/each}
          {/if}
        </tbody>
      </table>
    </div>
  </div>
</div>

<!-- Modal -->
{#if showModal && selectedGroup}
  <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div class="bg-[#2c2c2c] rounded-xl shadow-xl p-6 w-[90%] max-w-3xl max-h-[80vh] overflow-y-auto">
      <div class="flex justify-between items-center mb-6">
        <h3 class="text-2xl font-semibold text-white">
          Bill Details - {selectedGroup.name}
        </h3>
        <button 
          class="btn btn-soft btn-error"
          on:click={closeModal}
        >
          X
        </button>
      </div>

      <div class="space-y-4">
        <div class="flex justify-between text-lg mb-4">
          <span class="text-gray-300">Total Amount: <span class="text-white font-semibold">₱{selectedGroup.total}</span></span>
          <span class="text-gray-300">
            Status: 
            <span class="text-yellow-400">{selectedGroup.pending} Pending</span>
            {#if selectedGroup.paid}
              , <span class="text-green-400">{selectedGroup.paid} Paid</span>
            {/if}
          </span>
        </div>

        <div class="space-y-4">
          {#each selectedGroup.bills as bill}
            <div class="bg-[#1f1f1f] rounded-lg p-4 space-y-2">
              <div class="flex justify-between items-start">
                <div class="space-y-1">
                  <div class="text-lg font-medium">{capitalizeWords(bill.type)}</div>
                  <div class="text-gray-400">
                    {bill.createdAt 
                      ? new Date(bill.createdAt.seconds * 1000).toLocaleString('en-US', {
                          month: '2-digit',
                          day: '2-digit',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })
                      : '-'}
                  </div>
                </div>
                <div class="text-right">
                  <div class="text-lg font-semibold">₱{bill.amount}</div>
                  <span class="px-2 py-1 rounded-full text-xs font-medium
                    {bill.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-green-500/20 text-green-400'}">
                    {capitalizeWords(bill.status)}
                  </span>
                </div>
              </div>

              {#if bill.type === 'labtest'}
                <div class="mt-2 pt-2 border-t border-gray-700">
                  <span class="text-gray-400">Test: </span>
                  <span class="text-white">{bill.testName || bill.test}</span>
                </div>
              {/if}
              
              {#if bill.description}
                <div class="mt-2 text-gray-400 text-sm">
                  {bill.description}
                </div>
              {/if}
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
{/if}