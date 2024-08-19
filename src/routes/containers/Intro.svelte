<script lang="ts">
	import PlayButton from '$lib/components/PlayButton.svelte';
	import type { PageData } from '../$types';
	import { pb } from '$lib/pocketbase';
	export let data: PageData;
	import { onMount } from 'svelte';

	let isLoading = true;
	onMount(() => {
		setTimeout(() => {
			isLoading = false;
		}, 1200); // 2 seconds delay
	});
	const introLoadingText1 = 'The Wedding Of';
	const introLoadingText2 = 'Marco & Jessica';

	const introMainText =
		'Distance is not for the fearful, it is for the bold. It’s for those who are willing to spend a lot time  alone in exchange for a little time with the one they love.';
</script>

<div class="bg-mj-black min-h-screen flex justify-center relative">
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
			class="z-20 w-screen flex flex-col justify-between py-[72px] px-[62px] md:px-44 xl:px-96 font-aboreto leading-loose"
		>
			<p class="text-white text-[16px] md:text-[24px] lg:text-[20px] text-center">
				{#if !isLoading}
					#sayJESStoMARCO
				{/if}
			</p>
			<div
				class="text-white text-base/relaxed tracking-widest md:text-xl/relaxed lg:text-lg/relaxed text-center"
			>
				{#if isLoading}
					<p class="pb-">
						{introLoadingText1}
					</p>
					<p>
						{introLoadingText2}
					</p>
				{/if}
				{#if !isLoading}
					<div class="font-ivora">
						{introMainText}
					</div>
				{/if}
			</div>
			<div class="relative">
				<div class="absolute -left-10 md:-left-32 xl:-left-80 -top-2">
					<PlayButton />
				</div>
			</div>
		</div>
	</div>
</div>
