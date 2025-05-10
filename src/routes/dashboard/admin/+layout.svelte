<script lang="ts">
  import { onMount, setContext } from 'svelte';
  import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
  import { collection, query, where, getDocs, getDoc, doc } from 'firebase/firestore';
  import { db } from '$lib/firebase';
  import Navsidebar from '$lib/components/+navsidebar.svelte';
  import Loadscrn from '$lib/components/+loadscrn.svelte';
  import { Activity, Home, LogOut, Microscope, Package, Receipt, Settings, Users } from '@lucide/svelte';
  import { patientCount, doctorCount } from '$lib/stores/userData';
  import { patients as patientsStore } from '$lib/stores/patients';
  import { appointments as appointmentsStore } from '$lib/stores/appointments';
  import { writable } from 'svelte/store';
  

  let selectedRole = '';
  let avatarUrl = 'https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg';
  let loading = true;
  let patients = [];
  let userNameStore = writable('');

  // Set context synchronously in component initialization with the store
  setContext('patients', patientsStore);
  setContext('userName', userNameStore);
  setContext('appointments', appointmentsStore);

  onMount(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (!user) {
        window.location.href = '/login';
        return;
      }

      try {
        // Fetch user data
        const docRef = doc(db, 'users', user.uid);
        const snap = await getDoc(docRef);
        const data = snap.data();
        selectedRole = data?.role || '';
        userNameStore.set((data?.name || '') + (data?.surname ? ' ' + data.surname : ''));

        // Query Firestore for users with the "patient" role
        const usersQuery = query(collection(db, 'users'), where('role', '==', 'Patient'));
        const querySnapshot = await getDocs(usersQuery);
        console.log("Patient docs found:", querySnapshot.size, querySnapshot.docs.map(d => d.data()));
        
        // Update the patient count store
        patientCount.set(querySnapshot.size);
        // Store all patient data for use in dashboard
        patients = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        // Update the patients store
        patientsStore.set(patients);

        // Query Firestore for users with the "Doctor" role
        const doctorsQuery = query(collection(db, 'users'), where('role', '==', 'Doctor'));
        const doctorSnapshot = await getDocs(doctorsQuery);
        doctorCount.set(doctorSnapshot.size);
      } catch (err) {
        console.error('Failed to load patient count:', err);
      } finally {
        loading = false;
      }
    });

    // Fetch appointments from Firestore and update the store
    import('firebase/firestore').then(async ({ collection, getDocs }) => {
      const snapshot = await getDocs(collection(db, 'appointments'));
      appointmentsStore.set(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
  });

  function handleLogout() {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      // Set isActive to false in Firestore
      const userRef = doc(db, 'users', user.uid);
      // Fire and forget, don't block logout
      import('firebase/firestore').then(({ updateDoc }) => {
        updateDoc(userRef, { isActive: false });
      });
    }
    signOut(auth).then(() => {
      window.location.href = '/login';
    });
  }
</script>

{#if loading}
  <div class="w-screen min-h-screen flex items-center justify-center"><Loadscrn/></div>
{:else} 
  <Navsidebar {avatarUrl} {selectedRole}>
      <!-- Sidebar -->
      <div slot="sidebar">    
          <!-- Sidebar Content Container -->
          <div class="flex flex-col items-start justify-start pl-1 font-extrabold">
            <!-- Menu -->
            <ul class="menu w-full text-lg space-y-2">
                <li>
                    <a href="/dashboard/admin">
                        <Home />
                        Home
                    </a>
                </li>
                <li>
                    <details open>
                    <summary>
                        <img src="/bed-pulse-solid.png" class="w-6 h-5" alt="patient"/>
                        Patient Records
                    </summary>
                        <ul class="text-base w-50">
                            <li><a href="/dashboard/admin/sidebar/patientlist">Patient List</a></li>
                            <li><a href="/dashboard/admin/sidebar/appointments">Appointments</a></li>
                            <!-- Add more here -->
                        </ul>
                    </details>
                </li>
                <li>
                    <details open>
                    <summary>
                        <Users />
                        Staff Management
                    </summary>
                        <ul class="text-base w-50">
                            <li><a href="/dashboard/admin/sidebar/doctorslist">Manage/Add Doctors</a></li>
                            <!-- Add more here -->
                        </ul>
                    </details>
                </li>
                <li>
                    <details open>
                    <summary>
                        <Package />
                        Inventory
                    </summary>
                        <ul class="text-base w-50">
                            <li><a href="/dashboard/admin/sidebar/pharmacy">Pharmacy</a></li>
                            <li><a href="/dashboard/admin/sidebar/equipment">Equipment</a></li>
                            <!-- Add more here -->
                        </ul>
                    </details>
                </li>
                <li>
                    <a href="/dashboard/admin/sidebar/listbill">
                        <Receipt />
                        Billing Overview
                    </a>
                </li>
                <li>
                    <a href="/dashboard/admin/sidebar/analytics">
                        <Activity />
                        Analytics
                    </a>
                </li>
                <li>
                    <a href="/dashboard/admin/sidebar/lab">
                        <Microscope />
                        Lab Integration
                    </a>
                </li>
                <li class="pt-4">
                    <button on:click={handleLogout} class="btn btn-soft btn-info w-full flex items-center gap-2">
                        <LogOut />
                        Logout
                    </button>
                </li>
            </ul>

          </div>
      </div>
      <!--Navbar-->
      <div slot="navbar">
          <!-- Can be empty -->
          
      </div>
          <!-- Dropdown -->
          <div slot="dropdown">
              <li><button on:click={handleLogout}><LogOut />Logout</button></li>
          </div>
      <!-- Main -->
      <div slot="main" class="w-full">
        <slot></slot>
      </div>
  </Navsidebar>

{/if}
