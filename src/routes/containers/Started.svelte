<script lang="ts">
	import { Marquee } from 'svelte-fast-marquee';
	import type { PageData } from '../$types';
	import { pb } from '$lib/pocketbase';
	import { inview, type ObserverEventDetails } from 'svelte-inview';
	import { fade, fly } from 'svelte/transition';
	export let data: PageData;

	let isShow: boolean = false;

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>): void => {
		if (!isShow && detail.inView) isShow = true;
	};
</script>

<div
	class="relative bg-mj-beige text-mj-black min-h-screen flex justify-center md:tracking-wider lg:tracking-[0.4rem]"
	use:inview={{
		rootMargin: '50px',
		unobserveOnEnter: true
	}}
	on:inview_change={handleChange}
>
	{#if isShow}
		<div class="px-[24px] py-[40px] max-w-[1600px] font-light" in:fade={{ duration: 2000 }}>
			<!-- font perlu diganti -->
			<p
				class="text-3xl/loose md:text-5xl xl:text-7xl uppercase !leading-[4rem] md:!leading-[5rem] xl:!leading-[6rem] font-ivora"
			>
				IT ALL <i class="lowercase">started</i> FROM a Random <i class="lowercase">hello</i> from a stranger
				12 Years ago AND THE REST IS JUST HISTORY
			</p>
		</div>
	{/if}
	{#if isShow}
		<div
			class="absolute bottom-0 flex flex-row overflow-x-scroll no-scrollbar max-h-[300px]"
			in:fly={{ x: -1000, duration: 2000, delay: 500 }}
		>
			<Marquee pauseOnHover={true} speed={50}>
				<img
					class="max-h-[300px] w-auto"
					src={pb.files.getUrl(data.main, data.main.marquee_1)}
					alt="start"
				/>
				<img
					class="max-h-[300px] w-auto"
					src={pb.files.getUrl(data.main, data.main.marquee_2)}
					alt="start"
				/>
				<img
					class="max-h-[300px] w-auto"
					src={pb.files.getUrl(data.main, data.main.marquee_3)}
					alt="start"
				/>
				<img
					class="max-h-[300px] w-auto"
					src={pb.files.getUrl(data.main, data.main.marquee_4)}
					alt="start"
				/>
				<img
					class="max-h-[300px] w-auto"
					src={pb.files.getUrl(data.main, data.main.marquee_5)}
					alt="start"
				/>
			</Marquee>
		</div>
	{/if}
</div>
