<script lang="ts">
  import { onMount } from 'svelte';
  import { db } from '$lib/firebase';
  import { collection, onSnapshot, deleteDoc, doc, updateDoc, getDoc, query, where, getDocs, collection as fbCollection, addDoc as addDocFB, serverTimestamp } from 'firebase/firestore';

  let labOrders = [];
  let searchQuery = '';
  let unsubOrders;

  onMount(() => {
    const ordersCol = collection(db, 'laborders');
    unsubOrders = onSnapshot(ordersCol, (snapshot) => {
      labOrders = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    });
  });

  async function deleteOrder(id) {
    if (confirm('Delete this lab order?')) {
      await deleteDoc(doc(db, 'laborders', id));
    }
  }

  async function resolveLabOrder(id) {
    await updateDoc(doc(db, 'laborders', id), { status: 'Completed' });
    // Bill the patient only when the lab test is marked as Completed
    const orderDoc = await getDoc(doc(db, 'laborders', id));
    if (orderDoc.exists()) {
      const order = orderDoc.data();
      const patientName = order.patient;
      const testName = order.test;
      const testPrice = order.price || 0;
      const patientId = order.patientId || '';
      // Duplicate bill prevention: check if a bill for this lab order already exists
      const billQ = query(fbCollection(db, 'bills'), where('labOrderId', '==', id), where('type', '==', 'labtest'));
      const billSnap = await getDocs(billQ);
      if (billSnap.empty) {
        // Add a bill to the bills collection for this lab test
        await addDocFB(fbCollection(db, 'bills'), {
          patientName: patientName,
          patientId: patientId,
          type: 'labtest',
          description: `Lab Test: ${testName}`,
          amount: testPrice,
          status: 'pending',
          createdAt: serverTimestamp(),
          labOrderId: id,
          testName: testName
        });
      }
    }
  }
</script>

<div class="p-5">
  <h1 class="text-3xl text-blue-600">Laboratory Orders</h1>
  <!-- Laboratory Orders Table -->
  <h2 class="text-xl mt-4">Lab Orders Overview</h2>
  <input type="text" placeholder="Search patient or test..." bind:value={searchQuery} class="input input-sm my-2" />
  <div class="w-full h-105">
    <table class="table table-sm overflow-y-scroll overflow-x-auto">
      <thead>
        <tr><th>#</th><td>Patient</td><td>Test</td><td>Ordered Date</td><td>Status</td><td>Actions</td></tr>
      </thead>
      <tbody>
        {#each labOrders.filter(order =>
          (order.patient?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
          (order.test?.toLowerCase() || '').includes(searchQuery.toLowerCase())
        ) as order, i}
          <tr>
            <th>{i + 1}</th>
            <td>{order.patient}</td>
            <td>{order.test}</td>
            <td>{order.createdAt ? new Date(order.createdAt.seconds * 1000).toLocaleString() : '-'}</td>
            <td>
              {#if order.status === 'Completed'}
                <span class="badge badge-success">Completed</span>
              {:else}
                <span class="badge badge-warning">{order.status}</span>
              {/if}
            </td>
            <td>
              <button class="btn btn-xs btn-error" title="Delete" on:click={() => deleteOrder(order.id)}>
                🗑️
              </button>
              {#if order.status !== 'Completed'}
                <button class="btn btn-xs btn-success ml-2" title="Resolve & Bill" on:click={() => resolveLabOrder(order.id)}>
                  ✔️ Resolve
                </button>
              {/if}
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>