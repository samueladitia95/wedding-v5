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

<div class="flex flex-col items-center justify-center">
	<img src={image} />
	<p>{name}</p>
	{#if condition}
		<p>{condition}</p>
	{/if}
	{#if condition2}
		<p>{condition2}</p>
	{/if}
	<p>{time}</p>
	<p>{location}</p>
    {#if !isLast}
	<img src={divider} />
    {/if}
</div>
