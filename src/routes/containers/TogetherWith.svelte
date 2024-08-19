<script lang="ts">
	import { inview, type ObserverEventDetails } from 'svelte-inview';
	import { fade, fly } from 'svelte/transition';

	import type { PageData } from '../$types';
	import { pb } from '$lib/pocketbase';
	export let data: PageData;
	const togetherWith = 'Together with their loving families';
	const groom = 'Hendro Marco';
	const groomFamily = 'SON OF THOMAS ALLIANTO (+) & HUANG CHIN CHIN';
	const bride = 'JESSICA TEGUH';
	const brideFamily = 'DAUGHTER OF JIMMY TEGUH & ROYANI TAIB';
	const invite = 'INVITE YOU TO THEIR WEDDING';

	let isShow: boolean = false;

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>): void => {
		if (!isShow && detail.inView) isShow = true;
	};
</script>

<div
	class="bg-mj-black wrapper tracking-widest"
	use:inview={{
		rootMargin: '-100px',
		unobserveOnEnter: true
	}}
	on:inview_change={handleChange}
>
	<!-- SMALL MEDIUM DISPLAY -->
	<div
		class="min-h-screen px-6 py-28 flex flex-col text-white text-center justify-center w-full gap-10 uppercase lg:hidden max-w-[1600px]"
	>
		{#if isShow}
			<p
				class="text-sm md:text-base px-[70px] md:px-60 lg:px-72 font-gordita leading-loose"
				in:fade={{ duration: 2000 }}
			>
				{togetherWith}
			</p>
		{/if}

		{#if isShow}
			<div
				class="flex items-center justify-center rounded-full"
				in:fade={{ duration: 2000, delay: 500 }}
			>
				<img
					class="h-[300px] rounded-[150px]"
					src={pb.files.getUrl(data.main, data.main.together_mobile)}
					alt="inv"
				/>
			</div>
		{/if}

		<div class="flex flex-col gap-6">
			{#if isShow}
				<div
					class="flex flex-col gap-6 font-ivora"
					in:fly={{ x: -1000, duration: 2000, delay: 1000 }}
				>
					<p class="text-3xl md:text-[40px]">{groom}</p>
					<p class="text-xs md:text-base">{groomFamily}</p>
				</div>
			{/if}

			{#if isShow}
				<p
					in:fly={{ x: -1000, duration: 2000, delay: 1500 }}
					class="text-[32px] md:text-[40px] font-ivora"
				>
					&
				</p>
			{/if}

			{#if isShow}
				<div
					class="flex flex-col gap-6 font-ivora"
					in:fly={{ x: -1000, duration: 2000, delay: 2000 }}
				>
					<p class="text-[32px] md:text-[40px]">
						{bride}
					</p>
					<p class="text-xs md:text-base">{brideFamily}</p>
				</div>
			{/if}
		</div>

		{#if isShow}
			<p in:fade={{ duration: 2000, delay: 2500 }} class="text-xs md:text-sm md:mt-14">{invite}</p>
		{/if}
	</div>

	<!-- LARGE DISPLAY -->
	<div
		class="h-screen
			px-[24px]
			py-[112px]
			flex-col
			text-white
			text-center
			justify-center
			gap-[96px]
			uppercase
			hidden
			lg:flex
			w-screen"
	>
		{#if isShow}
			<p
				class="text-base max-w-[300px] self-center font-gordita tracking-[0.3em] leading-9 text-center"
				in:fade={{ duration: 2000 }}
			>
				{togetherWith}
			</p>
		{/if}

		<div class="grid grid-flow-col grid-cols-10 items-center xl:px-24 gap-6">
			{#if isShow}
				<div
					class="flex flex-col gap-5 col-span-4"
					in:fly={{ x: -1000, duration: 2000, delay: 500 }}
				>
					<p class="text-4xl font-ivora font-light tracking-widest">{groom}</p>
					<p class="text-sm font-gordita tracking-widest">{groomFamily}</p>
				</div>
			{/if}
			{#if isShow}
				<div
					class="flex items-center justify-center col-span-2"
					in:fade={{ duration: 2000, delay: 500 }}
				>
					<img
						class="h-[435px] max-w-[300px] rounded-[150px] object-cover"
						src={pb.files.getUrl(data.main, data.main.together_desktop)}
						alt="together"
					/>
				</div>
			{/if}
			{#if isShow}
				<div
					class="flex flex-col gap-[20px] col-span-4"
					in:fly={{ x: 1000, duration: 2000, delay: 500 }}
				>
					<p class="text-[40px] font-ivora font-light">
						{bride}
					</p>
					<p class="text-sm font-gordita">{brideFamily}</p>
				</div>
			{/if}
		</div>

		{#if isShow}
			<p in:fade={{ duration: 2000, delay: 1000 }} class="font-gordita">{invite}</p>
		{/if}
	</div>
</div>
