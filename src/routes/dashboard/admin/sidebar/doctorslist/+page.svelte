<script lang="ts">
import { db } from '$lib/firebase';
import { collection, addDoc, serverTimestamp, doc, deleteDoc, setDoc } from 'firebase/firestore';
import { getAuth, deleteUser, createUserWithEmailAndPassword } from 'firebase/auth';
import { getContext, onDestroy } from 'svelte';
import type { Writable } from 'svelte/store';

let doctors: any[] = [];
const doctorsStore = getContext('doctors') as Writable<any[]>;
let unsubDoctors: (() => void) | undefined;
let unsubAppointments: (() => void) | undefined;

if (doctorsStore && typeof doctorsStore.subscribe === 'function') {
  unsubDoctors = doctorsStore.subscribe((value: any[]) => {
    doctors = value;
  });
}

onDestroy(() => {
  unsubDoctors && unsubDoctors();
  unsubAppointments && unsubAppointments();
});

// Registration form fields
let name = '';
let surname = '';
let specialty = '';
let email = '';
let password = '';
let phone = '';
let address = '';
let errorMessage = '';
let successMessage = '';
let isLoading = false;

const specializations = [
  'General Medicine',
  'Pediatrics',
  'Cardiology',
  'Neurology',
  'Orthopedics',
  'Dermatology',
  'Psychiatry',
  'Other'
];

async function addDoctor() {
  errorMessage = '';
  successMessage = '';
  isLoading = true;

  try {
    // Basic validation
    if (!name || !surname || !specialty || !email) {
      errorMessage = 'Please fill in all required fields.';
      return;
    }

    const auth = getAuth();
    const doctorPassword = password.trim() || 'cloudward';
    let userCredential;

    // Try creating user in Firebase Auth
    try {
      userCredential = await createUserWithEmailAndPassword(auth, email, doctorPassword);
    } catch (err: any) {
      if (err.code === 'auth/email-already-in-use') {
        errorMessage = 'This email is already registered.';
      } else {
        errorMessage = 'Failed to register doctor in Auth.';
        console.error('Auth error:', err);
      }
      return;
    }

    const uid = userCredential.user.uid;

    // Add to Firestore
    await setDoc(doc(db, 'users', uid), {
      name,
      surname,
      specialty,
      email,
      phone: phone || '',
      address: address || '',
      role: 'Doctor',
      isActive: false,
      createdAt: serverTimestamp(),
      uid
    });

    // Update store
    doctorsStore.update(list => [
      ...list,
      {
        id: uid,
        name,
        surname,
        specialty,
        email,
        phone: phone || '',
        address: address || '',
        role: 'Doctor',
        isActive: true,
        createdAt: new Date(),
        uid
      }
    ]);

    successMessage = 'Doctor registered successfully!';

    // Reset form fields
    name = '';
    surname = '';
    specialty = '';
    email = '';
    phone = '';
    address = '';
    password = '';

  } catch (err) {
    errorMessage = 'Failed to register doctor.';
    console.error('Unexpected error:', err);
  } finally {
    isLoading = false;
  }
}


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

let selectedDoctorIds = new Set<string>();
let lastSelectedDoctorIndex: number | null = null;

function handleDoctorRowClick(event: MouseEvent, doctorId: string, index: number) {
  if (event.shiftKey && lastSelectedDoctorIndex !== null) {
    const start = Math.min(lastSelectedDoctorIndex, index);
    const end = Math.max(lastSelectedDoctorIndex, index);
    for (let i = start; i <= end; i++) {
      selectedDoctorIds.add(filteredDoctors[i].id);
    }
  } else if (event.ctrlKey || event.metaKey) {
    if (selectedDoctorIds.has(doctorId)) {
      selectedDoctorIds.delete(doctorId);
    } else {
      selectedDoctorIds.add(doctorId);
    }
    lastSelectedDoctorIndex = index;
  } else {
    selectedDoctorIds = new Set([doctorId]);
    lastSelectedDoctorIndex = index;
  }
}

