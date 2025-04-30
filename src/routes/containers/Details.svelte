<script lang="ts">
	import { inview, type ObserverEventDetails } from 'svelte-inview';
	import { fade, fly } from 'svelte/transition';
	import MenuSection from '$lib/components/MenuSection.svelte';

	const title = 'THE DETAILS';

	import teaPot from '$lib/assets/icons/Teapai Icon.svg';
	import holyMatrimony from '$lib/assets/icons/Holy Matrimony Icon.svg';
	import cocktail from '$lib/assets/icons/Cocktail Icon.svg';
	import reception from '$lib/assets/icons/Reception Icon.svg';
	import DetailsCard from '$lib/components/DetailsCard.svelte';

	const items = [
		{
			image: reception,
			name: 'INTIMATE LUNCH',
			condition: '',
			condition2: '',
			time: '12:00 PM (SGT)',
			location: `1300 EAST COAST PARKWAY,<br />
						EAST COAST PARK AREA F, SINGAPORE 468996.<br />
						(SEAFRONT ALFRESCO)`
		}
	];

	const menuItems = [
		{
			type: 'FOCACCINA',
			subMenus: [
				{
					name: 'SAN MARZANO TOMATOES',
					ingredients: 'BUFFALA MOZZARELLA, BASIL, EVOO',
					notes: ''
				}
			]
		},
		{
			type: 'SMALL PLATE',
			subMenus: [
				{
					name: 'BURATA DI PUGLIA',
					ingredients: 'ESCAROLE, PINE NUTS, OLIVES',
					notes: ''
				}
			]
		},
		{
			type: 'MAIN',
			subMenus: [
				{
					name: 'PORK LOIN',
					ingredients: 'RADICCHIO, ROSEMARY, EMULSION',
					notes: 'Non-Halal'
				}
			]
		},
		{
			type: 'SIDE & SALAD',
			subMenus: [
				{
					name: 'TOMATO SALAD, OREGANO, EVOO',
					ingredients: '',
					notes: 'Vegetarian'
				}
			]
		},
		{
			type: 'PASTA',
			subMenus: [
				{
					name: 'DENTI DEL DRAGO',
					ingredients: 'OCTOPUS RAGU',
					notes: ''
				},
				{
					name: 'SPHAGETTI',
					ingredients: 'CACIO E PEPE',
					notes: 'Vegetarian'
				},
				{
					name: 'ORECCHIETTE',
					ingredients: 'CIME DI RAPA, ANCHOVIES, TOMATOES, EVOO',
					notes: ''
				}
			]
		},
		{
			type: 'DESSERT',
			subMenus: [
				{
					name: 'BURRATA GELATO',
					ingredients: 'STRAWBERRY & TOMATO JAM, EVOO',
					notes: ''
				}
			]
		}
	];

	let isShow: boolean = false;
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>): void => {
		if (!isShow && detail.inView) isShow = true;
	};
</script>

<div
	class="bg-mj-dark-brown min-h-screen flex flex-col items-center py-28"
	use:inview={{
		rootMargin: '-100px',
		unobserveOnEnter: true
	}}
	on:inview_change={handleChange}
>
	<!-- Section: Title + Cards -->
	<div
		class="w-full max-w-[960px] px-6 flex flex-col gap-10 justify-center items-center text-white"
	>
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
	<!-- Section: Menu -->
	<div class="flex justify-center items-center text-white text-lg mt-10 xl:mt-14 text-[0.5rem]">
		◆
	</div>
	<div class="mt-10 xl:mt-14 w-full flex justify-center">
		<MenuSection {menuItems} />
	</div>
</div>
