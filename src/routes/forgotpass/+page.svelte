<script>
	import Footpage from "$lib/components/+footpage.svelte";
	import { Mail } from "@lucide/svelte";
	import { auth } from "$lib/firebase"; // adjust path if needed
	import { sendPasswordResetEmail } from "firebase/auth";

	let email = '';
	let successMessage = '';
	let errorMessage = '';
    let isLoading = false; // Variable to hold loading state

	async function resetPassword() {
        isLoading = true; // Set loading to true when starting password reset
		successMessage = '';
		errorMessage = '';
		if (!email) {
			errorMessage = 'Please enter your email address.';
			return;
		}

		try {
			await sendPasswordResetEmail(auth, email);
			successMessage = 'Password reset email sent. Check your inbox.';
            setTimeout(() => (window.location.href = "/login"), 2500); // Redirect after 2.5 seconds
		} catch (err) {
			if (err instanceof Error) {
				if (err.message.includes('user-not-found')) {
					errorMessage = "No user found with this email.";
				} else {
					errorMessage = err.message;
				}
				console.error(err.message);
			}
		} finally {
            isLoading = false; // Set loading to false when password reset is complete
        }
	}
</script>

<div class="flex flex-col justify-center items-center w-screen h-screen bg-[#181818]">
	<!-- Card Container -->
	<div class="w-100 h-90 bg-[#f7374f] rounded-3xl text-white p-6">
		<!-- Logo + Title -->
		<div class="flex flex-row items-center justify-start">
			<img src="/cloudward.png" alt="Logo" class="w-12 h-12 mt-3 ml-2"/>
			<h1 class="text-3xl text-white font-bold mt-4 ml-2">CloudWard-Reset</h1>
		</div>

		<!-- Fieldset -->
		<div class="flex flex-col items-center justify-center mt-7">
			<fieldset class="bg-[#181818] border-[#181818] rounded-box border p-4 w-80">
				<p class="text-white text-base">Enter your email address to reset your password.</p>
				<label class="input input-bordered bg-[#181818] mt-3 flex items-center gap-2">
					<Mail color="#FFFF"/>
					<input class="text-white w-full bg-transparent outline-none" type="email" bind:value={email} placeholder="E-Mail" />
				</label>
			</fieldset>

			<!-- Messages -->
			{#if errorMessage}
				<div class=" toast toast-end">
                    <div class="alert alert-error">
                        <span>{errorMessage}</span>
                    </div>
                </div>
			{/if}
			{#if successMessage}
                <div class=" toast toast-end">
                    <div class="alert alert-success">
                        <span>{successMessage}</span>
                    </div>
                </div>
			{/if}
		</div>

		<!-- Submit Button -->
		<div class="flex flex-row items-center justify-center space-x-3 mt-5 mr-22">
			<button type="button" class="btn bg-[#181818] hover:bg-indigo-700" on:click={resetPassword}>
                {#if isLoading}
                    <span class="loading loading-spinner text-neutral"></span>
                {:else}
                    Reset Password
                {/if}
            </button>
			<a href="/login" class="btn bg-[#181818] hover:bg-red-500">Cancel</a>
		</div>
	</div>
</div>
