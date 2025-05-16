<script lang="ts">
	import { goto } from "$app/navigation";
  import Backbtn from "$lib/components/+backbtn.svelte";
	import BackgroundBeams from "$lib/components/ui/BackgroundBeams/BackgroundBeams.svelte";
	import { auth, db } from "$lib/firebase";
	import { KeyRound, Mail, User } from "@lucide/svelte";
	import { browserLocalPersistence, browserSessionPersistence, getAuth, prodErrorMap, setPersistence, signInWithEmailAndPassword } from "firebase/auth";
	import { doc, getDoc } from "firebase/firestore";

    let selectedRole = '';
    const roles = ['Patient', 'Admin', 'Doctor'];
  
    function selectRole(role: string) {
      selectedRole = role;
    }

    let isLoading = false; // Variable to hold loading state
    let errorMessage = ''; // Variable to hold error message
    let email = '';
    let password = '';
    let rememberMe = false;

    async function login() {
      isLoading = true; // Set loading to true when starting login
      errorMessage = ''; // Reset error message
      try {
        const persistenceType = browserSessionPersistence;
        await setPersistence(auth, persistenceType);
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const uid = userCredential.user.uid;
        // Get the user's role and birthdate from Firestore
        const userDocRef = doc(db, "users", uid);
        const userSnap = await getDoc(userDocRef); // Ensure user exists
        const userData = userSnap.data();
        if (!userData) {
          errorMessage = "Invalid credentials. Please check your email and password.";
          isLoading = false; // Set loading to false if user data is not found
          return;
        }
        // Set isActive to true on login
        await import('firebase/firestore').then(({ updateDoc }) => updateDoc(userDocRef, { isActive: true }));
        // Calculate and update age on every login
        if (userData.birthdate) {
          const birth = new Date(userData.birthdate);
          const today = new Date();
          let age = today.getFullYear() - birth.getFullYear();
          const m = today.getMonth() - birth.getMonth();
          if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
            age--;
          }
          await import('firebase/firestore').then(({ updateDoc }) => updateDoc(userDocRef, { age }));
        }
        const storedRole = userData.role;
        if (storedRole === selectedRole) {
          // Navigate based on role
          if (storedRole === "Admin") goto('/dashboard/admin');
          else if (storedRole === "Patient") goto('/dashboard/patient');
          else if (storedRole === "Doctor") goto('/dashboard/doctor');
        } else {
        alert("Selected role doesn't match your account.");
        }
      } catch (err) {
        if (err instanceof Error){
          errorMessage = "Invalid credentials. Please check your email and password."; // Show error message if login fails
        }
      } finally{
        isLoading = false; // Set loading to false when login is complete
      }
}

  </script>
  
  <!-- Page Container -->
  <div class="bg-[#181818] w-screen h-screen flex items-center justify-center overflow-hidden">
    
    <!-- Login Card -->
    <div class = "login-card rounded-3xl bg-[#f7374f] flex flex-col items-center text-white">
      <!-- Back Btn -->
      <Backbtn/>
      <!-- Logo -->
      <div class = "flex flex-col items-center justify-center">
        <img src = "/cloudward.png" alt = "Logo" class = "w-32 h-32 mb-5"/>
        <h1 class = "text-3xl text-white font-bold">CloudWard</h1>
        <p class= "text-white text-sm mb-2">Login as:</p>
      </div>
      <!-- Role Menu -->
      <div class = "menu menu-horizontal bg-[#181818] rounded-xl">
        {#each roles as role}
          <li>
            <button
              class="flex justify-between"
              class:active={selectedRole === role}
              on:click={() => selectRole(role)}
            >
              {role}
              {#if selectedRole === role}
                <span class="text-green-500">✓</span>
              {/if}
          </button>
          </li>
       {/each}
      </div>
      <!-- Login Form -->
      <form on:submit|preventDefault={login} class="flex flex-col items-center justify-evenly h-full w-full px-4">
        <label class="input input-neutral">
          <Mail color="#FFFF"/>
          <input class="text-white" type="text" bind:value={email} placeholder="E-Mail" />
        </label>
        <label class="input input-neutral">
          <KeyRound color="#FFFF"/>
          <input class="text-white" type="password" bind:value={password} placeholder="Password" />
        </label>
        <button type="submit" class="btn btn-soft btn-info rounded-xl w-1/2 font-bold">
          {#if isLoading}
            <span class="loading loading-spinner text-neutral"></span>
          {:else}
            Login
          {/if}
        </button>
        <div class="flex flex-col items-center">
          <p class="text-white text-sm">Don't have an account? <a href="/register" class="log-link font-bold text-[#181818]">Register</a></p>
          <p class="text-white text-sm">Forgot your password? <a href="/forgotpass" class="log-link font-bold text-[#181818]">Reset</a></p>
        </div>
        {#if errorMessage}
            <div class="toast">
                <div role="alert" class="alert alert-error alert-soft mt-4 text-white rounded-lg">
                    <span>{errorMessage}</span>
                </div>
            </div>
        {/if}
      </form>
    </div>
    
  </div>

  <style>
    .login-card {
      width: 430px;
      height: 550px;
    }
  
  .log-link {
    position: relative;
    overflow: hidden;
  }
  .log-link::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: white;
    transition: width 0.3s ease, left 0.3s ease;
  }
  .log-link:hover::after{
    width: 100%;
    left: 0;
  }

  </style>