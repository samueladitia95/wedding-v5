<script lang="ts">
	import type { PageData } from '../$types';
	import { pb } from '$lib/pocketbase';
	export let data: PageData;

	import flightIcon from '$lib/assets/icons/Flight Icon.svg';
	import hotelIcon from '$lib/assets/icons/Hotel Room Icon.svg';
	import TravelGuideCard from '$lib/components/TravelGuideCard.svelte';
	import GetLocationButton from '$lib/components/GetLocationButton.svelte';
    import divider from "$lib/assets/icons/Shape Divider.svg"
    import shuttleIcon from "$lib/assets/icons/Shuttle Icon.svg"

	const guides = [
		{
			image: flightIcon,
			name: 'GETTING THERE',
			detail: 'We encourage you to book your own flight ticket to Denpasar, Bali'
		},
		{
			image: hotelIcon,
			name: 'COMPLIMENTARY ACCOMODATION',
			detail:
				'THE GARCIA UBUD\n\nFamily : 2 NIGHTs (OCTOBER 1 - OCTOBER 3, 2024)\nFriends : 1 Night (October 2 - October 3, 2024)\n*Breakfast included',
			conditional1: 'family & friends',
            conditional2: "family",
            detail2:
				'Maya Ubud\n2 NIGHTs (OCTOBER 1 - OCTOBER 3, 2024)\n*Breakfast included',
		},
        {
            image: shuttleIcon,
            name: "COMPLIMENTARY SHUTTLE",
            conditional: "Tea Pai - 11:00 AM",
            detail: "THE GARCIA UBUD - MAYA UBUD - THE GARCIA UBUD\n\n(PLEASE BE READY AT THE HOTEL LOBBY BY 11:00 AM (WITA), OUR WEDDING ASSISTANT WILL GUIDE YOU)"
        }
	];
</script>

<div class="wrapper relative overflow-hidden">
	<img
		src={pb.files.getUrl(data.main, data.main.travel_guide_mobile)}
		class="absolute left-0 top-0"
	/>
	<div
		class="flex flex-col px-6 py-16 z-20 text-white font-gordita text-center w-full justify-center gap-14"
	>
		<div>
			<p class="pb-6 text-3xl font-timesNewRoman">TRAVEL GUIDE</p>
			<p class="text-xs">FOR OUTSIDE BALI ONLY</p>
		</div>
		<div class="flex flex-col gap-14">
			<!-- {#each guides as item, index}
            <TravelGuideCard name={item.name} detail={item.detail} image={item.image} index={index} />
            {/each} -->
			<div class="flex flex-col justify-center items-center uppercase">
				<img class="pb-8" src={guides[0].image} />
				<p class="pb-6">{guides[0].name}</p>
				<p class="text-xs whitespace-pre-line leading-loose">{guides[0].detail}</p>
			</div>
			<div class="flex flex-col justify-center items-center uppercase gap-10">
				<img src={guides[1].image} />
				<p>{guides[1].name}</p>
				<div class="flex flex-col gap-4">
					<p class="text-xs font-bold">{guides[1].conditional1}</p>
					<p class="text-xs whitespace-pre-line leading-loose">{guides[1].detail}</p>
					<div>
						<GetLocationButton />
					</div>
				</div>
                <img src={divider}/>
                <div class="flex flex-col gap-4">
					<p class="text-xs font-bold">{guides[1].conditional2}</p>
					<p class="text-xs whitespace-pre-line leading-loose">{guides[1].detail2}</p>
					<div>
						<GetLocationButton />
					</div>
				</div>
			</div>
			<div class="flex flex-col justify-center items-center uppercase gap-10">
				<img src={guides[1].image} />
				<p>{guides[1].name}</p>
				<div class="flex flex-col gap-4">
					<p class="text-xs font-bold">{guides[1].conditional1}</p>
					<p class="text-xs whitespace-pre-line leading-loose">{guides[1].detail}</p>
					<div>
						<GetLocationButton />
					</div>
				</div>
                <img src={divider}/>
                <div class="flex flex-col gap-4">
					<p class="text-xs font-bold">{guides[1].conditional2}</p>
					<p class="text-xs whitespace-pre-line leading-loose">{guides[1].detail2}</p>
					<div>
						<GetLocationButton />
					</div>
				</div>
			</div>
		</div>
        
	</div>
</div>
