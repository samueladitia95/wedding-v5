<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import { superForm } from 'sveltekit-superforms/client';
	import star from '$lib/assets/star.svg?raw';
	import loading from '$lib/assets/loading.svg?raw';

	const rsvp_intro = 'KINDLY CONFIRM YOUR ATTENDANCE BY COMPLETING THE FORM PROVIDED BELOW:';
	const rsvp_due_date = 'Before 2nd September 2024';
	const rsvp_wishes =
		'ALONGSIDE RSVP, PLEASE TAKE A MOMENT TO EXPRESS YOUR WARM REGARDS AND BEST WISHES.';

	let isLoading: Boolean = false;
	let endScreen: Boolean = false;
	function toggleLoading() {
		isLoading = !isLoading; // Toggle the isLoading state
		setTimeout(() => {
			endScreen = true;
			// Optionally, you might want to set isLoading back to false here if needed
			isLoading = false;
		}, 1500);
	}
</script>

{#if !endScreen}
	<div class="bg-mj-sand2 min-h-screen py-[80px] px-[24px] flex lg:justify-center w-full font-gordita">
		<div class="flex flex-col text-white lg:max-w-[800px] w-full">
			<h1 class="text-[32px] pb-[24px] tracking-widest">RSVP & WISHES</h1>
			<div class="flex flex-col gap-[20px] pb-[40px] text-[12px] md:text-[14px] tracking-wide">
				<p>{rsvp_intro}</p>
				<p class="text-[14px] tracking-normal font-timesNewRoman italic">{rsvp_due_date}</p>
				<p>{rsvp_wishes}</p>
			</div>
			<form>
				<div class="flex flex-col gap-[24px] text-[14px]">
					<Input name="full_name" label="Fill Your Name" />
					<Input name="phone_number" label="Phone Number" />
					<Input name="email" label="Email" />

					<div class="py-[12px]">
						<div class="font-editor-hand text-ca-blue text-[14px] flex">
							Will you be attending the wedding? &nbsp
							<p class="text-mj-error max-w-[8px] -translate-y-1">{@html star}</p>
						</div>
						<div class="flex gap-12 md:gap-28 w-full ml-3 mt-3">
							<div class="flex gap-2 items-center">
								<input
									name="subject"
									type="radio"
									class="w-5 h-5 appearance-none border-2 border-white/20 rounded-full box-content checked:bg-white checked:ring-4 checked:ring-mj-sand checked:ring-inset"
								/>
								<div class="text-ca-blue font-editor-hand">Yes</div>
							</div>
							<div class="flex gap-2 items-center">
								<input
									name="subject"
									type="radio"
									class="w-5 h-5 appearance-none border-2 border-white/20 rounded-full box-content checked:bg-white checked:ring-4 checked:ring-mj-sand checked:ring-inset"
								/>
								<div class="text-ca-blue font-editor-hand">No</div>
							</div>
						</div>
					</div>
					<Input
						name="plus1"
						label="Are you bringing a +1?"
						placeholder="If so, please let us know"
					/>

					<div class="py-[12px]">
						<div class="font-editor-hand text-ca-blue text-[14px] flex">
							Please Select Your Main Dish &nbsp
							<p class="text-mj-error max-w-[8px] -translate-y-1">{@html star}</p>
						</div>
						<div class="flex gap-12 md:gap-28 w-full ml-3 mt-3">
							<div class="flex gap-2 items-center">
								<input
									name="subject"
									type="radio"
									class="w-5 h-5 appearance-none border-2 border-white/20 rounded-full box-content checked:bg-white checked:ring-4 checked:ring-mj-sand checked:ring-inset"
								/>
								<div class="text-ca-blue font-editor-hand">Beef</div>
							</div>
							<div class="flex gap-2 items-center">
								<input
									name="subject"
									type="radio"
									class="w-5 h-5 appearance-none border-2 border-white/20 rounded-full box-content checked:bg-white checked:ring-4 checked:ring-mj-sand checked:ring-inset"
								/>
								<div class="text-ca-blue font-editor-hand">Chicken</div>
							</div>
						</div>
					</div>
					<div class="flex flex-col gap-[36px]">
						<Input
							name="allergies"
							label="Do you have any allergies & food restrictions?"
							placeholder="If you have one, please let us know"
						/>
						<Input name="wishes" label="Wishes" placeholder="Write your wishes" />
						<Input
							name="from"
							label="From"
							placeholder="Enter your name here to send your wishes."
						/>
						{#if !isLoading}
							<button
								class="w-full bg-mj-button-disabled text-mj-button-disabled-text py-[16px] rounded-[45px] hover:bg-white hover:text-mj-black transition-all duration-300 tracking-widest"
								on:click={toggleLoading}>SUBMIT RSVP & WISHES</button
							>
							<!-- emulating button styling -->
						{:else}
							<button
								class="w-full bg-mj-button-disabled text-mj-button-disabled-text py-[16px] rounded-[45px] hover:bg-white hover:text-mj-black transition-all duration-300 flex text-center justify-center gap-2 tracking-widest"
								on:click={toggleLoading}
								><span class="rotate">{@html loading}</span>LOADING...</button
							>
						{/if}
					</div>
				</div>
			</form>
		</div>
	</div>
{:else}
	<div class="bg-mj-sand2 min-h-screen py-[80px] px-[24px] items-center flex flex-col justify-center">
		<div
			class="flex flex-col text-center text-white gap-3 max-w-[800px]"
		>
			<h1 class="text-[40px] px-[20px]">THANK YOU FOR YOUR RSVP AND WISHES!</h1>
			<p class="text-[12px] px-[32px]">WE WILL CONTACT YOU FOR MORE INFORMATION AND DETAILS</p>
		</div>
	</div>
{/if}

<style>
	@keyframes rotate {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	.rotate {
		animation: rotate 2s linear infinite;
	}
</style>
