<script>
	import { KeyRound } from "@lucide/svelte";
	import { onMount } from "svelte";
	import { getAuth, verifyPasswordResetCode, confirmPasswordReset } from "firebase/auth";
    import { auth } from '$lib/firebase'; // <- This triggers initialization


	let password = '';
	let confirmPassword = '';
	let email = '';
	let errorMessage = '';
	let successMessage = '';
	let isLoading = false;
	let code = '';

	onMount(() => {
		const urlParams = new URLSearchParams(window.location.search);
		code = urlParams.get('oobCode') ?? '';

		if (!code) {
			errorMessage = "Invalid or missing reset code.";
			return;
		}

		verifyPasswordResetCode(auth, code)
			.then((userEmail) => {
				email = userEmail;
			})
			.catch((error) => {
				errorMessage = "Reset link is invalid or has expired.";
				console.error(error);
			});
	});

	async function resetPassword() {
		if (!password || !confirmPassword) {
			errorMessage = "Please fill in all fields.";
			return;
		}

		if (password !== confirmPassword) {
			errorMessage = "Passwords do not match.";
			return;
		}

		isLoading = true;
		errorMessage = '';
		successMessage = '';

		try {
			await confirmPasswordReset(auth, code, password);
			successMessage = "Password reset successful! You can now log in.";
			setTimeout(() => {window.location.href="/login"}, 1500);
		} catch (error) {
            if (error instanceof Error) {
                if (error.message.includes('expired')) {
                    errorMessage = "Reset link has expired. Please request a new one.";
                } else if (error.message.includes('invalid')) {
                    errorMessage = "Invalid reset code. Please try again.";
                } else {
                    errorMessage = error.message;
                }
            }
		} finally {
			isLoading = false;
		}
	}
</script>

<div class="flex flex-col justify-center items-center w-screen h-screen bg-[#181818]">
	<!-- Card Container -->
	<div class="w-100 h-auto bg-[#f7374f] rounded-3xl text-white p-6">
		<!-- Logo + Title -->
		<div class="flex flex-row items-start justify-start">
			<img src="/cloudward.png" alt="Logo" class="w-12 h-12 mt-3 ml-3" />
			<h1 class="text-3xl text-white font-bold mt-4 ml-2">CloudWard</h1>
		</div>

		<!-- Fieldset -->
		<div class="flex flex-col items-center justify-center mt-5">
			<fieldset class="bg-[#181818] border-[#181818] rounded-box border p-4 w-80">
				<p class="text-white text-base">Reset Password</p>
				<p class="text-white text-base font-bold break-all">for: {email}</p>

				<label class="input input-bordered bg-[#181818] mt-3 flex items-center gap-2">
					<KeyRound color="#FFFF" />
					<input class="text-white w-full bg-transparent outline-none" type="password" bind:value={password} placeholder="Password" />
				</label>

				<label class="input input-bordered bg-[#181818] mt-3 flex items-center gap-2">
					<KeyRound color="#FFFF" />
					<input class="text-white w-full bg-transparent outline-none" type="password" bind:value={confirmPassword} placeholder="Confirm Password" />
				</label>
				<button type="button" class="btn btn-soft btn-success mt-3 gap-2" on:click={resetPassword} disabled={isLoading}>
					{#if isLoading}
						<span class="loading loading-spinner text-neutral"></span>
					{:else}
						Reset Password
					{/if}
				</button>
			</fieldset>

			<!-- Messages -->
			{#if errorMessage}
				<div class="toast toast-end mt-4">
					<div class="alert alert-error">
						<span>{errorMessage}</span>
					</div>
				</div>
			{/if}

			{#if successMessage}
				<div class="toast toast-end mt-4">
					<div class="alert alert-success">
						<span>{successMessage}</span>
					</div>
				</div>
			{/if}
		</div>

		<!-- Submit Button -->
		<div class="flex flex-row items-center justify-center space-x-3 mt-5">
			
		</div>
	</div>
</div>
