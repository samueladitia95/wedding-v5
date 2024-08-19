<script lang="ts">
	import '../app.css';
	import playButton from '$lib/assets/buttons/Play-enabled.svg';
	import playButtonHovered from '$lib/assets/buttons/Play-hovered.svg';
	import pauseButton from '$lib/assets/buttons/Pause-enable.svg';
	import pauseButtonHovered from '$lib/assets/buttons/Pause-hovered.svg';
	import type { PageData } from './$types';

	export let data: PageData;

	let isPlaying = false;
	let isHovered = false;

	const togglePlay = () => {
		console.log('+_+Sdoa-osdasd');
		isPlaying = !isPlaying;
	};

	// let isShow = false;
	let player: HTMLAudioElement;
	let songUrl: string = data.song || '';
	console.log(songUrl);

	$: {
		if (player) {
			if (isPlaying) {
				player.play();
			} else {
				player.pause();
			}
		}
	}
</script>

<div>
	<slot />
	<div class="w-screen h-screen z-[1000]">
		<div class="fixed left-8 bottom-4">
			<button
				class="cursor-pointer"
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

	<audio id="music-player" src={songUrl} bind:this={player} />
</div>
