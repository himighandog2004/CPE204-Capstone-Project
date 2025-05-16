<script lang="ts">
	import { auth, db } from '$lib/firebase';
	import { Home, KeyRound, Mail, Phone, User } from '@lucide/svelte';
	import { createUserWithEmailAndPassword } from 'firebase/auth';
	import { doc, setDoc } from 'firebase/firestore';
	import Backbtn from '$lib/components/+absbackbtn.svelte';

	let name = '';
	let surname = '';
	let birthdate = '';
	let sex = '';
	let phone = '';
	let address = '';
	let email = '';
	let password = '';
	let successMessage = '';
	let errorMessage = '';
	let loading = false;

	async function register() {
		loading = true;
		errorMessage = '';

		try {
			const userCredential = await createUserWithEmailAndPassword(auth, email, password);
			const user = userCredential.user;

			// Calculate age from birthdate
			let age = 0;
			if (birthdate) {
				const birth = new Date(birthdate);
				const today = new Date();
				age = today.getFullYear() - birth.getFullYear();
				const m = today.getMonth() - birth.getMonth();
				if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
					age--;
				}
			}

			await setDoc(doc(db, 'users', user.uid), {
				name,
				surname,
				birthdate,
				age,
				sex,
				phone,
				address,
				email: user.email,
				role: 'Patient',
				createdAt: new Date().toISOString(),
			});

			successMessage = 'Account created successfully.';
			window.location.href = '/login';
		} catch (err) {
			if (err instanceof Error) {
				if (err.message.includes('email-already-in-use')) {
					errorMessage = 'This email is already registered. Please use a different email.';
				} else if (err.message.includes('invalid-email')) {
					errorMessage = "Invalid email format. Please enter a valid email address.";
				} else {
					errorMessage = 'Something went wrong. Please try again.';
					console.error(err.message);
				}
				console.error(err.message);
			}
		} finally {
			loading = false;
		}
	}
</script>

<!-- Page Container -->
<div class="bg-[#181818] w-screen h-screen flex flex-col items-center justify-center">
	<!-- Register Card -->
	<div class="register-card rounded-3xl bg-[#f7374f] flex flex-col justify-center items-center w-[25%] pb-4 ">
		<!-- Back Btn -->
		<Backbtn />
		<!-- Title -->
		<div class="flex flex-col items-center pt-2 pb-2">
			<img src="/cloudward.png" alt="Logo" class="w-15 h-15 mt-6" />
			<h1 class="text-3xl text-white font-bold mt-2">CloudWard</h1>
			<p class="text-white text-base">Registration</p>
		</div>
		<!-- Register Form -->
		<form on:submit|preventDefault={register} class="flex flex-col items-center space-y-4 mt-3 w-full">
			
			<label class="flex flex-row justify-around w-1/2">
				<input type="radio" name="radio-9" class="radio radio-info" required bind:group={sex} value="Male"/>
				<p class="text-white">Male</p>
				<input type="radio" name="radio-9" class="radio radio-info" bind:group={sex} value="Female" />
				<p class="text-white">Female</p>
			</label>

			<label class="input validator input-neutral">
				<User />
				<input class="grow" pattern="[A-Za-z]+([ '\-][A-Za-z]+)*$" required type="text" bind:value={name} placeholder="First Name" />
			</label>
			<label class="input validator input-neutral">
				<User />
				<input class="grow" pattern="[A-Za-z]+([ '\-][A-Za-z]+)*$" required type="text" bind:value={surname} placeholder="Last Name" />
			</label>

			<input type="date" class="input input-neutral" bind:value={birthdate} placeholder="Birthdate" />

			<label class="input input-neutral">
				<Phone />
				<input class="grow" title="Enter a valid phone number starting with 09" maxlength="11" required type="tel" bind:value={phone} placeholder="e.g. 09943367206" />
			</label>
			<label class="input input-neutral">
				<Home />
				<input class="grow" type="text" bind:value={address} placeholder="Address" />
			</label>
			<label class="input validator input-neutral">
				<Mail />
				<input class="grow" type="email" pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$" bind:value={email} placeholder="Email" />
			</label>
			<label class="input input-neutral">
				<KeyRound />
				<input class="grow" minlength="6" type="password" bind:value={password} placeholder="Password" />
			</label>
			<button type="submit" class="btn btn-success btn-soft rounded-xl w-1/2 font-bold">
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
			{#if successMessage}
				<div class="toast toast-end">
					<div class="alert alert-success alert-soft mt-4 text-white rounded-lg">
						<span>{successMessage}</span>
					</div>
				</div>
			{/if}
		</form>
	</div>
</div>

<style>

	.input {
		width: 80%;
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
	.log-link:hover::after {
		width: 100%;
		left: 0;
	}
</style>
