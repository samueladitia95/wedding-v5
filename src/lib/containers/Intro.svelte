<script lang="ts">
	import introImageMobile from '$lib/assets/intro-images/Intro Image - Mobile.jpg';
	import introImageTablet from '$lib/assets/intro-images/Intro Image - Tablet.jpg';
	import introImageDesktop from '$lib/assets/intro-images/Intro Image - Desktop.jpg';
	import playButton from '$lib/assets/buttons/Play-enabled.svg';
	import playButtonHovered from '$lib/assets/buttons/Play-hovered.svg';
	import pauseButton from '$lib/assets/buttons/Pause-enable.svg';
	import pauseButtonHovered from '$lib/assets/buttons/Pause-hovered.svg';
	import PlayButton from '$lib/components/PlayButton.svelte';

	const introMainText =
		'Distance is not for the fearful, it is for the bold. It’s for those who are willing to spend a lot time  alone in exchange for a little time with the one they love.';
</script>

<div class="bg-mj-black min-h-screen flex justify-center relative">
	<div class="min-h-screen flex justify-center relative max-w-[1600px]">
		<img
			class="absolute top-0 left-0 md:hidden h-screen w-screen w-auto object-cover"
			src={introImageMobile}
		/>
		<img
			class="h-screen w-screen absolute top-0 left-0 hidden md:block lg:hidden object-cover"
			src={introImageTablet}
		/>
		<img
			class="h-screen w-screen absolute top-0 left-0 hidden lg:block object-cover"
			src={introImageDesktop}
		/>
		<div class="z-20 flex flex-col justify-between py-[72px] px-[62px] md:px-[180px] lg:px-[380px]">
			<p class="text-white text-[16px] md:text-[24px] lg:text-[20px] text-center">
				#sayJESStoMARCO
			</p>
			<p class="text-white text-[16px] md:text-[20px] lg:text-[18px] text-center">
				{introMainText}
			</p>
			<div class="relative">
				<div class="absolute -left-10 md:-left-32 lg:-left-80 -top-2">
					<PlayButton />
				</div>
			</div>
		</div>
	</div>
</div>
