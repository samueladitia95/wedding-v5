<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

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
	import QnA from './containers/QnA.svelte';
	import SaveTheDate from './containers/SaveTheDate.svelte';

	import type { PageData } from './$types';

	import playButton from '$lib/assets/buttons/Play-enabled.svg';
	import playButtonHovered from '$lib/assets/buttons/Play-hovered.svg';
	import pauseButton from '$lib/assets/buttons/Pause-enable.svg';
	import pauseButtonHovered from '$lib/assets/buttons/Pause-hovered.svg';

	export let data: PageData;

	let isInvitationOpened = false;
	let player: HTMLAudioElement;
	let songUrl: string = data.song || '';
	let isPlaying = false;
	let isHovered = false;

	const openInvitation = () => {
		isInvitationOpened = true;
		isPlaying = true;
		document.body.classList.remove('overflow-hidden');
	};

	const togglePlay = () => {
		isPlaying = !isPlaying;
	};

	$: {
		if (player) {
			if (isPlaying) {
				player.play();
			} else {
				player.pause();
			}
		}
	}

	onMount(() => {
		document.body.classList.add('no-scrollbar');
		document.body.classList.add('overflow-hidden');
		window.scrollTo(0, 0);
	});
</script>

<Intro {data} {isInvitationOpened} {openInvitation} />
<Started {data} />
<TogetherWith {data} />
<SaveTheDate />
<Map {data} />
<Details />
<TravelGuide {data} />
<Attire {data} />
<QnA {data} />
<div class="lg:hidden">
	<Rsvp />
	<Wishes {data} />
</div>
<div class="bg-mj-sand hidden lg:flex lg:flex-row justify-center w-full">
	<div class="grid grid-cols-2 w-full xl:min-w-[1440px]">
		<div class="bg-mj-sand2 flex flex-row justify-end pl-8">
			<Rsvp />
		</div>
		<div class="bg-mj-dark-sand flex justify-center pr-8">
			<Wishes {data} />
		</div>
	</div>
</div>
<WeddingGift {data} />
<div
	class="px-[24px] py-[16px] flex text-center justify-center bg-[#594F47] text-white text-[12px]"
>
	<p>Website Invitation by Another Chapter</p>
</div>

{#if isInvitationOpened}
	<div class="z-[1000]" in:fade={{ duration: 2000 }}>
		<div class="fixed left-8 bottom-4 z-[1000]">
			<button
				class="cursor-pointer z-[1000]"
				on:click={togglePlay}
				on:mouseenter={() => (isHovered = true)}
				on:mouseleave={() => (isHovered = false)}
			>
				<img
					src={isPlaying
						? isHovered
							? pauseButtonHovered
							: pauseButton
						: isHovered
							? playButtonHovered
							: playButton}
					alt="Media Button"
				/>
			</button>
		</div>
	</div>
{/if}

<audio id="music-player" src={songUrl} bind:this={player} />
