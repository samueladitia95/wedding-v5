<script lang="ts">
	import Rsvp from "$lib/containers/Rsvp.svelte";
	import Attire from "$lib/containers/Attire.svelte";
	import WeddingGift from "$lib/containers/WeddingGift.svelte"
	import Started from "$lib/containers/Started.svelte";
	import Intro from "$lib/containers/Intro.svelte";
	import TogetherWith from "$lib/containers/TogetherWith.svelte";
	import Wishes from "$lib/containers/Wishes.svelte";
	// const state1: string = 'state1'; // ? state
	// let prop1: string; // ? required props
	// let prop2: string = 'prop2'; // ? props with default value
	// $: computed1 = state1 * 2 // ? computed value
</script>

<Intro/>
<Started/>
<TogetherWith/>
<div class="bg-mj-sand flex flex-col justify-center lg:flex-row">
	<Rsvp/>
	<Wishes/>
</div>
<Attire/>
<WeddingGift/>
<div class="px-[24px] py-[16px] flex text-center justify-center bg-[#594F47] text-white text-[12px]">
	<p>Website Invitation by Another Chapter</p>
</div>