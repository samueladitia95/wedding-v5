<script lang="ts">
	import PrimaryButton  from '$lib/components/PrimaryButton.svelte';
	import { onMount } from 'svelte';

	const title = 'save the date';
	const day = 'wednesday';
	const date = '2nd of October, 2024';
    const buttonText = "Add To Calendar"

	let months = 0;
	let days = 0;
	let hours = 0;
	let minutes = 0;

	const targetDate = new Date('October 2, 2024 00:00:00').getTime();

	function updateCountdown() {
		const now = new Date().getTime();
		const distance = targetDate - now;

		if (distance < 0) {
			clearInterval(countdownInterval);
			return;
		}

		const totalDays = Math.floor(distance / (1000 * 60 * 60 * 24));
		months = Math.floor(totalDays / 30);
		days = totalDays % 30;

		hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	}

	let countdownInterval;
	onMount(() => {
		updateCountdown();
		countdownInterval = setInterval(updateCountdown, 60000);
	});
</script>

<div class="wrapper bg-mj-beige justify-center tracking-widest">
	<!-- butuh font light -->
	<div
		class="!max-w-[1600px] self-center flex flex-col gap-16 justify-center items-center w-full min-h-screen uppercase text-center font-gordita text-mj-black px-6 py-28"
	>
		<!-- Ini harusnya ivyOra light (font weight: 300) -->
		<div class="flex flex-col gap-8 items-center">
			<p class="font-timesNewRoman text-3xl tracking-[0.4rem]">{title}</p>
			<div class="min-h-14 w-0 border-l border-mj-gray"></div>
			<div class="flex flex-col gap-4">
				<p class="text-xl">
					{day}
				</p>

				<p class="text-sm">
					2<sup class="lowercase">nd</sup> of October, 2024
				</p>
			</div>
		</div>
		<div class="grid grid-cols-2 md:flex gap-y-6 sm:gap-x-12">
			<div class="flex flex-col gap-4 min-w-40">
				<p class="text-3xl">{months}</p>
				<p class="text-xs">Month(s)</p>
			</div>
			<div class="flex flex-col gap-4 min-w-40">
				<p class="text-3xl">{days}</p>
				<p class="text-xs">day(s)</p>
			</div>
			<div class="flex flex-col gap-4 min-w-40">
				<p class="text-3xl">{hours}</p>
				<p class="text-xs">Hour(s)</p>
			</div>
			<div class="flex flex-col gap-4 min-w-40">
				<p class="text-3xl">{minutes}</p>
				<p class="text-xs">minute(s)</p>
			</div>
		</div>
		<div>
			<PrimaryButton buttonText={buttonText}  />
		</div>
	</div>
</div>
