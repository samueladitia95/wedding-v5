<script lang="ts">
	import type { PageData } from '../$types';
	import { pb } from '$lib/pocketbase';
	export let data: PageData;
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import PrimaryButton from '$lib/components/PrimaryButton.svelte';

	let isLoading = true;
	export let isInvitationOpened: boolean;

	$: {
		if (isInvitationOpened) {
			setTimeout(() => {
				isLoading = false;
			}, 2000); // 2 seconds delay
		}
	}
	const introLoadingText1 = 'The Wedding Of';
	const introLoadingText2 = 'Marco & Jessica';

	const introMainText =
		'Distance is not for the fearful, it is for the bold. It’s for those who are willing to spend a lot time  alone in exchange for a little time with the one they love.';

	import logo from '$lib/assets/MJ Logo.svg';
	export let openInvitation: () => void;
</script>

<div class="bg-mj-beige min-h-screen">
	{#if isInvitationOpened}
		<div class="flex justify-center relative" in:fade={{ duration: 2000, delay: 2000 }}>
			<div class="min-h-screen flex justify-center relative">
				<img
					class="absolute top-0 left-0 md:hidden h-screen w-screen object-cover"
					src={pb.files.getUrl(data.main, data.main.main_image_mobile)}
					alt="1"
				/>
				<img
					class="h-screen w-screen absolute top-0 left-0 hidden md:block lg:hidden object-cover"
					src={pb.files.getUrl(data.main, data.main.main_image_tablet)}
					alt="tablet-img"
				/>
				<img
					class="h-screen w-screen absolute top-0 left-0 hidden lg:block object-cover"
					src={pb.files.getUrl(data.main, data.main.main_image_desktop)}
					alt="desktop-img"
				/>
				<div
					class="z-20 w-screen flex flex-col justify-between py-[72px] px-[62px] md:px-44 xl:px-96 font-ivora leading-loose"
				>
					{#if !isLoading}
						<p
							class="text-white text-[16px] md:text-[24px] lg:text-[20px] text-center"
							in:fade={{ duration: 2000, delay: 2000 }}
						>
							#sayJESStoMARCO
						</p>
					{/if}
					<div
						class="text-white text-base/relaxed tracking-widest md:text-xl/relaxed lg:text-lg/relaxed text-center"
					>
						{#if isLoading}
							<p class="font-aboreto" out:fade={{ duration: 1000, delay: 1000 }}>
								{introLoadingText1}
							</p>
							<br />
							<p class="font-ivora" out:fade={{ duration: 1000, delay: 1000 }}>
								{introLoadingText2}
							</p>
						{/if}
						{#if !isLoading}
							<div class="font-ivora" in:fade={{ duration: 2000, delay: 2000 }}>
								{introMainText}
							</div>
						{/if}
					</div>
					<div class="relative">
						<div class="absolute -left-10 md:-left-32 xl:-left-80 -top-2" />
					</div>
				</div>
			</div>
		</div>
	{:else}
		<div
			class="min-h-screen flex flex-col justify-evenly items-center w-full"
			out:fade={{ duration: 2000 }}
		>
			<div></div>
			<img src={logo} alt="logo" />
			<button on:click={openInvitation}>
				<PrimaryButton buttonText={'open invitation'} />
			</button>
		</div>
	{/if}
</div>
