<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { getAuth, onAuthStateChanged } from 'firebase/auth';
  import { db } from '$lib/firebase';
  import { collection, query, where, onSnapshot, doc, updateDoc } from 'firebase/firestore';

  let bills: {
    id: string;
    date: any;
    description: string;
    amount: number;
    status: string;
  }[] = [];
  let loading = true;
  let error: string | null = null;
  let showModal = false;
  let selectedBill: typeof bills[number] | null = null;
  let unsubBills: (() => void) | undefined;

  function formatDate(date: any) {
    if (!date) return '-';
    const d = date.toDate ? date.toDate() : new Date(date);
    return d.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric'
    });
  }

  function formatAmount(amount: number) {
    return `₱${amount.toLocaleString()}`;
  }

  function openModal(bill: typeof bills[number]) {
    selectedBill = bill;
    showModal = true;
  }

  function closeModal() {
    showModal = false;
    selectedBill = null;
  }

  async function confirmPayment() {
    if (!selectedBill) return;

    try {
      const billRef = doc(db, 'bills', selectedBill.id);
      await updateDoc(billRef, {
        status: 'paid',
        paidAt: new Date()
      });
      closeModal();
    } catch (err) {
      console.error('Error updating payment:', err);
      error = 'Failed to process payment';
    }
  }

  onMount(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        error = 'Please login to view your bills';
        loading = false;
        return;
      }

      try {
        const billsQuery = query(
          collection(db, 'bills'),
          where('patientId', '==', user.uid)
        );

        unsubBills = onSnapshot(
          billsQuery,
          (snap) => {
            bills = snap.docs.map(doc => ({
              id: doc.id,
              ...doc.data()
            })) as any[];
            loading = false;
          },
          (err) => {
            console.error('Error fetching bills:', err);
            error = 'Failed to load bills';
            loading = false;
          }
        );
      } catch (err) {
        console.error('Error in bills setup:', err);
        error = 'Failed to setup bills listener';
        loading = false;
      }
    });
  });

  onDestroy(() => {
    if (unsubBills) unsubBills();
  });
</script>

<div class="p-6 bg-[#2c2c2c] rounded-2xl shadow-md text-white">
  <h2 class="text-2xl font-bold mb-4">My Bills</h2>

  {#if error}
    <p class="text-red-400">{error}</p>
  {/if}

  {#if loading}
    <p class="text-gray-400">Loading bills...</p>
  {:else if bills.length > 0}
    <div class="overflow-x-auto">
      <table class="min-w-full text-left text-sm">
        <thead class="bg-[#181818] text-gray-300 uppercase text-xs">
          <tr>
            <th class="px-4 py-3">Date</th>
            <th class="px-4 py-3">Description</th>
            <th class="px-4 py-3">Amount</th>
            <th class="px-4 py-3">Status</th>
            <th class="px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {#each bills as bill}
            <tr class="border-b border-[#3a3a3a] hover:bg-[#1f1f1f]">
              <td class="px-4 py-3">{formatDate(bill.date)}</td>
              <td class="px-4 py-3">{bill.description || '-'}</td>
              <td class="px-4 py-3">{formatAmount(bill.amount)}</td>
              <td class="px-4 py-3">
                <span class="px-2 py-1 rounded-full text-xs font-semibold
                  {bill.status === 'paid' ? 'badge badge-success' : ''}
                  {bill.status === 'pending' ? 'badge badge-warning' : ''}"
                >
                  {bill.status === 'paid' ? '✓ Paid' : bill.status === 'pending' ? '⏳ Pending' : ' - '}
                </span>
              </td>
              <td class="px-4 py-3">
                {#if bill.status === 'pending'}
                  <button
                    on:click={() => openModal(bill)}
                    class="px-3 py-1 btn btn-soft btn-info"
                  >
                    Pay Now
                  </button>
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
    <p class="text-gray-400">You have no bills yet.</p>
  {/if}
</div>

<!-- Modal -->
{#if showModal && selectedBill}
  <div class="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
    <div class="bg-[#2c2c2c] text-white rounded-xl p-6 w-[90%] max-w-md shadow-lg">
      <h3 class="text-xl font-semibold mb-4">Confirm Payment</h3>
      <p class="mb-2">
        Are you sure you want to pay <strong>{formatAmount(selectedBill.amount)}</strong> for the bill dated <strong>{formatDate(selectedBill.date)}</strong>?
      </p>
      <p class="text-sm text-gray-400 mb-4"><strong>Please pay by scanning the QR Code below</strong></p>
      <div class="flex items-center justify-center">
        <img src="/gcash.jpg" alt="gcash" class="mb-3 h-100 w-70" />
      </div>
      <div class="flex justify-end gap-3">
        <button on:click={closeModal} class="btn btn-soft btn-error">Cancel</button>
        <button on:click={confirmPayment} class="btn btn-soft btn-success">Confirm</button>
      </div>
    </div>
  </div>
{/if}

<style>
  body {
    background-color: #181818;
  }
</style>
