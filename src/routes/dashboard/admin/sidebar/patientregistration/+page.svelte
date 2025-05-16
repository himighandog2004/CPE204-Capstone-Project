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

  let selectedPatient: any = null;
  let selectedEquipment: any = null;
  let equipmentList = [
    { id: 1, name: 'MRI Machine' },
    { id: 2, name: 'Ventilator' },
    { id: 3, name: 'ECG Monitor' }
  ];

  function assignEquipment() {
    if (selectedPatient && selectedEquipment) {
      selectedPatient.assignedEquipment = selectedEquipment.name;
      alert(`${selectedEquipment.name} assigned to ${selectedPatient.patientName}`);
    }
  }
</script>

<div class="flex flex-col h-full w-full">
  <div class="bg-gray-700 rounded-xl shadow-lg p-4">
    <h1 class="text-3xl text-white">Assign Equipment to Patient</h1>

    <div class="flex justify-between items-center mb-3 pr-2 mt-2">
      <label class="text-white">Select Patient:</label>
      <select bind:value={selectedPatient} class="select select-sm select-bordered">
        {#each patients as patient}
          <option value={patient}>{patient.patientName}</option>
        {/each}
      </select>
    </div>

    <div class="flex justify-between items-center mb-3 pr-2 mt-2">
      <label class="text-white">Select Equipment:</label>
      <select bind:value={selectedEquipment} class="select select-sm select-bordered">
        {#each equipmentList as item}
          <option value={item}>{item.name}</option>
        {/each}
      </select>
    </div>

    <button class="btn btn-primary" on:click={assignEquipment}>Assign Equipment</button>

    <!-- Assigned Equipment Display -->
    <div class="mt-4 text-white">
      {#if selectedPatient}
        <p>Patient: {selectedPatient.patientName}</p>
        <p>Assigned Equipment: {selectedPatient.assignedEquipment || 'None'}</p>
      {/if}
    </div>
  </div>
</div>