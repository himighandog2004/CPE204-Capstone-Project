<script lang="ts">
import { onMount } from 'svelte';
import { db } from '$lib/firebase';
import { collection, addDoc, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { query, where, getDocs } from 'firebase/firestore';

let labOrders: any[] = [];
let newOrder = { patient: '', test: '', status: 'Ordered' };
let isLoading = false;
let errorMessage = '';
let successMessage = '';
let patientOptions: { id: string, name: string }[] = [];
let labTestOptions = [
  { testName: 'Complete Blood Count (CBC)', category: 'Blood', price: 350 },
  { testName: 'Blood Glucose Test', category: 'Blood', price: 200 },
  { testName: 'Lipid Profile', category: 'Blood', price: 600 },
  { testName: 'Liver Function Test (LFT)', category: 'Blood', price: 700 },
  { testName: 'Kidney Function Test (KFT)', category: 'Blood', price: 700 },
  { testName: 'Hemoglobin A1c (HbA1c)', category: 'Blood', price: 400 },
  { testName: 'Thyroid Function Test (T3, T4, TSH)', category: 'Blood', price: 800 },
  { testName: 'Urinalysis (Routine)', category: 'Urine', price: 150 },
  { testName: 'Urine Culture', category: 'Urine', price: 350 },
  { testName: 'Pregnancy Test (hCG)', category: 'Urine', price: 250 },
  { testName: '24-Hour Urine Protein', category: 'Urine', price: 400 },
  { testName: 'Testosterone', category: 'Hormone', price: 500 },
  { testName: 'Estrogen', category: 'Hormone', price: 500 },
  { testName: 'Prolactin', category: 'Hormone', price: 500 },
  { testName: 'FSH LH', category: 'Hormone', price: 500 },
  { testName: 'Pap Smear', category: 'Hormone', price: 400 },
  { testName: 'PSA (Prostate-Specific Antigen)', category: 'Hormone', price: 600 },
  { testName: 'COVID-19 RT-PCR', category: 'Infectious', price: 1500 },
  { testName: 'HIV Test', category: 'Infectious', price: 600 },
  { testName: 'Hepatitis B/C Test', category: 'Infectious', price: 700 },
  { testName: 'Malaria Test', category: 'Infectious', price: 350 },
  { testName: 'Dengue NS1 Antigen Antibody', category: 'Infectious', price: 700 },
  { testName: 'X-Ray', category: 'Imaging', price: 800 },
  { testName: 'MRI Scan', category: 'Imaging', price: 5000 },
  { testName: 'CT Scan', category: 'Imaging', price: 4000 },
  { testName: 'ECG (Electrocardiogram)', category: 'Imaging', price: 500 },
  { testName: 'Ultrasound', category: 'Imaging', price: 1000 },
  { testName: 'Stool Test', category: 'Other', price: 200 }
];

onMount(async () => {
  const colRef = collection(db, 'laborders');
  onSnapshot(colRef, (snapshot) => {
    labOrders = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  });

  // Get the logged-in doctor's UID
  let doctorUid = '';
  const auth = getAuth();
  const user = auth.currentUser;
  if (user) {
    doctorUid = user.uid;
  } else {
    await new Promise(resolve => onAuthStateChanged(auth, u => { doctorUid = u?.uid || ''; resolve(undefined); }));
  }
  // Query appointments for this doctor
  if (doctorUid) {
    const apptQuery = query(collection(db, 'appointments'), where('doctorId', '==', doctorUid));
    const apptSnap = await getDocs(apptQuery);
    // Get unique patient names
    const seen = new Set();
    patientOptions = apptSnap.docs
      .map(doc => ({ id: doc.data().patientId || doc.data().patientName, name: doc.data().patientName }))
      .filter(p => p.name && !seen.has(p.name) && seen.add(p.name));
  }
});

async function submitOrder() {
  errorMessage = '';
  successMessage = '';
  if (!newOrder.patient || !newOrder.test) {
    errorMessage = 'Patient and test are required.';
    return;
  }
  isLoading = true;
  try {
    // Find the selected test's price
    const selectedTest = labTestOptions.find(t => t.testName === newOrder.test);
    const testPrice = selectedTest ? selectedTest.price : 0;
    // Store the test price in the lab order document
    await addDoc(collection(db, 'laborders'), {
      ...newOrder,
      price: testPrice,
      createdAt: serverTimestamp()
    });
    // Do NOT update patient billing here; billing is handled when the lab is resolved by admin
    successMessage = 'Lab order submitted!';
    newOrder = { patient: '', test: '', status: 'Ordered' };
  } catch (e) {
    errorMessage = 'Failed to submit lab order.';
  } finally {
    isLoading = false;
  }
}
</script>

<div class="p-5">
  <h1 class="text-3xl text-blue-600">Order Laboratory Test</h1>
  <p class="text-sm text-red-500">*Claim lab results at lab desk.</p>
  <form on:submit|preventDefault={submitOrder} class="mb-6 flex flex-col gap-3 max-w-md mt-3 space-y-2">
    <select class="input input-bordered h-12" bind:value={newOrder.patient} required>
      <option value="" disabled selected>Select Patient</option>
      {#each patientOptions as p}
        <option value={p.name}>{p.name}</option>
      {/each}
    </select>
    <select class="input input-bordered h-12" bind:value={newOrder.test} required>
      <option value="" disabled selected>Select Lab Test</option>
      {#each labTestOptions as t}
        <option value={t.testName}>{t.testName} (₱{t.price})</option>
      {/each}
    </select>
    <button class="btn btn-primary" type="submit" disabled={isLoading}>{isLoading ? 'Ordering...' : 'Order Test'}</button>
    {#if errorMessage}
      <div class="text-red-500">{errorMessage}</div>
    {/if}
    {#if successMessage}
      <div class="text-green-500">{successMessage}</div>
    {/if}
  </form>

  <h2 class="text-xl mt-4">Recent Lab Orders</h2>
  <table class="table table-sm w-full mt-2">
    <thead>
      <tr><th>#</th><td>Patient</td><td>Test</td><td>Status</td><td>Ordered</td></tr>
    </thead>
    <tbody>
      {#each labOrders as order, i}
        <tr>
          <th>{i + 1}</th>
          <td>{order.patient}</td>
          <td>{order.test}</td>
          <td>{order.status}</td>
          <td>{order.createdAt ? new Date(order.createdAt.seconds * 1000).toLocaleString() : '-'}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
