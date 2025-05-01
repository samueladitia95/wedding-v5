<script lang="ts">
	import { inview, type ObserverEventDetails } from 'svelte-inview';

	export let menuItems: {
		type: string;
		subMenus: {
			name: string;
			ingredients: string;
			notes: string;
		}[];
	}[];

	let isShow = false;

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		if (!isShow && detail.inView) isShow = true;
	};
</script>

<div
	class="w-full flex flex-col items-center gap-10 xl:gap-[5rem]"
	use:inview={{ rootMargin: '-100px', unobserveOnEnter: true }}
	on:inview_change={handleChange}
>
	{#if isShow}
		<h2 class="text-white text-lg lg:text-2xl tracking-[2.88px] font-gordita font-normal uppercase">
			MENU
		</h2>

		<!-- Desktop Grid Layout (≥1280px) -->
		<div
			class="hidden [@media(min-width:1280px)]:grid grid-cols-3 gap-x-[2.5rem] gap-y-[7rem] max-w-[1440px] text-white"
		>
			{#each menuItems as item, index}
				<!-- Each item: grid with 2 columns (content + diamond) -->
				<div class="grid grid-cols-[1fr_auto] items-start gap-4 pl-12 pr-4">
					<!-- Centered content -->
					<div class="flex flex-col items-center text-center gap-6 xl:gap-8">
						<h3 class="uppercase tracking-[1.28px] font-gordita text-base font-medium">
							{item.type}
						</h3>
						{#each item.subMenus as sub}
							<div class="flex flex-col gap-1">
								<p class="font-gordita text-sm uppercase font-light tracking-[1.12px]">
									{sub.name}
								</p>
								{#if sub.ingredients}
									<p class="font-gordita font-light text-sm text-white tracking-[1.12px]">
										({sub.ingredients})
									</p>
								{/if}
								{#if sub.notes}
									<p class="tracking-wide italic font-timesNewRoman text-xs text-white mt-2">
										(*{sub.notes})
									</p>
								{/if}
							</div>
						{/each}
					</div>

					<!-- Diamond on the right, unless it's in the 3rd column or last item -->
					{#if index < menuItems.length - 1 && index % 3 !== 2}
						<div class="flex items-start pt-1 text-[0.5rem] text-white ml-1">◆</div>
					{/if}
				</div>
			{/each}
		</div>

		<!-- Mobile & Tablet Layout -->
		<div
			class="flex
			flex-col
			gap-10
			items-center
			[@media(min-width:1025px)]:hidden
			text-white
			max-w-xl
			w-full
			px-6"
		>
			{#each menuItems as item, index}
				<div class="flex flex-col items-center text-center gap-8">
					<h3 class="uppercase tracking-[1.28px] font-gordita text-base font-medium">
						{item.type}
					</h3>
					{#each item.subMenus as sub}
						<div class="flex flex-col gap-6">
							<p class="font-gordita text-sm uppercase font-light tracking-[1.12px]">{sub.name}</p>
							{#if sub.ingredients}
								<p class="font-gordita font-light text-sm text-white tracking-[1.12px]">
									({sub.ingredients})
									{#if sub.notes}
										<p class="tracking-wide italic font-timesNewRoman text-xs text-white mt-2">
											(*{sub.notes})
										</p>
									{/if}
								</p>
							{/if}
						</div>
					{/each}
				</div>

				<!-- Always show diamond between cards -->
				{#if index < menuItems.length - 1}
					<div class="flex justify-center items-center text-white text-[0.5rem]">◆</div>
				{/if}
			{/each}
		</div>
	{/if}
</div>
