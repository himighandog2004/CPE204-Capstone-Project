<script lang="ts">
  import { getContext, onDestroy, onMount } from 'svelte';
  import type { Writable } from 'svelte/store';
  import { db } from '$lib/firebase';
  import { doc, updateDoc, arrayUnion, collection, getDocs } from 'firebase/firestore';

  const patientsStore = getContext('patients') as Writable<any[]>;
  const appointmentsStore = getContext('appointments') as Writable<any[]>;
  let patients: any[] = [];
  let appointments: any[] = [];
  let selectedPatient: any = null;
  let doctorId = '';

  let newHistory = {
    bloodPressure: '',
    bloodSugar: '',
    weight: '',
    bodyTemperature: '',
    prescription: ''
  };

  let unsubPatients: (() => void) | undefined;
  let unsubAppointments: (() => void) | undefined;
  if (patientsStore && typeof patientsStore.subscribe === 'function') {
    unsubPatients = patientsStore.subscribe((value: any[]) => {
      patients = value;
    });
  }

  if (appointmentsStore && typeof appointmentsStore.subscribe === 'function') {
    unsubAppointments = appointmentsStore.subscribe((value: any[]) => {
      appointments = value;
    });
  }

  // Get doctorId from context or localStorage (assuming login flow sets it)
  if (typeof window !== 'undefined') {
    doctorId = localStorage.getItem('doctorId') || '';
  }

  let loadingAppointments = true;

  onMount(async () => {
    // Fetch appointments from Firestore directly
    try {
      loadingAppointments = true;
      const snapshot = await getDocs(collection(db, 'appointments'));
      appointments = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (e) {
      console.error('Failed to fetch appointments:', e);
    } finally {
      loadingAppointments = false;
    }
  });

  // Only show patients the doctor has/had appointments with
  $: filteredPatients = patients.filter(p =>
    appointments.some(a => a.doctorId === doctorId && (a.patientId === (p.id || p.uid || p.docId) || a.patientName === p.name))
  );

  onDestroy(() => {
    unsubPatients && unsubPatients();
    unsubAppointments && unsubAppointments();
  });

  function viewPatientDetails(patient) {
    selectedPatient = patient;
    newHistory = {
      bloodPressure: '',
      bloodSugar: '',
      weight: '',
      bodyTemperature: '',
      prescription: ''
    };
  }

  async function updateMedicalHistory() {
    if (selectedPatient) {
      const patientRef = doc(db, 'patients', selectedPatient.id || selectedPatient.uid || selectedPatient.docId);
      await updateDoc(patientRef, {
        medicalHistory: arrayUnion({ ...newHistory, date: new Date().toISOString() })
      });
      // Optionally update local store for instant UI feedback
      selectedPatient.medicalHistory = [
        ...(selectedPatient.medicalHistory || []),
        { ...newHistory, date: new Date().toISOString() }
      ];
      newHistory = {
        bloodPressure: '',
        bloodSugar: '',
        weight: '',
        bodyTemperature: '',
        prescription: ''
      };
    }
  }
</script>

<style>
  .container {
    background-color: #18181b;
    color: #f3f4f6;
    padding: 32px 24px;
    border-radius: 18px;
    box-shadow: 0 4px 24px 0 #00000040;
    max-width: 900px;
    margin: 32px auto;
  }
  .patient-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 24px;
  }
  .patient-table th, .patient-table td {
    border-bottom: 1px solid #27272a;
    padding: 10px 8px;
    text-align: left;
  }
  .patient-table th {
    background: #23232a;
    color: #a3e635;
    font-weight: 600;
  }
  .patient-table tr:hover {
    background: #23232a;
  }
  .details-card {
    background: #23232a;
    border-radius: 12px;
    padding: 24px;
    margin-top: 24px;
    box-shadow: 0 2px 12px 0 #00000030;
  }
  .details-card h3 {
    color: #a3e635;
    margin-bottom: 12px;
  }
  .history-list {
    margin: 0 0 16px 0;
    padding: 0;
    list-style: none;
  }
  .history-list li {
    background: #18181b;
    border-radius: 8px;
    margin-bottom: 8px;
    padding: 10px 12px;
    color: #f3f4f6;
    font-size: 0.98rem;
  }
  .form-row {
    display: flex;
    gap: 16px;
    margin-bottom: 10px;
  }
  .form-row label {
    flex: 1;
    display: flex;
    flex-direction: column;
    font-size: 0.95rem;
    color: #a3e635;
  }
  input, textarea {
    width: 100%;
    margin-top: 4px;
    padding: 8px;
    background-color: #18181b;
    color: #fff;
    border: 1px solid #27272a;
    border-radius: 6px;
    font-size: 1rem;
  }
  textarea {
    min-height: 48px;
    resize: vertical;
  }
  button {
    background-color: #a3e635;
    color: #18181b;
    padding: 10px 20px;
    border-radius: 8px;
    font-weight: 600;
    font-size: 1rem;
    border: none;
    margin-top: 10px;
    transition: background 0.2s;
  }
  button:hover {
    background-color: #bef264;
  }