async function eraseSelectedDoctor() {
  if (selectedDoctorIds.size === 0) return;
  for (const id of selectedDoctorIds) {
    try {
      await deleteDoc(doc(db, 'users', id));
    } catch (e) {
      console.error('Failed to delete doctor in Firestore:', e);
    }
    try {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user && user.uid === id) {
        await deleteUser(user);
      }
    } catch (e) {
      console.error('Failed to delete user from Firebase Auth:', e);
    }
  }
  doctorsStore.update(list => list.filter(d => !selectedDoctorIds.has(d.id)));
  selectedDoctorIds = new Set();
  lastSelectedDoctorIndex = null;
}
</script>

<div class="flex flex-row h-145 w-full justify-between items-between">
  <!-- Doctor Registration Form -->
  <div class="flex flex-col w-115">
    <div class="flex flex-row w-[100%] justify-between">
      <h1 class="text-3xl text-white">List of Doctors</h1>
    </div>
    <div class="flex justify-start items-start mt-5">
      <form on:submit|preventDefault={addDoctor} class="flex flex-col items-start justify-start space-y-8">
        <div class="flex flex-row space-x-2">
          <label class="input input-neutral">
            <input class="grow" type="text" required placeholder="First Name" bind:value={name} />
          </label>
          <label class="input input-neutral">
            <input class="grow" type="text" required placeholder="Last Name" bind:value={surname} />
          </label>
        </div>
        <div class="dropdown dropdown-center">
          <select class="btn btn-accent w-100 h-11" required bind:value={specialty}>
            <option value="" disabled selected>- Select Specialization -</option>
            {#each specializations as spec}
              <option value={spec}>{spec}</option>
            {/each}
          </select>
        </div>
        <label class="input input-neutral">
          <input class="grow" type="text" required placeholder="Email" bind:value={email} />
        </label>
        <label class="input input-neutral">
          <input class="grow" type="number" placeholder="Phone Number" bind:value={phone} />
        </label>
        <label class="input input-neutral overflow-hidden">
          <input class="grow" type="text" placeholder="Address" bind:value={address} />
        </label>
        <label class="input input-neutral">
          <input class="grow" type="password" placeholder="Password (Blank: cloudward)" bind:value={password} />
        </label>
        <button class="btn btn-soft btn-success w-full mt-2" type="submit" disabled={isLoading}>{isLoading ? 'Registering...' : 'Register Doctor'}</button>
        {#if errorMessage}
          <div class="text-red-500 text-sm">{errorMessage}</div>
        {/if}
        {#if successMessage}
          <div class="text-green-500 text-sm">{successMessage}</div>
        {/if}
      </form>
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
        <button class="btn btn-soft btn-success btn-xs" on:click={() => toggleSort('name')}>Sort by Name</button>
        <button class="btn btn-soft btn-success btn-xs" on:click={() => toggleSort('createdAt')}>Sort by Date</button>
        <button class="btn btn-soft btn-error btn-xs" on:click={eraseSelectedDoctor} disabled={selectedDoctorIds.size === 0}>Remove Doctor</button>
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
            <tr
              class:selected={selectedDoctorIds.has(doctor.id)}
              on:click={(e) => handleDoctorRowClick(e, doctor.id, i)}
              style="cursor:pointer;"
            >
              <th>{i + 1}</th>
              <td class="overflow-hidden">Dr. {capitalizeWords(doctor.name)} {capitalizeWords(doctor.surname)}</td>
              <td class="overflow-hidden">{doctor.specialty || '-'}</td>
              <td class="overflow-hidden">{doctor.phone || '-'}</td>
              <td class="overflow-hidden">{doctor.address || '-'}</td>
              <td class="overflow-hidden">{doctor.email || '-'}</td>
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

<style>
  tr.selected {
    background-color: #f7374f !important;
    color: white;
  }
  td.overflow-hidden, th.overflow-hidden {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 120px;
  }
</style>