<script lang="ts">
	import PrimaryButton from '$lib/components/PrimaryButton.svelte';
	import type { Dayjs } from 'dayjs';
	import dayjs from 'dayjs';
	import duration from 'dayjs/plugin/duration';
	import { onMount } from 'svelte';
	import { inview, type ObserverEventDetails } from 'svelte-inview';
	import { fade, fly } from 'svelte/transition';

	const title = 'save the date';
	const day = 'wednesday';
	// const date = '2nd of October, 2024';
	const buttonText = 'Add To Calendar';

	dayjs.extend(duration);

	let weddingDay: Dayjs = dayjs('October 2, 2024');
	let countdowns = [
		{ type: 'Month', value: 0 },
		{ type: 'Day', value: 0 },
		{ type: 'Hour', value: 0 },
		{ type: 'Minute', value: 0 }
	];
	const eventCalenderLink = 'https://calendar.app.google/oKe4F6P8PWjFqfnKA';

	onMount(() => {
		setInterval(function () {
			const currentTime = dayjs();
			const duration = dayjs.duration(weddingDay.diff(currentTime));

			countdowns = [
				{ type: 'Month', value: duration.months() },
				{ type: 'Day', value: Math.floor(duration.days()) },
				{ type: 'Hour', value: duration.hours() },
				{ type: 'Minute', value: duration.minutes() }
			];
		}, 1000);
	});

	let isShow: boolean = false;
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>): void => {
		if (!isShow && detail.inView) isShow = true;
	};
</script>

<div
	class="wrapper bg-mj-beige justify-center tracking-widest"
	use:inview={{
		rootMargin: '-100px',
		unobserveOnEnter: true
	}}
	on:inview_change={handleChange}
>
	<div
		class="self-center flex flex-col gap-16 justify-center items-center w-full min-h-screen uppercase text-center font-gordita text-mj-black px-6 py-28 container"
	>
		<!-- Ini harusnya ivyOra light (font weight: 300) -->
		{#if isShow}
			<div class="flex flex-col gap-8 items-center" in:fade={{ duration: 2000 }}>
				<p class="font-ivora text-3xl md:!text-[40px] lg:!text-5xl tracking-[0.4rem]">{title}</p>
				<div class="min-h-14 w-0 border-l border-mj-gray"></div>
				<div class="flex flex-col gap-4">
					<p class="text-xl lg:!text-2xl">
						{day}
					</p>

					<p class="text-sm md:!text-lg">
						2<sup class="lowercase">nd</sup> of October, 2024
					</p>
				</div>
			</div>
		{/if}
		<div class="grid grid-cols-2 md:flex gap-y-6 sm:gap-x-12 md:my-16">
			{#each countdowns as countdown, index}
				{#if isShow}
					<div
						class="flex flex-col gap-4 min-w-40"
						transition:fly={{ y: 200, duration: 1000, delay: 200 + 200 * (index + 1) }}
					>
						<p class="font-ivora text-3xl md:!text-[40px] lg:!text-5xl">
							{countdown.value}
						</p>
						<p class="text-xs font-light md:!text-sm lg:!text-base">{countdown.type}(s)</p>
					</div>
				{/if}
			{/each}
		</div>
		{#if isShow}
			<div in:fade={{ duration: 2000 }}>
				<a href={eventCalenderLink} target="_blank"> <PrimaryButton {buttonText} /> </a>
			</div>
		{/if}
	</div>
</div>
