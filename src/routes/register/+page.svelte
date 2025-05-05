<script lang="ts">
    import { auth, db } from '$lib/firebase';
	import { BriefcaseMedical, Home, KeyRound, Mail, Phone, User } from '@lucide/svelte';
    import { createUserWithEmailAndPassword } from 'firebase/auth';
    import { doc, setDoc } from 'firebase/firestore';

    let name = '';
    let surname = '';
    let phone = '';
    let address = '';
    let email = '';
    let password = ''; 
    let selectedRole = 'Patient';
    const roles = ['Patient', 'Doctor'];
    let errorMessage = ''; // Variable to hold error message
    let loading = false;
    function selectRole(role: string) {
      selectedRole = role;
    }

    const medicalFields = [
    'Cardiology',
    'Dermatology',
    'Neurology',
    'Pediatrics',
    'Psychiatry',
    'General Practice'
    ];

    let specialty = '';

    async function register() {
        loading = true; // Set loading to true when starting registration  
        errorMessage = ''; // Reset error message
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            // Save role to Firestore
            await setDoc(doc(db, "users", user.uid), {
            name,
            surname,
            phone,
            address,
            email: user.email,
            role: selectedRole,
            specialty: selectedRole === 'Doctor' ? specialty : null, // Save specialty only if the user is a doctor
            });

            console.log("User registered and role saved.");
            window.location.href = '/login'; // Redirect to login page after registration
        } catch (err) {
            if (err instanceof Error) {
                 // Check if the error is due to email already being in use
                 if (err.message.includes('email-already-in-use')) {
                    errorMessage = "This email is already registered. Please use a different email.";
                } else {
                    errorMessage = err.message; // Show other errors
                }
                console.error(err.message);
            }
        } finally {
            loading = false; // Set loading to false when registration is complete
        }
    }
  </script>

  <!-- Page Container -->
  <div class="bg-[#181818] w-screen h-screen flex items-stretch justify-start">
    <!-- Register Card -->
    <div class = "register-card h-full bg-[#f7374f] flex min-h-full flex-col items-center w-1/2 overflow-y-hidden">
      <!-- Back Btn -->
      <a href = "/" class = "flex items-center justify-start w-full">
        <img src = "/backbtn.png" alt = "Back Button" class = "backbtn w-8 h-8 mt-15 ml-3 hover:bg-[#FFFF] rounded-xl"/>
      </a>
      <!-- Title -->
      <div class = "flex flex-col items-center w-full pt-2 pb-2">
        <img src = "/cloudward.png" alt = "Logo" class = "w-15 h-15 mt-6"/>
        <h1 class = "text-3xl text-white font-bold mt-2">CloudWard</h1>
        <p class = "text-white text-sm">Register as:</p>
      </div>  
      <!-- Role Menu -->
      <div class = "menu menu-horizontal bg-[#181818] rounded-xl text-white">
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
      <!-- Regsiter Form -->
      <form on:submit|preventDefault={register} class="flex flex-col items-center space-y-4 h-full min-h-screen w-full px-6 mt-3">
        {#if selectedRole === 'Doctor'}
            <label class="dropdown dropdown-center bg-[#181818] rounded-lg w-4/5">
                <select bind:value={specialty} class="bg-[#181818] rounded-lg text-white w-full">
                    <option value="" disabled selected><BriefcaseMedical />🩺 Select your specialty</option>
                    {#each medicalFields as field}
                        <option value={field}>⚕️ {field}</option>
                    {/each}
                </select>
            </label>
        {/if}
    
        <label class="input input-bordered bg-[#181818]">
            <User color="#FFFF"/>
            <input class="text-white" type="text" bind:value={name} placeholder="First Name" />
        </label>
        <label class="input input-bordered bg-[#181818]">
            <User color="#FFFF"/>
            <input class="text-white" type="text" bind:value={surname} placeholder="Last Name" />
        </label>
        <label class="input input-bordered bg-[#181818]">
            <Phone color="#FFFF"/>
            <input class="text-white" type="tel" bind:value={phone} placeholder="Phone Number" />
        </label>
        <label class="input input-bordered bg-[#181818]">
            <Home color="#FFFF"/>
            <input class="text-white" type="text" bind:value={address} placeholder="Address" />
        </label>
        <label class="input input-bordered bg-[#181818]">
            <Mail color="#FFFF"/>
            <input class="text-white" type="email" bind:value={email} placeholder="Email" />
        </label>
        <label class="input input-bordered bg-[#181818]">
            <KeyRound color="#FFFF"/>
            <input class="text-white" type="password" bind:value={password} placeholder="Password" />
        </label>
        <button type="submit" class="btn bg-white text-black hover:bg-gray-200 w-1/2 font-bold">
            {#if loading}
                <span class="loading loading-spinner text-neutral"></span>
            {:else}
                Register
            {/if}
        </button>
    
        <p class="text-white text-sm">Already have an account? <a href="/login" class="log-link font-bold text-[#181818]">Login</a></p>
    
        {#if errorMessage}
            <div class="toast toast-end">
                <div role="alert" class="alert alert-error alert-soft mt-4 text-white rounded-lg">
                    <span>{errorMessage}</span>
                </div>
            </div>
        {/if}
    </form>     
    </div>

  </div>
  
  <style>
    .register-card {
      width: 430px;
      height: 520px;
    }
    .input {
    width: 80%
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
  .backbtn{
    position:absolute;
  }
  </style>