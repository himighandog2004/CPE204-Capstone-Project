<script lang="ts">
	import { auth, db } from '$lib/firebase';
	import { Home, KeyRound, Mail, Phone, User } from '@lucide/svelte';
	import { createUserWithEmailAndPassword } from 'firebase/auth';
	import { doc, setDoc } from 'firebase/firestore';
	import Backbtn from '$lib/components/+absbackbtn.svelte';

	let name = '';
	let surname = '';
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

			await setDoc(doc(db, 'users', user.uid), {
				name,
				surname,
				phone,
				address,
				email: user.email,
				role: 'Patient',
			});

			successMessage = 'Account created successfully.';
			window.location.href = '/login';
		} catch (err) {
			if (err instanceof Error) {
				if (err.message.includes('email-already-in-use')) {
					errorMessage = 'This email is already registered. Please use a different email.';
				} else {
					errorMessage = 'Something went wrong. Please try again.';
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
	<div class="register-card rounded-3xl bg-[#f7374f] flex flex-col justify-center items-center w-1/4 pb-4 ">
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
			<label class="input input-bordered bg-[#181818]">
				<User color="#FFFF" />
				<input class="text-white" type="text" bind:value={name} placeholder="First Name" />
			</label>
			<label class="input input-bordered bg-[#181818]">
				<User color="#FFFF" />
				<input class="text-white" type="text" bind:value={surname} placeholder="Last Name" />
			</label>
			<label class="input input-bordered bg-[#181818]">
				<Phone color="#FFFF" />
				<input class="text-white" type="tel" bind:value={phone} placeholder="Phone Number" />
			</label>
			<label class="input input-bordered bg-[#181818]">
				<Home color="#FFFF" />
				<input class="text-white" type="text" bind:value={address} placeholder="Address" />
			</label>
			<label class="input input-bordered bg-[#181818]">
				<Mail color="#FFFF" />
				<input class="text-white" type="email" bind:value={email} placeholder="Email" />
			</label>
			<label class="input input-bordered bg-[#181818]">
				<KeyRound color="#FFFF" />
				<input class="text-white" type="password" bind:value={password} placeholder="Password" />
			</label>
			<button type="submit" class="btn bg-white text-black hover:bg-green-600 w-1/2 font-bold">
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
	.register-card {

	}
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
