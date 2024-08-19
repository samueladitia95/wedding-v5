<script lang="ts">
	import { inview, type ObserverEventDetails } from 'svelte-inview';
	import { fly } from 'svelte/transition';

	import WishesCard from '$lib/components/WishesCard.svelte';

	const wishes = [
		{
			name: 'Babang Ganteng',
			wish: "Congrats on your wedding! I'm so happy for both of you! See you soon in Bali!",
			created: 'Saturday, 13 May 2023 10:00'
		},
		{
			name: 'Teteh Geulis',
			wish: 'Congrats on your wedding! So happy for you! See you soon in Bali!',
			created: 'Saturday, 13 May 2023 10:00'
		},
		{
			name: 'Orang Lain',
			wish: 'Ululululuululululu',
			created: 'Saturday, 13 May 2023 10:00'
		},
		{
			name: 'Babang Ganteng2',
			wish: 'Congrats on your wedding! So happy for you! See you soon in Bali!',
			created: 'Saturday, 13 May 2023 10:00'
		},
		{
			name: 'Teteh Geulis',
			wish: 'Congrats on your wedding! So happy for you! See you soon in Bali! Congrats on your wedding! So happy for you! See you soon in Bali! Congrats on your wedding! So happy for you! See you soon in Bali!',
			created: 'Saturday, 13 May 2023 10:00'
		}
	];

	let isShow: boolean = false;
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>): void => {
		if (!isShow && detail.inView) isShow = true;
	};
</script>

<div
	class=" bg-mj-dark-sand min-h-screen w-full"
	use:inview={{
		rootMargin: '-100px',
		unobserveOnEnter: true
	}}
	on:inview_change={handleChange}
>
	<div class="px-[24px] py-[72px] text-white gap-[48px] flex flex-col max-w-[800px]">
		{#each wishes as wish, index}
			{#if isShow}
				<div transition:fly={{ x: 200, duration: 1000, delay: 200 + 200 * (index + 1) }}>
					<WishesCard name={wish.name} wish={wish.wish} created={wish.created} />
				</div>
			{/if}
		{/each}
	</div>
</div>
