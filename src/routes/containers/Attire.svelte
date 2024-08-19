<script lang="ts">
	import { inview, type ObserverEventDetails } from 'svelte-inview';
	import { fade, fly } from 'svelte/transition';

	import type { PageData } from '../$types';
	import { pb } from '$lib/pocketbase';
	export let data: PageData;

	let isShow: boolean = false;
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>): void => {
		if (!isShow && detail.inView) isShow = true;
	};
</script>

<div
	class="min-h-screen bg-mj-beige flex flex-col items-center justify-center"
	use:inview={{
		rootMargin: '-100px',
		unobserveOnEnter: true
	}}
	on:inview_change={handleChange}
>
	<div
		class=" flex flex-col lg:grid lg:grid-flow-col lg:grid-cols-10 h-full min-h-screen text-mj-black justify-evenly md:justify-center lg:gap-[100px] px-6 py-32 md:py-32 lg:py-0"
	>
		<!-- Large screen -->
		<div
			class="relative col-span-5 min-w-[480px] hidden lg:flex justify-center items-center lg:-translate-y-12 lg:translate-x-12 xl:translate-x-24"
		>
			<div>
				{#if isShow}
					<img
						class="absolute top-12 translate-y-1/4 xl:-translate-x-1/2 -translate-x-1/4 left-0 hidden lg:block scale-[60%]"
						src={pb.files.getUrl(data.main, data.main.attire1_desktop)}
						alt="1"
						transition:fly={{ x: -400, duration: 1500 }}
					/>
					<img
						class="absolute top-24 hidden lg:block scale-[60%] xl:-translate-x-1/2 -translate-x-1/4"
						src={pb.files.getUrl(data.main, data.main.attire2_desktop)}
						alt="1"
						transition:fly={{ y: -400, duration: 1500 }}
					/>
				{/if}
			</div>
		</div>
		<!-- Medium screen -->
		<div class="relative md:min-h-[400px] md:min-w-[400px] hidden md:block lg:hidden">
			{#if isShow}
				<img
					class="absolute -left-[100px] scale-[75%]"
					src={pb.files.getUrl(data.main, data.main.attire1_tablet)}
					alt="1"
					transition:fly={{ x: -400, duration: 1500 }}
				/>
				<img
					class=" absolute -right-[100px] -top-[120px] scale-[75%]"
					src={pb.files.getUrl(data.main, data.main.attire2_tablet)}
					alt="1"
					transition:fly={{ x: 400, duration: 1500 }}
				/>
			{/if}
		</div>
		<!-- Small screen -->
		<div class="relative md:hidden mt-[60px]">
			{#if isShow}
				<img
					class="z-10 absolute -top-[50px] -left-[80px] scale-[75%]"
					src={pb.files.getUrl(data.main, data.main.attire1_mobile)}
					alt="1"
					transition:fly={{ x: -400, duration: 1500 }}
				/>
				<img
					class="z-30 absolute -top-[150px] -right-[80px] scale-[75%]"
					src={pb.files.getUrl(data.main, data.main.attire2_mobile)}
					transition:fly={{ x: 400, duration: 1500 }}
					alt="1"
				/>
			{/if}
		</div>

		{#if isShow}
			<div
				class="flex flex-col items-center gap-[24px] lg:gap-[32px] mt-[400px] md:mt-0 md:pt-[100px] lg:pt-0 justify-center lg:col-span-5 xl:pl-32"
				in:fade={{ duration: 2000 }}
			>
				<p
					class="text-3xl/loose md:text-[40px]/loose lg:text-5xl/loose tracking-widest font-ivora font-light"
				>
					THE ATTIRE
				</p>
				<p class="text-base/loose tracking-wider font-gordita text-center">
					HOLY MATRIMONY & RECEPTION
				</p>
				<div class="flex gap-4 md:gap-6">
					<div
						class="size-8 md:size-10 border-[1px] border-[#7E7E7E]/50 rounded-full bg-[#C49B81]"
					></div>
					<div
						class="size-8 md:size-10 border-[1px] border-[#7E7E7E]/50 rounded-full bg-[#D8BFAB]"
					></div>
					<div
						class="size-8 md:size-10 border-[1px] border-[#7E7E7E]/50 rounded-full bg-[#FBE8D8]"
					></div>
					<div
						class="size-8 md:size-10 border-[1px] border-[#7E7E7E]/50 rounded-full bg-[#A6A58F]"
					></div>
					<div
						class="size-8 md:size-10 border-[1px] border-[#7E7E7E]/50 rounded-full bg-[#6C705F]"
					></div>
				</div>
			</div>
		{/if}
	</div>
</div>
