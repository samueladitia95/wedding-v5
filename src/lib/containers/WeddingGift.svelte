<script lang="ts">
	import { onMount } from 'svelte';
	import bgMobile from '$lib/assets/gift-mobile.jpg';
	import bgTablet from '$lib/assets/gift-tablet.jpg';
	import bgDesktop from '$lib/assets/gift-desktop.jpg';

	let backgroundUrl = bgMobile;

	function updateBackground() {
		const width = window.innerWidth;

		if (width >= 1024) {
			backgroundUrl = bgDesktop;
		} else if (width >= 768) {
			backgroundUrl = bgTablet;
		} else {
			backgroundUrl = bgMobile;
		}
	}

	onMount(() => {
		updateBackground();background
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
	<div class="text-white text-center px-[24px]">
		<p class="text-[32px]">WEDDING GIFT</p>
		<p class="text-[12px] leading-[24px] pt-[32px] pb-[50px] px-[12px] max-w-[380px] lg:max-w-[530px]">
			WE REQUIRE ONLY YOUR PRESENCE, BUT IF YOU FEEL SO MOVED TO GIVE US A GIFT, WE WOULD BE VERY
			GRATEFUL!
		</p>
        <p class="text-[20px] pb-[16px]">JESSICA</p>
        <p class="text-[16px]">BCA 3431121288</p>
	</div>
</div>

<style>
	.background-div {
		background-size: cover;
		background-position: center;
	}
</style>
