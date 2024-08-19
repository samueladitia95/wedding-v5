<script lang="ts">
	import { inview, type ObserverEventDetails } from 'svelte-inview';
	import { fade } from 'svelte/transition';

	import type { PageData } from '../$types';
	import { pb } from '$lib/pocketbase';
	export let data: PageData;
	import { onMount } from 'svelte';

	let backgroundUrl = pb.files.getUrl(data.main, data.main.wedding_gift_mobile);

	function updateBackground() {
		const width = window.innerWidth;

		if (width >= 1024) {
			backgroundUrl = pb.files.getUrl(data.main, data.main.wedding_gift_desktop);
		} else if (width >= 768) {
			backgroundUrl = pb.files.getUrl(data.main, data.main.wedding_gift_tablet);
		} else {
			backgroundUrl = pb.files.getUrl(data.main, data.main.wedding_gift_mobile);
		}
	}

	onMount(() => {
		updateBackground();
		window.addEventListener('resize', updateBackground);

		return () => {
			window.removeEventListener('resize', updateBackground);
		};
	});

	let isShow: boolean = false;
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>): void => {
		if (!isShow && detail.inView) isShow = true;
	};
</script>

<div
	class="min-h-screen flex flex-col justify-center items-center bg-cover bg-center"
	style={`background-image: url(${backgroundUrl});`}
	use:inview={{
		rootMargin: '-100px',
		unobserveOnEnter: true
	}}
	on:inview_change={handleChange}
>
	{#if isShow}
		<div
			class="text-white text-center px-[24px] tracking-wider"
			in:fade={{ duration: 1000 }}
		>
			<p class="text-3xl/loose md:text-[40px]/loose font-ivora tracking-widest md:tracking-[0.2em]">WEDDING GIFT</p>
			<p
				class="font-gordita text-xs/6 md:text-sm/10 pt-8 pb-12 px-3 max-w-[380px] md:max-w-[530px] tracking-widest"
			>
				WE REQUIRE ONLY YOUR PRESENCE, BUT IF YOU FEEL SO MOVED TO GIVE US A GIFT, WE WOULD BE VERY
				GRATEFUL!
			</p>
			<p class="font-gordita text-xl/loose pb-4 tracking-widest">JESSICA</p>
			<p class="font-gordita text-base/loose">BCA 3431121288</p>
		</div>
	{/if}
</div>
