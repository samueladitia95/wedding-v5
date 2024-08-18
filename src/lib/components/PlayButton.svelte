<!-- src/components/MediaButton.svelte -->
<script>
	import playButton from '$lib/assets/buttons/Play-enabled.svg';
	import playButtonHovered from '$lib/assets/buttons/Play-hovered.svg';
	import pauseButton from '$lib/assets/buttons/Pause-enable.svg';
	import pauseButtonHovered from '$lib/assets/buttons/Pause-hovered.svg';

	let isPlaying = false;
	let isHovered = false;

	const togglePlay = () => {
		isPlaying = !isPlaying;
	};
</script>

<button
	class="button"
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
