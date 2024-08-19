<script lang="ts">
	import { inview, type ObserverEventDetails } from 'svelte-inview';
	import { fade } from 'svelte/transition';

	import GetLocationButton from '$lib/components/GetLocationButton.svelte';
	import type { PageData } from '../$types';
	import { pb } from '$lib/pocketbase';
	const theVenue = 'THE VENUE';
	const hotel = 'MAYA UBUD RESORT';

	const address = 'Jl. GN. SARI, PELIATAN KECAMATAN UBUD, KABUPATEN GIANYAR, BALI 0571';
	export let data: PageData;

	let isShow: boolean = false;
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>): void => {
		if (!isShow && detail.inView) isShow = true;
	};
</script>

<div
	class="bg-mj-medium-sand min-h-screen flex justify-center"
	use:inview={{
		rootMargin: '-100px',
		unobserveOnEnter: true
	}}
	on:inview_change={handleChange}
>
	{#if isShow}
		<div
			class="px-6 py-28 flex flex-col justify-center text-center gap-10 text-white font-ivora items-center max-w-[1600px]"
			in:fade={{ duration: 2000 }}
		>
			<p class="text-3xl md:!text-[40px] tracking-widest font-ivora font-light">{theVenue}</p>
			<img src={pb.files.getUrl(data.main, data.main.main_map)} alt="map" />
			<div class="flex flex-col justify-center gap-4 max-w-[350px] font-gordita">
				<p class="tracking-widest md:!text-lg">{hotel}</p>
				<p class="text-xs/loose tracking-wider md:!text-base/loose">{address}</p>
			</div>
			<GetLocationButton location="https://maps.app.goo.gl/YRM7ZgejsRxvkfrv9" />
		</div>
	{/if}
</div>
