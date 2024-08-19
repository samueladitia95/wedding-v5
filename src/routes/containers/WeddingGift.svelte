<script lang="ts">
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
</script>

<div
	class="background-div min-h-screen flex flex-col justify-center items-center"
	style={`background-image: url(${backgroundUrl});`}
>
	<div class="text-white text-center px-[24px]font-gordita tracking-wider">
		<p class="text-[32px] font-aboreto tracking-widest">WEDDING GIFT</p>
		<p
			class="text-[12px] leading-loose pt-[32px] pb-[50px] px-[12px] max-w-[380px] lg:max-w-[530px]"
		>
			WE REQUIRE ONLY YOUR PRESENCE, BUT IF YOU FEEL SO MOVED TO GIVE US A GIFT, WE WOULD BE VERY
			GRATEFUL!
		</p>
		<p class="text-[20px] pb-[16px] tracking-widest">JESSICA</p>
		<p class="text-[16px]">BCA 3431121288</p>
	</div>
</div>

<style>
	.background-div {
		background-size: cover;
		background-position: center;
	}
</style>