</style>

<div class="container">
  <h2 style="font-size:2rem; font-weight:700; margin-bottom:18px;">Manage Patients</h2>

  <h3 style="font-size:1.3rem; margin-bottom:10px; color:#a3e635;">Patient List</h3>
  <table class="patient-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Mobile</th>
        <th>Gender</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {#each filteredPatients as p}
        <tr>
          <td>{p.name}</td>
          <td>{p.mobileNumber}</td>
          <td>{p.gender}</td>
          <td><button on:click={() => viewPatientDetails(p)}>View Details</button></td>
        </tr>
      {/each}
      {#if filteredPatients.length === 0}
        <tr><td colspan="4" style="text-align:center; color:#888;">No patients with appointments yet.</td></tr>
      {/if}
    </tbody>
  </table>

  {#if selectedPatient}
    <div class="details-card">
      <h3>📌 Patient Details</h3>
      <div class="form-row">
        <label>Name:<span>{selectedPatient.name}</span></label>
        <label>Mobile:<span>{selectedPatient.mobileNumber}</span></label>
        <label>Gender:<span>{selectedPatient.gender}</span></label>
      </div>
      <div class="form-row">
        <label>Email:<span>{selectedPatient.email}</span></label>
        <label>Address:<span>{selectedPatient.address}</span></label>
        <label>Age:<span>{selectedPatient.age}</span></label>
      </div>
      <div class="form-row">
        <label>Registration Date:<span>{selectedPatient.registrationDate}</span></label>
      </div>

      <h3>🩺 Medical History</h3>
      <ul class="history-list">
        {#if selectedPatient.medicalHistory && selectedPatient.medicalHistory.length > 0}
          {#each selectedPatient.medicalHistory as record}
            <li>
              {record.date ? `[${new Date(record.date).toLocaleDateString()}] ` : ''}
              <b>BP:</b> {record.bloodPressure}, <b>Sugar:</b> {record.bloodSugar}, <b>Weight:</b> {record.weight}, <b>Temp:</b> {record.bodyTemperature}, <b>Rx:</b> {record.prescription}
            </li>
          {/each}
        {:else}
          <li style="color:#888;">No medical history yet.</li>
        {/if}
      </ul>

      <h3>➕ Add Medical History</h3>
      <form on:submit|preventDefault={updateMedicalHistory}>
        <div class="form-row">
          <label>Blood Pressure: <input type="text" bind:value={newHistory.bloodPressure} /></label>
          <label>Blood Sugar: <input type="text" bind:value={newHistory.bloodSugar} /></label>
        </div>
        <div class="form-row">
          <label>Weight: <input type="text" bind:value={newHistory.weight} /></label>
          <label>Body Temperature: <input type="text" bind:value={newHistory.bodyTemperature} /></label>
        </div>
        <div class="form-row">
          <label style="flex:2;">Prescription: <textarea bind:value={newHistory.prescription}></textarea></label>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  {/if}
</div>