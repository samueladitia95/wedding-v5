<script lang="ts">
	import Rsvp from "./containers/Rsvp.svelte";
	import Attire from "./containers/Attire.svelte";
	import WeddingGift from "./containers/WeddingGift.svelte"
	import Started from "./containers/Started.svelte";
	import Intro from "./containers/Intro.svelte";
	import TogetherWith from "./containers/TogetherWith.svelte";
	import Wishes from "./containers/Wishes.svelte";
	import Map from "./containers/Map.svelte";
	import Details from "./containers/Details.svelte";
	import type { PageData } from "./$types";
	// const state1: string = 'state1'; // ? state
	// let prop1: string; // ? required props
	// let prop2: string = 'prop2'; // ? props with default value
	// $: computed1 = state1 * 2 // ? computed value
	export let data:PageData
</script>

<Intro data={data}/>
<Started/>
<TogetherWith/>
<Map/>
<Details/>
<div class="bg-mj-sand flex flex-col justify-center lg:flex-row">
	<Rsvp/>
	<Wishes/>
</div>
<Attire/>
<WeddingGift/>
<div class="px-[24px] py-[16px] flex text-center justify-center bg-[#594F47] text-white text-[12px]">
	<p>Website Invitation by Another Chapter</p>
</div>