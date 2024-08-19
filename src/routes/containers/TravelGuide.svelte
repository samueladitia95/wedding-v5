<script lang="ts">
	import type { PageData } from '../$types';
	import { pb } from '$lib/pocketbase';
	export let data: PageData;

	import flightIcon from '$lib/assets/icons/Flight Icon.svg';
	import hotelIcon from '$lib/assets/icons/Hotel Room Icon.svg';
	import TravelGuideCard from '$lib/components/TravelGuideCard.svelte';
	import GetLocationButton from '$lib/components/GetLocationButton.svelte';
	import divider from '$lib/assets/icons/Shape Divider.svg';
	import shuttleIcon from '$lib/assets/icons/Shuttle Icon.svg';

	const guides = [
		{
			image: flightIcon,
			name: 'GETTING THERE',
			detail: 'We encourage you to book your own flight ticket to Denpasar, Bali'
		},
		{
			image: hotelIcon,
			name: 'COMPLIMENTARY ACCOMODATION',
			detail1: 'Maya Ubud\n2 NIGHTs (OCTOBER 1 - OCTOBER 3, 2024)\n*Breakfast included',
			conditional1: 'family & friends',
			conditional2: 'family',
			detail2: 'Maya Ubud\n2 NIGHTs (OCTOBER 1 - OCTOBER 3, 2024)\n*Breakfast included'
		},
		{
			image: shuttleIcon,
			name: 'COMPLIMENTARY SHUTTLE',
			conditional1: 'Tea Pai - 11:00 AM',
			detail1:
				'THE GARCIA UBUD - MAYA UBUD - THE GARCIA UBUD\n\n(PLEASE BE READY AT THE HOTEL LOBBY BY 11:00 AM\n (WITA), OUR WEDDING ASSISTANT WILL GUIDE YOU)',
			conditional2: 'Holy matrimony - 15:00 PM',
			detail2:
				'THE GARCIA UBUD - MAYA UBUD - THE GARCIA UBUD\n\n(PLEASE BE READY AT THE HOTEL LOBBY BY 15:00 PM\n(WITA), OUR WEDDING ASSISTANT WILL GUIDE YOU)'
		}
	];
</script>

<div class="wrapper relative overflow-hidden">
	<img
		src={pb.files.getUrl(data.main, data.main.travel_guide_mobile)}
		class="absolute md:hidden left-0 top-0 min-h-full min-w-full"
		alt="1"
	/>
	<img
		src={pb.files.getUrl(data.main, data.main.travel_guide_tablet)}
		class="absolute hidden md:block lg:hidden left-0 top-0 min-h-full min-w-full"
		alt="1"
	/>
	<img
		src={pb.files.getUrl(data.main, data.main.travel_guide_desktop)}
		class="absolute hidden lg:block left-0 top-0 min-h-full min-w-full"
		alt="1"
	/>
	<div
		class="flex flex-col px-6 py-40 z-20 text-white font-gordita text-center w-full justify-center gap-14 tracking-wide"
	>
		<div class="flex flex-col gap-6">
			<p class="text-3xl md:text-[40px] font-ivora font-light tracking-widest">TRAVEL GUIDE</p>
			<p class="text-xs md:text-sm">FOR OUTSIDE BALI ONLY</p>
		</div>
		<div class="flex flex-col gap-14">
			<!-- POINT 1 -->
			<div class="flex flex-col justify-center items-center uppercase font-gordita">
				<img class="pb-8" src={guides[0].image} alt="1" />
				<p class="pb-6 tracking-wider md:!text-lg">{guides[0].name}</p>
				<p
					class="text-xs/loose md:text-sm/loose whitespace-pre-line leading-loose max-w-[300px] md:max-w-[400px]"
				>
					{guides[0].detail}
				</p>
			</div>

			<!-- POINT 2 -->
			<div class="flex flex-col justify-center items-center uppercase gap-10">
				<img src={guides[1].image} alt="1" />

				<p class="tracking-widest text-center font-gordita md:!text-lg">{guides[1].name}</p>

				<div class="flex flex-col lg:flex-row items-center uppercase gap-10 font-gordita">
					<div class="flex flex-col lg:justify-evenly lg:h-36 gap-4">
						<p class="text-xs md:text-base font-bold">{guides[1].conditional1}</p>
						<p class="text-xs md:text-sm/loose whitespace-pre-line leading-loose max-w-60">
							THE GARCIA UBUD <br /> *Breakfast included
						</p>
						<div>
							<GetLocationButton location="https://maps.app.goo.gl/ZBPxdBLw4y9HX8PeA" />
						</div>
					</div>

					<img src={divider} alt="1" />

					<div class="flex flex-col lg:justify-evenly lg:h-36 gap-4">
						<p class="text-xs md:text-base font-bold">{guides[1].conditional2}</p>
						<p class="text-xs md:text-sm/loose whitespace-pre-line leading-loose text-center">
							MAYA UBUD <br /> *Breakfast included
						</p>
						<div>
							<GetLocationButton location="https://maps.app.goo.gl/YRM7ZgejsRxvkfrv9" />
						</div>
					</div>
				</div>
			</div>

			<!-- POINT 3 -->
			<div class="flex flex-col justify-center items-center uppercase gap-10">
				<img src={guides[2].image} alt="1" />
				<p class="tracking-wider md:!text-lg">{guides[2].name}</p>
				<div class="flex flex-col lg:flex-row items-center uppercase gap-10">
					<div class="flex flex-col gap-4">
						<p class="text-xs md:text-sm/loose font-bold">{guides[2].conditional1}</p>
						<p class="text-xs md:text-sm/loose whitespace-pre-line leading-loose">
							{guides[2].detail1}
						</p>
					</div>
					<img src={divider} alt="1" />
					<div class="flex flex-col gap-4">
						<p class="text-xs md:text-sm/loose font-bold">{guides[2].conditional2}</p>
						<p class="text-xs md:text-sm/loose whitespace-pre-line leading-loose">
							{guides[2].detail2}
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
