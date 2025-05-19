<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { db } from '$lib/firebase';
  import { getAuth, onAuthStateChanged } from 'firebase/auth';
  import {
    collection,
    doc,
    getDocs,
    getDoc,
    query,
    where,
    onSnapshot,
    updateDoc,
    setDoc,
    addDoc,
    serverTimestamp,
    type Timestamp
  } from 'firebase/firestore';
  import type { QueryDocumentSnapshot } from 'firebase/firestore';

  interface Patient {
    id: string;
    name: string;
    surname: string;
    age?: number;
    sex?: string;
    bloodType?: string;
    weight?: number;
    height?: number;
    allergies?: string;
    medicalNotes?: string;
  }

  interface MedicalRecord {
    bloodType: string;
    weight: number;
    height: number;
    allergies: string;
    medicalNotes: string;
  }

  interface Medicine {
    id: string;
    name: string;
    stock: number;
    price: number;
  }

  interface Prescription {
    id: string;
    type: string;
    docId: string;
    patientId: string;
    medicineId: string;
    medicineName?: string;
    itemAmount: number;  // Number of items
    amount: number;      // Total price
    createdAt: Timestamp;
    status: 'pending' | 'completed' | 'cancelled';
  }

  // State for doctor information
  let currentDoctorId = '';
  let patients: Patient[] = [];
  let selectedPatient: Patient | null = null;
  let loading = true;
  let error = '';

  // Add patient search state
  let patientSearch = '';

  onMount(() => {
    const auth = getAuth();
    const unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
      try {
        loading = true;
        if (user) {
          currentDoctorId = user.uid;
          await loadData();
        } else {
          error = 'Please log in to access this page';
        }
      } catch (e) {
        console.error('Error in auth change:', e);
        error = 'Failed to load data';
      } finally {
        loading = false;
      }
    });

    // Load medicines collection
    const medicinesRef = collection(db, 'medicines');
    const unsubMedicines = onSnapshot(medicinesRef, (snapshot) => {
      try {
        medicines = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        } as Medicine));
      } catch (e) {
        console.error('Error loading medicines:', e);
        error = 'Failed to load medicines';
      }
    });

    return () => {
      unsubscribeAuth();
      unsubMedicines();
    };
  });

  // Medical record form state
  let isEditing = false;
  let medicalRecord: MedicalRecord = {
    bloodType: '',
    weight: 0,
    height: 0,
    allergies: '',
    medicalNotes: ''
  };

  // Prescription state
  let medicines: Medicine[] = [];
  let selectedMedicine: Medicine | null = null;
  let itemAmount = 0;  // Changed from amount to itemAmount
  let prescriptions: Prescription[] = [];
  let medicineSearch = '';

  // Add sorting functionality
  let sortField: 'createdAt' | 'medicineName' | 'amount' = 'createdAt';
  let sortAsc = false;

  // Unsubscribe functions
  let unsubMedicalRecord: (() => void) | undefined;
  let unsubPrescriptions: (() => void) | undefined;

  // Update the data loading logic
  async function loadData() {
    try {
      if (!currentDoctorId) {
        throw new Error('No doctor ID available');
      }

      const appointmentsRef = collection(db, 'appointments');
      const q = query(appointmentsRef, where('doctorId', '==', currentDoctorId));
      const querySnapshot = await getDocs(q);
      
      const patientIds = [...new Set(querySnapshot.docs
        .map(doc => doc.data().patientId)
        .filter(id => id && id.trim() !== '')  // Filter out null/empty IDs
      )];

      if (patientIds.length === 0) {
        patients = [];
        return;
      }

      const patientsRef = collection(db, 'users');
      const patientsData: QueryDocumentSnapshot<FirestorePatient>[] = [];
      
      for (const id of patientIds) {
        try {
          const patientDoc = await getDoc(doc(patientsRef, id));
          if (patientDoc.exists()) {
            patientsData.push(patientDoc as QueryDocumentSnapshot<FirestorePatient>);
          }
        } catch (err) {
          console.error(`Error fetching patient ${id}:`, err);
          // Continue with other patients
        }
      }

      patients = patientsData.map(p => ({
        id: p.id,
        name: p.data().name || '',
        surname: p.data().surname || '',
        age: p.data().age,
        sex: p.data().sex,
        bloodType: p.data().bloodType,
        weight: p.data().weight,
        height: p.data().height,
        allergies: p.data().allergies,
        medicalNotes: p.data().medicalNotes
      }));
      console.log("Doctor ID:", currentDoctorId);
      console.log("Found patient IDs:", patientIds);
      console.log("Patients:", patients);
    } catch (e) {
      console.error('Error loading data:', e);
      error = 'Failed to load patient data';
      throw e;
    } finally {
      loading = false;
    }
  }

  onMount(async () => {
    try {
      // Get current doctor's ID
      const auth = getAuth();
      if (auth.currentUser) {
        currentDoctorId = auth.currentUser.uid;
        await loadData();
      } else {
        onAuthStateChanged(auth, async (user) => {
          if (user) {
            currentDoctorId = user.uid;
            await loadData();
          }
        });
      }
    } catch (e) {
      console.error('Error in onMount:', e);
      error = 'Failed to initialize component';
    }
  });

  interface FirestorePatient {
    name: string;
    surname: string;
    age?: number;
    sex?: string;
    bloodType?: string;
    weight?: number;
    height?: number;
    allergies?: string;
    medicalNotes?: string;
  }

  async function selectPatient(patient: Patient) {
    if (!patient?.id) {
      console.error('Invalid patient selected');
      return;
    }

    selectedPatient = patient;
    
    // Unsubscribe from previous listeners
    unsubMedicalRecord && unsubMedicalRecord();
    unsubPrescriptions && unsubPrescriptions();
    
    try {
      // Listen to medical record changes
      const recordRef = doc(db, 'record', patient.id);
      unsubMedicalRecord = onSnapshot(recordRef, (snap) => {
        if (snap.exists()) {
          medicalRecord = { ...medicalRecord, ...snap.data() };
        } else {
          // Reset form if no record exists
          medicalRecord = {
            bloodType: '',
            weight: 0,
            height: 0,
            allergies: '',
            medicalNotes: ''
          };
        }
      });

      // Listen to prescriptions
      const prescriptionsQuery = query(
        collection(db, 'bills'),
        where('patientId', '==', patient.id),
        where('type', '==', 'prescription')
      );
      
      unsubPrescriptions = onSnapshot(prescriptionsQuery, (snap) => {
        prescriptions = snap.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            type: data.type || '',
            docId: data.docId || '',
            patientId: data.patientId || '',
            medicineId: data.medicineId || '',
            medicineName: medicines.find(m => m.id === data.medicineId)?.name,
            itemAmount: data.itemAmount || 0,
            amount: data.amount || 0,
            createdAt: data.createdAt,
            status: data.status || 'pending'
          };
        });
      });
    } catch (e) {
      console.error('Error setting up patient listeners:', e);
      error = 'Failed to load patient details';
    }
  }

  async function saveMedicalRecord() {
    if (!selectedPatient) return;
    
    try {
      const recordRef = doc(db, 'record', selectedPatient.id);
      await setDoc(recordRef, {
        ...currentPatientData,
        updatedAt: serverTimestamp()
      }, { merge: true });
      
      isEditing = false;
    } catch (e) {
      console.error('Error saving medical record:', e);
      error = 'Failed to save medical record';
    }
  }

  function toggleEdit() {
    isEditing = true;
  }
  async function addPrescription() {
    if (!selectedPatient || !selectedMedicine || itemAmount <= 0) return;
    
    if (itemAmount > selectedMedicine.stock) {
      error = 'Not enough medicine in stock';
      return;
    }

    try {
      const prescriptionData = {
        type: 'prescription',
        docId: currentDoctorId,
        doctorName: '', // Will be updated below
        patientName: `${selectedPatient.name} ${selectedPatient.surname}`,
        patientId: selectedPatient.id,
        medicineId: selectedMedicine.id,
        medicineName: selectedMedicine.name,
        description: `${selectedMedicine.name} - ${itemAmount} units`,
        itemAmount,  // Number of items
        amount: itemAmount * selectedMedicine.price,  // Total price
        status: 'pending',
        createdAt: serverTimestamp(),
        prescribedDate: new Date().toISOString(),
        expiryDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString() // 7 days validity
      };

      // Get doctor's name
      const doctorDoc = await getDoc(doc(db, 'users', currentDoctorId));
      if (doctorDoc.exists()) {
        const doctorData = doctorDoc.data();
        prescriptionData.doctorName = `Dr. ${doctorData.name} ${doctorData.surname}`;
      }

      // Create prescription in bills collection
      const prescriptionRef = await addDoc(collection(db, 'bills'), prescriptionData);

      // Update medicine stock
      const medicineRef = doc(db, 'medicines', selectedMedicine.id);
      await updateDoc(medicineRef, {
        stock: selectedMedicine.stock - itemAmount
      });
      
      // Reset form
      selectedMedicine = null;
      itemAmount = 0;
      medicineSearch = '';
    } catch (e) {
      console.error('Error adding prescription:', e);
      error = 'Failed to add prescription';
      throw e; // Re-throw to prevent UI reset on error
    }
  }

  // Filter medicines based on search
  $: filteredMedicines = medicines.filter(m => 
    m?.name?.toLowerCase().includes(medicineSearch?.toLowerCase() ?? '')
  );

  // Add filtered patients reactive statement
  $: filteredPatients = patients.filter(patient => {
    const searchTerm = patientSearch.toLowerCase();
    const fullName = `${patient.name} ${patient.surname}`.toLowerCase();
    return fullName.includes(searchTerm);
  });

  $: sortedPrescriptions = [...prescriptions].sort((a, b) => {
    if (sortField === 'createdAt') {
      return sortAsc 
        ? a.createdAt.toMillis() - b.createdAt.toMillis()
        : b.createdAt.toMillis() - a.createdAt.toMillis();
    }

    const getValue = (p: Prescription) => {
      switch (sortField) {
        case 'medicineName':
          return p.medicineName || '';
        case 'amount':
          return p.amount;
        default:
          return '';
      }
    };

    const aVal = getValue(a);
    const bVal = getValue(b);
    
    if (typeof aVal === 'string' && typeof bVal === 'string') {
      return sortAsc 
        ? aVal.localeCompare(bVal)
        : bVal.localeCompare(aVal);
    }
    
    return sortAsc 
      ? Number(aVal) - Number(bVal)
      : Number(bVal) - Number(aVal);
  });

  function toggleSort(field: typeof sortField) {
    if (sortField === field) {
      sortAsc = !sortAsc;
    } else {
      sortField = field;
      sortAsc = true;
    }
  }

  // New patient data object for bindings
  let currentPatientData = {
    age: '',
    sex: '',
    bloodType: '',
    weight: 0,
    height: 0,
    allergies: '',
    medicalNotes: ''
  };

  // Update currentPatientData when selectedPatient changes
  $: if (selectedPatient) {
    currentPatientData = {
      patientId: selectedPatient.id,
      name: `${selectedPatient.name} ${selectedPatient.surname}`,
      age: selectedPatient.age || '',
      sex: selectedPatient.sex || '',
      bloodType: selectedPatient.bloodType || '',
      weight: selectedPatient.weight || 0,
      height: selectedPatient.height || 0,
      allergies: selectedPatient.allergies || '',
      medicalNotes: selectedPatient.medicalNotes || ''
    };
  }

  // Update the record update function
  async function updateRecord() {
    if (!selectedPatient?.id) return;
    
    const recordRef = doc(db, 'record', selectedPatient.id);
    try {
      await updateDoc(recordRef, currentPatientData);
      // Show success message
    } catch (error) {
      console.error('Error updating record:', error);
      // Show error message
    }
  }

  onDestroy(() => {
    unsubMedicalRecord && unsubMedicalRecord();
    unsubPrescriptions && unsubPrescriptions();
  });
