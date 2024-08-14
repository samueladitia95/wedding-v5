<script lang="ts">
	import map from '$lib/assets/map.svg';
	const theVenue = "THE VENUE"
	const hotel = "MAYA UBUD RESORT"

	const address = "Jl. GN. SARI, PELIATAN KECAMATAN UBUD, KABUPATEN GIANYAR, BALI 0571"
</script>

<div class="bg-mj-medium-sand min-h-screen flex justify-center">
	<div class="px-6 py-28 flex flex-col justify-center text-center gap-10 text-white font-gordita items-center max-w-[1600px]">
		<p class="text-3xl">{theVenue}</p>
        <img src={map}/>
		<div class="flex flex-col justify-center gap-4 max-w-[350px]">
			<p>{hotel}</p>
			<p class="text-sm">{address}</p>
		</div>
		<button class="bg-white hover:bg-[#DADADA] text-mj-black px-6 py-4 text-sm rounded-[45px] text-nowrap">
			GET LOCATION
		</button>
	</div>
</div>
