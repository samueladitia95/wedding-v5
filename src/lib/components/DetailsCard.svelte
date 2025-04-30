<script lang="ts">
	import divider from '$lib/assets/icons/Shape Divider.svg';
	import GetLocationButton from '$lib/components/GetLocationButton.svelte';
	export let name: string;
	export let location: string;
	export let time: string;
	export let condition: string | undefined;
	export let condition2: string | undefined;
	export let image: any;
	export let isLast: boolean;
</script>

<div class="flex flex-col gap-8 w-full items-center justify-center">
	{#if image === null}
		<br />
	{:else}
		<img src={image} alt="satu" class="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32" />
	{/if}
	<div class="flex flex-col gap-6 w-full items-center">
		<p class="tracking-widest font-gordita md:text-lg">{name}</p>
		{#if condition}
			<div class="flex flex-col gap-2 italic text-center">
				<p class="text-sm font-timesNewRoman">{condition}</p>
				{#if condition2}
					<p class="text-sm font-timesNewRoman">{condition2}</p>
				{/if}
			</div>
		{/if}
		<p class="tracking-widest font-gordita md:text-lg">{time}</p>
		<p
			class="text-white text-center font-gordita text-base font-normal leading-10 tracking-[1.28px]"
		>
			{@html location}
		</p>
		<!-- <p class="text-xs md:text-base tracking-widest">{location}</p> -->
		{#if !isLast}
			<img src={divider} class="mt-16" alt="dua" />
		{/if}
	</div>
	{#if location}
		<div>
			<GetLocationButton location="https://maps.app.goo.gl/csLbUhwxyJJba2pQ7" />
		</div>
	{/if}
</div>