</script>

<div class="h-144 rounded-xl flex bg-[#181818] text-white">
  <!-- Sidebar -->
  <aside class="w-64 bg-[#1f1f1f] p-4 overflow-y-auto border-r border-[#333] rounded-l-xl">
    <h2 class="text-lg font-semibold mb-4">My Patients</h2>
    <!-- Add a Search bar here -->
    <div class="form-control mb-4">
      <label class="label text-sm text-gray-400">Search Patient</label>
      <input
        type="text"
        bind:value={patientSearch}
        placeholder="Enter patient name..."
        class="input input-bordered w-full bg-base-100 text-white"
      />
    </div>
    {#if loading}
      <div class="text-center py-4">Loading...</div>
    {:else if error}
      <div class="text-red-400 py-4">{error}</div>
    {:else}
      <ul class="space-y-2">
        {#each filteredPatients as patient}
          <li>
            <button
              class="w-full text-left p-2 rounded-lg hover:bg-[#2c2c2c] transition font-medium"
              class:bg-[#2c2c2c]={selectedPatient?.id === patient.id}
              on:click={() => selectPatient(patient)}
            >
              {patient.name} {patient.surname}
              <div class="text-sm text-gray-400">
                {patient.age || '-'} y/o, {patient.sex || '-'}
              </div>
            </button>
          </li>
        {/each}
      </ul>
    {/if}
  </aside>

  <!-- Main Panel -->
  <main class="flex-1 p-6 overflow-y-hidden bg-[#2c2c2c] rounded-r-xl overflow-x-hidden">
    {#if selectedPatient}
      <div class="flex flex-col lg:flex-row gap-6">
        <!-- Medical Record -->
        <div class="space-y-4 w-[60%]">
          <div class="flex justify-between items-center">
            <h1 class="text-2xl font-bold">{selectedPatient.name}'s Medical Record</h1>
            <button
              on:click={isEditing ? saveMedicalRecord : toggleEdit}
              class={`px-4 py-2 text-white text-sm font-semibold rounded-lg btn-soft 
                ${isEditing ? 'btn btn-soft btn-success' : 'btn btn-soft btn-info'}`}>
              {isEditing ? 'Save' : 'Edit'}
            </button>
          </div>

          <div class="space-y-4">
            {#if isEditing}
            <div class="grid grid-cols-2 gap-4">
              <div>
                <h2 class="block text-base font-bold">Age</h2>
                <p class="text-base">{currentPatientData.age}</p>
              </div>
              <div>
                <h2 class="text-base font-bold">Sex</h2>
                <p class="text-base">{currentPatientData.sex}</p>
              </div>
              <div>
                <label for="bloodType" class="block text-sm text-gray-400 mb-1">Blood Type</label>
                <input id="bloodType" list="blood" type="text" bind:value={currentPatientData.bloodType} class="input bg-[#181818] w-full p-2 rounded border"/>
                <datalist id="blood">
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </datalist>
              </div>
              <div>
                <label for="weight" class="block text-sm text-gray-400 mb-1">Weight (kg)</label>
                <input id="weight" type="number" bind:value={currentPatientData.weight} class="input bg-[#181818] w-full p-2 rounded border" />
              </div>
              <div>
                <label for="height" class="block text-sm text-gray-400 mb-1">Height (cm)</label>
                <input id="height" type="number" bind:value={currentPatientData.height} class="input bg-[#181818] w-full p-2 rounded border" />
              </div>
              <div>
                <label for="allergies" class="block text-sm text-gray-400 mb-1">Allergies</label>
                <input id="allergies" type="text" bind:value={currentPatientData.allergies} class="input bg-[#181818] w-full p-2 rounded border" />
              </div>
            </div>
            <div>
              <label for="medicalNotes" class="block text-sm text-gray-400 mb-1 mt-4">Medical Notes</label>
              <textarea id="medicalNotes" bind:value={currentPatientData.medicalNotes} class="input bg-[#181818] w-full p-2 rounded border h-32"></textarea>
            </div>
            {:else}
            <div class="grid grid-cols-2 gap-4">
              <div>
                <h2 class="block text-base text-gray-400 font-bold">Age</h2>
                <p class="text-base mt-1">{currentPatientData.age}</p>
              </div>
              <div>
                <h2 class="text-base text-gray-400 font-bold">Sex</h2>
                <p class="text-base mt-1">{currentPatientData.sex}</p>
              </div>
              <div>
                <h2 class="text-base text-gray-400 font-bold">Blood Type</h2>
                <p class="text-base mt-1">{medicalRecord.bloodType}</p>
              </div>
              <div>
                <h2 class="text-base text-gray-400 font-bold">Weight (kg)</h2>
                <p class="text-base mt-1">{medicalRecord.weight}</p>
              </div>
              <div>
                <h2 class="text-base text-gray-400 font-bold">Height (cm)</h2>
                <p class="text-base mt-1">{medicalRecord.height}</p>
              </div>
              <div>
                <h2 class="text-base text-gray-400 font-bold">Allergies</h2>
                <p class="text-base mt-1">{medicalRecord.allergies}</p>
              </div>
            </div>
            <div>
              <h2 class="text-base text-gray-400 font-bold">Medical Notes</h2>
                <p class="text-base mt-1">{medicalRecord.medicalNotes}</p>
            </div>
            {/if}
          </div>
        </div>

        <!-- Prescribe Medicine -->
        <div class="w-[40%] bg-base-200 p-6 rounded-xl border border-base-300 shadow space-y-5 h-135 overflow-y-scroll">
          <h2 class="text-2xl font-bold text-white">Prescribe Medicine</h2>

          <!-- Medicine Search -->
          <div class="form-control">
            <label class="label text-sm text-gray-400">Search Medicine</label>
            <input
              type="text"
              bind:value={medicineSearch}
              placeholder="Enter medicine name..."
              class="input input-bordered w-full bg-base-100 text-white"
            />
          </div>

          <!-- Filtered medicine results -->
         {#if medicineSearch && filteredMedicines.length > 0}
            <ul class="menu bg-base-300 rounded-box max-h-40 menu-horizontal overflow-y-auto border border-base-200">
              {#each filteredMedicines as medicine}
                <li>
                  <button
                    class="justify-between"
                    on:click={() => {
                      selectedMedicine = medicine;
                      medicineSearch = medicine.name;
                      filteredMedicines = []; // Hide dropdown
                    }}
                  >
                    <div>
                      <span class="font-semibold">{medicine.name}</span>
                    </div>
                  </button>
                </li>
              {/each}
            </ul>
          {/if}


          <!-- Selected medicine display -->
          {#if selectedMedicine}
            <div class="alert bg-base-300 text-white border border-base-200">
              <div>
                <span class="font-bold">{selectedMedicine.name}</span><br />
                <span class="text-sm text-gray-400">Item ID: {selectedMedicine.id}</span>
              </div>
            </div>
          {/if}

          <!-- Amount Control -->
          <div class="form-control">
            <label class="label text-sm text-gray-400">Quantity</label>
            <div class="flex items-center gap-3">
              <button
                class="btn btn-sm btn-outline"
                on:click={() => itemAmount = Math.max(0, itemAmount - 1)}
                disabled={itemAmount <= 0}
              >−</button>
              <span class="text-lg">{itemAmount}</span>
              <button
                class="btn btn-sm btn-outline"
                on:click={() => itemAmount = Math.min(selectedMedicine?.stock || 0, itemAmount + 1)}
                disabled={!selectedMedicine || itemAmount >= selectedMedicine.stock}
              >+</button>
            </div>
          </div>

          <!-- Total price -->
          {#if selectedMedicine && itemAmount > 0}
            <div class="text-sm text-gray-400 text-center">
              💵 Total: ₱{(itemAmount * selectedMedicine.price).toFixed(2)}
            </div>
          {/if}

          <!-- Add prescription button -->
          <button
            class="btn btn-primary w-full mt-2"
            on:click={addPrescription}
            disabled={!selectedMedicine || itemAmount <= 0 || itemAmount > (selectedMedicine?.stock || 0)}
          >
            ➕ Add Prescription
          </button>

          <!-- Current Prescriptions Table -->
          <div class="mt-6">
            <h3 class="text-lg font-bold text-white mb-2">📋 Current Prescriptions</h3>

            {#if loading}
              <div class="text-center text-gray-400">Loading prescriptions...</div>
            {:else if error}
              <div class="text-error">{error}</div>
            {:else if prescriptions.length === 0}
              <div class="text-gray-500">No prescriptions yet</div>
            {:else}
              <div class="overflow-x-auto">
                <table class="table table-zebra table-sm text-sm">
                  <thead>
                    <tr>
                      <th>
                        <button class="btn btn-ghost btn-xs" on:click={() => toggleSort('medicineName')}>
                          Medicine {#if sortField === 'medicineName'}{sortAsc ? '↑' : '↓'}{/if}
                        </button>
                      </th>
                      <th>Qty</th>
                      <th>
                        <button class="btn btn-ghost btn-xs" on:click={() => toggleSort('createdAt')}>
                          Date {#if sortField === 'createdAt'}{sortAsc ? '↑' : '↓'}{/if}
                        </button>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {#each sortedPrescriptions as prescription}
                      <tr>
                        <td>{prescription.medicineName}</td>
                        <td class="text-center">{prescription.itemAmount}</td>
                        <td>{prescription.createdAt?.toDate().toLocaleDateString() || '-'}</td>
                      </tr>
                    {/each}
                  </tbody>
                </table>
              </div>
            {/if}
          </div>
        </div>

      </div>
    {:else}
      <div class="text-center text-gray-400">
        Select a patient from the sidebar to view their details
      </div>
    {/if}
  </main>
</div>
