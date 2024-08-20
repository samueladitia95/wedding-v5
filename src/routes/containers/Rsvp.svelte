<script lang="ts">
	import { inview, type ObserverEventDetails } from 'svelte-inview';
	import { fade } from 'svelte/transition';
	import { invalidate } from '$app/navigation';
	import { superForm, defaults } from 'sveltekit-superforms';
	import { zod } from 'sveltekit-superforms/adapters';

	import Input from '$lib/components/Input.svelte';
	import star from '$lib/assets/star.svg?raw';
	// import loading from '$lib/assets/loading.svg?raw';
	import { schemaRsvp } from '$lib/schema';
	import { pb } from '$lib/pocketbase';

	const rsvp_intro = 'KINDLY CONFIRM YOUR ATTENDANCE BY COMPLETING THE FORM PROVIDED BELOW:';
	const rsvp_due_date = 'Before 2nd September 2024';
	const rsvp_wishes =
		'ALONGSIDE RSVP, PLEASE TAKE A MOMENT TO EXPRESS YOUR WARM REGARDS AND BEST WISHES.';

	let isLoading: boolean = false;
	// let isFinish: boolean = false;
	let endScreen: Boolean = false;

	let isShow: boolean = false;
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>): void => {
		if (!isShow && detail.inView) isShow = true;
	};

	const { form, errors, enhance, constraints } = superForm(defaults(zod(schemaRsvp)), {
		SPA: true,
		validators: zod(schemaRsvp),
		onUpdate: async function onUpdate({ form }) {
			if (form.valid) {
				const body = {
					project: 'default',
					name: form.data.name,
					phone: form.data.phone,
					email: form.data.email,
					is_attending: form.data.is_attending,
					plus_one: form.data.plus_one,
					main_dish: form.data.main_dish,
					food_allergies: form.data.food_allergies,
					wishes: form.data.wishes,
					from: form.data.from
				};
				await pb.collection('rsvp_wedding_v5').create(body);
				endScreen = true;
				isLoading = false;
				invalidate('https://dev1.samueladitia.com/api/collections/rsvp_wedding_v5/records');
			}
		}
	});
</script>

{#if !endScreen}
	<div
		class="bg-mj-sand2 min-h-screen py-[80px] px-[24px] flex xl:justify-center w-full font-gordita"
		use:inview={{
			rootMargin: '-100px',
			unobserveOnEnter: true
		}}
		on:inview_change={handleChange}
	>
		{#if isShow}
			<div class="flex flex-col text-white xl:max-w-[800px] w-full" in:fade={{ duration: 1000 }}>
				<h1
					class="text-[32px] md:text-[40px]/loose pb-[24px] tracking-widest font-ivora font-light"
				>
					RSVP & WISHES
				</h1>
				<div class="flex flex-col gap-[20px] pb-[40px] text-xs/loose md:text-[14px] tracking-wide">
					<p>{rsvp_intro}</p>
					<p class="text-sm/loose md:text-base/loose tracking-normal font-timesNewRoman italic">
						{rsvp_due_date}
					</p>
					<p>{rsvp_wishes}</p>
				</div>
				<form use:enhance>
					<div class="flex flex-col gap-6 text-sm">
						<Input
							name="name"
							label="Fill Your Name"
							bind:value={$form.name}
							{...$constraints.name}
							error={$errors.name}
						/>
						<Input
							name="phone"
							label="Phone Number"
							bind:value={$form.phone}
							{...$constraints.phone}
							error={$errors.phone}
						/>
						<Input
							name="email"
							label="Email"
							bind:value={$form.email}
							{...$constraints.email}
							error={$errors.email}
						/>

						<div class="py-[12px]">
							<div class="font-editor-hand text-ca-blue text-[14px] flex">
								Will you be attending the wedding? &nbsp
								<p class="text-mj-error max-w-[8px] -translate-y-1">{@html star}</p>
							</div>
							<div class="flex gap-12 md:gap-28 w-full ml-3 mt-3">
								<div class="flex gap-2 items-center">
									<input
										name="is_attending"
										type="radio"
										class="w-5 h-5 appearance-none border-2 border-white/20 rounded-full box-content checked:bg-white checked:ring-4 checked:ring-mj-sand checked:ring-inset"
										value="Yes"
										bind:group={$form.is_attending}
									/>
									<div class="text-ca-blue font-editor-hand">Yes</div>
								</div>
								<div class="flex gap-2 items-center">
									<input
										name="is_attending"
										type="radio"
										class="w-5 h-5 appearance-none border-2 border-white/20 rounded-full box-content checked:bg-white checked:ring-4 checked:ring-mj-sand checked:ring-inset"
										value="No"
										bind:group={$form.is_attending}
									/>
									<div class="text-ca-blue font-editor-hand">No</div>
								</div>
							</div>
						</div>
						<Input
							name="plus_one"
							label="Are you bringing a +1?"
							placeholder="If so, please let us know"
							bind:value={$form.plus_one}
							{...$constraints.plus_one}
							error={$errors.plus_one}
						/>

						<div class="py-[12px]">
							<div class="font-editor-hand text-ca-blue text-[14px] flex">
								Please Select Your Main Dish &nbsp
								<p class="text-mj-error max-w-[8px] -translate-y-1">{@html star}</p>
							</div>
							<div class="flex gap-12 md:gap-28 w-full ml-3 mt-3">
								<div class="flex gap-2 items-center">
									<input
										name="main_dish"
										type="radio"
										class="w-5 h-5 appearance-none border-2 border-white/20 rounded-full box-content checked:bg-white checked:ring-4 checked:ring-mj-sand checked:ring-inset"
										value="Beef"
										bind:group={$form.main_dish}
									/>
									<div class="text-ca-blue font-editor-hand">Beef</div>
								</div>
								<div class="flex gap-2 items-center">
									<input
										name="main_dish"
										type="radio"
										class="w-5 h-5 appearance-none border-2 border-white/20 rounded-full box-content checked:bg-white checked:ring-4 checked:ring-mj-sand checked:ring-inset"
										value="Chicken"
										bind:group={$form.main_dish}
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
								bind:value={$form.food_allergies}
								{...$constraints.food_allergies}
								error={$errors.food_allergies}
							/>
							<Input
								name="wishes"
								label="Wishes"
								placeholder="Write your wishes"
								bind:value={$form.wishes}
								{...$constraints.wishes}
								error={$errors.wishes}
							/>
							<Input
								name="from"
								label="From"
								placeholder="Enter your name here to send your wishes."
								bind:value={$form.from}
								{...$constraints.from}
								error={$errors.from}
							/>
							<button
								class="w-full disabled:bg-mj-button-disabled disabled:text-mj-button-disabled-text py-4 rounded-full bg-white text-mj-black hover:bg-mj-black hover:text-white transition-all duration-300 tracking-widest"
								disabled={isLoading}
								type="submit"
							>
								SUBMIT RSVP & WISHES
							</button>
						</div>
					</div>
				</form>
			</div>
		{/if}
	</div>
{:else}
	<div
		class="bg-mj-sand2 min-h-screen py-[80px] px-[24px] items-center flex flex-col justify-center"
	>
		<div class="flex flex-col text-center text-white gap-3 max-w-[800px]">
			<h1 class="text-[40px] px-[20px] font-ivora">THANK YOU FOR YOUR RSVP AND WISHES!</h1>
			<p class="text-[12px] px-[32px] font-gordita">
				WE WILL CONTACT YOU FOR MORE INFORMATION AND DETAILS
			</p>
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
</style>
