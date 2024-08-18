<script lang="ts">
	import divider from '$lib/assets/icons/Shape Divider.svg';
	export let name: string;
	export let location: string;
	export let time: string;
	export let condition: string;
	export let condition2: string;
	export let image: any;
	export let isLast: boolean;
</script>

<div class="flex flex-col items-center justify-center font-gordita">
	<img src={image} />
	<p class="pt-8 pb-2 tracking-wider">{name}</p>
	{#if condition}
		<p class="text-sm font-timesNewRoman">{condition}</p>
	{/if}
	{#if condition2}
		<p class="text-sm font-timesNewRoman font-italic">{condition2}</p>
	{/if}
	<p class="py-6 tracking-wider">{time}</p>
	<p class="text-xs">{location}</p>
    {#if !isLast}
	<img src={divider} class="mt-16"/>
    {/if}
</div>
