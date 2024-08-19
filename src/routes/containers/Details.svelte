<script lang="ts">
	import { inview, type ObserverEventDetails } from 'svelte-inview';
	import { fade, fly } from 'svelte/transition';

	const title = 'THE DETAILS';

	import teaPot from '$lib/assets/icons/Teapai Icon.svg';
	import holyMatrimony from '$lib/assets/icons/Holy Matrimony Icon.svg';
	import cocktail from '$lib/assets/icons/Cocktail Icon.svg';
	import reception from '$lib/assets/icons/Reception Icon.svg';
	import DetailsCard from '$lib/components/DetailsCard.svelte';

	const items = [
		{
			image: teaPot,
			name: 'TEA PAI CEREMONY',
			condition: '(Family Only)',
			time: '12:00 PM (WITA)',
			location: 'THE LOUNGE, MAYA UBUD'
		},
		{
			image: holyMatrimony,
			name: 'HOLY MATRIMONY',
			condition: '(Guests are to be seated by 15:30 PM)',
			condition2: 'p.s: Children under 5 is not allowed',
			time: '16:00 PM (WITA)',
			location: 'CEREMONIAL PLAZA, MAYA UBUD'
		},
		{
			image: cocktail,
			name: 'SUNSET COCKTAIL',
			time: '17:00 PM (WITA)',
			location: 'MAYASARI GARDEN, MAYA UBUD'
		},
		{
			image: reception,
			name: 'RECEPTION',
			condition: '(Family & Friends)',
			time: '18:30 PM (WITA)',
			location: 'THE AMPHITHEATRE, MAYA UBUD'
		}
	];

	let isShow: boolean = false;
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>): void => {
		if (!isShow && detail.inView) isShow = true;
	};
</script>

<div
	class="bg-mj-dark-brown min-h-screen flex justify-center py-28"
	use:inview={{
		rootMargin: '-100px',
		unobserveOnEnter: true
	}}
	on:inview_change={handleChange}
>
	<div class="px-6 flex flex-col gap-10 justify-center items-center text-white container">
		{#if isShow}
			<p
				in:fade={{ duration: 2000 }}
				class="text-3xl md:text-[40px] tracking-widest font-ivora font-light"
			>
				{title}
			</p>
		{/if}
		<div class="flex flex-col gap-16 w-full items-center">
			{#each items as item, index}
				{#if isShow}
					<div transition:fly={{ x: -400, duration: 1000, delay: 1000 + 500 * (index + 1) }}>
						<DetailsCard
							name={item.name}
							condition={item.condition}
							condition2={item.condition2}
							time={item.time}
							location={item.location}
							image={item.image}
							isLast={index === items.length - 1}
						/>
					</div>
				{/if}
			{/each}
		</div>
	</div>
</div>
