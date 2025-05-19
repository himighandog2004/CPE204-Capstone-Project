<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { db } from '$lib/firebase';
  import { collection, doc, getDoc, onSnapshot, query, where } from 'firebase/firestore';
  import { getAuth, onAuthStateChanged } from 'firebase/auth';

  let medicalRecord = {
    patientName: '',
    age: '',
    sex: '',
    bloodType: '',
    weight: 0,
    height: 0,
    allergies: '',
    medicalNotes: ''
  };

  let prescriptions: { id: string; medicine: string; description: string; amount: number; status: string }[] = [];
  let loading = true;
  let error: string | null = null;
  let unsubRecord: (() => void) | undefined;
  let unsubPrescriptions: (() => void) | undefined;

  onMount(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (!user) {
        error = 'Please login to view your medical record';
        loading = false;
        return;
      }

      try {
        // Set up real-time listener for medical record
        const recordRef = doc(db, 'record', user.uid);
        unsubRecord = onSnapshot(recordRef, (snap) => {
          if (snap.exists()) {
            medicalRecord = { ...medicalRecord, ...snap.data() };
          }
          loading = false;
        }, (err) => {
          console.error('Error fetching medical record:', err);
          error = 'Failed to load medical record';
          loading = false;
        });

        // Set up real-time listener for prescriptions from bills collection
        const prescriptionsQuery = query(
          collection(db, 'bills'), 
          where('patientId', '==', user.uid),
          where('type', '==', 'prescription')
        );
        
        unsubPrescriptions = onSnapshot(prescriptionsQuery, (snap) => {
          prescriptions = snap.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          } as any));
        }, (err) => {
          console.error('Error fetching prescriptions:', err);
        });

      } catch (err) {
        console.error('Error in setup:', err);
        error = 'Failed to setup data listeners';
        loading = false;
      }
    });
  });

  onDestroy(() => {
    if (unsubRecord) unsubRecord();
    if (unsubPrescriptions) unsubPrescriptions();
  });
</script>

<div class="space-y-6 w-full mx-auto p-10">
  <div class="flex justify-between items-center">
    <h1 class="text-4xl font-extrabold tracking-tight text-white">My Medical Record</h1>
  </div>

  {#if loading}
    <div class="text-center py-8">
      <div class="text-xl text-gray-400">Loading medical record...</div>
    </div>
  {:else if error}
    <div class="text-center py-8">
      <div class="text-xl text-red-400">{error}</div>
    </div>
  {:else}
    <div class="text-lg flex flex-row">
    <div class="w-[60%]">
      <div class="grid grid-cols-1 space-x-9 md:grid-cols-2 gap-6 text-lg text-gray-300">
        <div><span class="font-bold">Name:</span> {medicalRecord.name || 'Not set'}</div>
        <div><span class="font-bold">Age:</span> {medicalRecord.age || 'Not set'}</div>
        <div><span class="font-bold">Sex:</span> {medicalRecord.sex || 'Not set'}</div>
        <div><span class="font-bold">Blood Type:</span> {medicalRecord.bloodType || 'Not set'}</div>
        <div><span class="font-bold">Weight:</span> {medicalRecord.weight ? `${medicalRecord.weight} kg` : 'Not set'}</div>
        <div><span class="font-bold">Height:</span> {medicalRecord.height ? `${medicalRecord.height} cm` : 'Not set'}</div>
        <div><span class="font-bold">Allergies:</span> {medicalRecord.allergies || 'None recorded'}</div>
      </div>
      <div class="mt-6">
        <h2 class="text-xl font-bold text-gray-400 mb-2">Medical Notes</h2>
        <p class="text-lg text-gray-300 leading-relaxed">
          {medicalRecord.medicalNotes || 'No medical notes available'}
        </p>
      </div>
    </div>
      <!-- Prescriptions Section -->
      <div class="mt-2 items-start justify-start flex flex-col w-[40%]">
        <h2 class="text-xl font-bold text-gray-400 mb-4">Prescriptions</h2>
        {#if prescriptions.length === 0}
          <p class="text-lg text-gray-300">No prescriptions found</p>
        {:else}
          <div class="bg-[#2c2c2c] rounded-xl shadow-md p-6 w-full">
            <table class="w-full table table-base">
              <thead>
                <tr class="text-left text-gray-400">
                  <th class="pb-4">Medicine</th>
                  <th class="pb-4">Quantity</th>
                  <th class="pb-4">Date Prescribed</th>
                </tr>
              </thead>
              <tbody class="text-gray-300">                {#each prescriptions as prescription}
                  <tr class="border-t border-gray-700">
                    <td class="py-4">{prescription.medicineName || '-'}</td>
                    <td class="py-4">{prescription.itemAmount || '-'}</td>
                    <td class="py-4">{prescription.createdAt ? 
                      new Date(prescription.createdAt.seconds * 1000).toLocaleDateString('en-US', {
                        month: '2-digit',
                        day: '2-digit',
                        year: 'numeric'
                      }) : '-'}</td>
                  </tr>
                {/each}
              </tbody>
            </table>
          </div>
        {/if}
      </div>
    </div>
  {/if}
</div>
