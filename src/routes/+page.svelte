<script lang="ts">
	import LetterOpener from './containers/letterOpener.svelte';
	import Rsvp from './containers/Rsvp.svelte';
	import Attire from './containers/Attire.svelte';
	import WeddingGift from './containers/WeddingGift.svelte';
	import Started from './containers/Started.svelte';
	import Intro from './containers/Intro.svelte';
	import TogetherWith from './containers/TogetherWith.svelte';
	import Wishes from './containers/Wishes.svelte';
	import Map from './containers/Map.svelte';
	import Details from './containers/Details.svelte';
	import TravelGuide from './containers/TravelGuide.svelte';
	import type { PageData } from './$types';
	import QnA from './containers/QnA.svelte';
	import SaveTheDate from './containers/SaveTheDate.svelte';
	import { onMount } from 'svelte';
	// const state1: string = 'state1'; // ? state
	// let prop1: string; // ? required props
	// let prop2: string = 'prop2'; // ? props with default value
	// $: computed1 = state1 * 2 // ? computed value

	let isInvitationOpened = true;
	const openInvitation = () => {
		console.log('masuk kok');
		isInvitationOpened = true;
	};
	export let data: PageData;

	onMount(() => {
		document.body.classList.add('no-scrollbar');
	});
</script>

{#if !isInvitationOpened}
	<LetterOpener {openInvitation} />
{/if}
{#if isInvitationOpened}
	<Intro {data} />
	<Started {data} />
	<TogetherWith {data} />
	<SaveTheDate />
	<Map {data} />
	<Details />
	<Attire {data} />
	<QnA {data} />
	<TravelGuide {data} />
	<div class="lg:hidden">
		<Rsvp />
		<Wishes />
	</div>
	<div class="bg-mj-sand hidden lg:flex lg:flex-row justify-center w-full">
		<div class="grid grid-cols-2 w-full xl:min-w-[1440px]">
			<div class="bg-mj-sand2 flex flex-row justify-end pl-8">
				<Rsvp />
			</div>
			<div class="bg-mj-dark-sand flex justify-center pr-8">
				<Wishes />
			</div>
		</div>
	</div>
	<WeddingGift {data} />
	<div
		class="px-[24px] py-[16px] flex text-center justify-center bg-[#594F47] text-white text-[12px]"
	>
		<p>Website Invitation by Another Chapter</p>
	</div>
{/if}
