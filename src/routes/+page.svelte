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
</script>

{#if !isInvitationOpened}
	<LetterOpener {openInvitation} />
{/if}
{#if isInvitationOpened}
	<Intro {data} />
	<Started {data}/>
	<TogetherWith {data} />
	<SaveTheDate />
	<Map {data} />
	<Details />
	<TravelGuide {data} />
	<div class="lg:hidden">
		<Rsvp />
		<Wishes />
	</div>
	<div class="bg-mj-sand hidden lg:flex lg:flex-row justify-center w-full">
		<div class="flex flex-row xl:min-w-[1440px] max-w-[1600px]">
			<Rsvp />
			<Wishes />
		</div>
	</div>
	<Attire {data}/>
	<QnA {data} />
	<WeddingGift {data} />
	<div
		class="px-[24px] py-[16px] flex text-center justify-center bg-[#594F47] text-white text-[12px]"
	>
		<p>Website Invitation by Another Chapter</p>
	</div>
{/if}
