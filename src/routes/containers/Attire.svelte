<script lang="ts">
	import type { PageData } from '../$types';
	import { pb } from '$lib/pocketbase';
	export let data: PageData;
	import attire1Desktop from '$lib/assets/attire-images/Attire Image 1 - Desktop.jpg';
	import attire2Desktop from '$lib/assets/attire-images/Attire Image 2 - Desktop.jpg';
	import attire1Tablet from '$lib/assets/attire-images/Attire Image 1 - Tablet.jpg';
	import attire2Tablet from '$lib/assets/attire-images/Attire Image 2 - Tablet.jpg';
	import attire1Mobile from '$lib/assets/attire-images/Attire Image 1 - Mobile.jpg';
	import attire2Mobile from '$lib/assets/attire-images/Attire Image 2 - Mobile.jpg';
	// const attire1Desktop = 'https://drive.google.com/thumbnail?id=1JeCFcyIQy1vdYwaJYRULPIrSgeuZXHT-';
	// const attire2Desktop = 'https://drive.google.com/thumbnail?id=11_lxuK4-e2U2dcat9Xo4_ZmZSnEmNH4a';
	// const attire1Tablet = 'https://drive.google.com/thumbnail?id=1A5WHxVsYb7ZvVg2LEQnD2brqmOxPH296';
	// const attire2Tablet = 'https://drive.google.com/thumbnail?id=1Re0vyf86BCJRIv7ZTotegzjpHk_RzzMo';
	// const attire1Mobile = 'https://drive.google.com/thumbnail?id=1Aop1cptOLrNIVtfdsnvq8BEgSXnGxJ76';
	// const attire2Mobile = 'https://drive.google.com/thumbnail?id=1ilaXVUxQ2AduYVhEk61-BWoPBWLVaGvn';
</script>

<div class="min-h-screen bg-mj-beige flex flex-col items-center justify-center">
	<div
		class=" flex flex-col lg:grid lg:grid-flow-col lg:grid-cols-10 h-full min-h-screen text-mj-black justify-evenly md:justify-center lg:gap-[100px] px-6 py-32 md:py-32 lg:py-0"
	>
		<!-- Large screen -->
		<div
			class="relative col-span-5 min-w-[480px] hidden lg:flex justify-center items-center lg:-translate-y-12 lg:translate-x-12 xl:translate-x-24"
		>
			<div>
				<img
					class="absolute top-12 translate-y-1/4 xl:-translate-x-1/2 -translate-x-1/4 left-0 hidden lg:block scale-[60%]"
					src={pb.files.getUrl(data.main, data.main.attire1_desktop)}
					alt="1"
				/>
				<img
					class="absolute top-24 hidden lg:block scale-[60%] xl:-translate-x-1/2 -translate-x-1/4"
					src={pb.files.getUrl(data.main, data.main.attire2_desktop)}
					alt="1"
				/>
			</div>
		</div>
		<!-- Medium screen -->
		<div class="relative md:min-h-[400px] md:min-w-[400px] hidden md:block lg:hidden">
			<img
				class="absolute -left-[100px] scale-[75%]"
				src={pb.files.getUrl(data.main, data.main.attire1_tablet)}
				alt="1"
			/>
			<img
				class=" absolute -right-[100px] -top-[120px] scale-[75%]"
				src={pb.files.getUrl(data.main, data.main.attire2_tablet)}
				alt="1"
			/>
		</div>
		<!-- Small screen -->
		<div class="relative md:hidden mt-[60px]">
			<img
				class="z-10 absolute -top-[50px] -left-[80px] scale-[75%]"
				src={pb.files.getUrl(data.main, data.main.attire1_mobile)}
				alt="1"
			/>
			<img
				class="z-30 absolute -top-[150px] -right-[80px] scale-[75%]"
				src={pb.files.getUrl(data.main, data.main.attire2_mobile)}
				alt="1"
			/>
		</div>

		<div
			class="flex flex-col items-center gap-[24px] lg:gap-[32px] mt-[400px] md:mt-0 md:pt-[100px] lg:pt-0 justify-center lg:col-span-5 xl:pl-32"
		>
			<p
				class="text-3xl/loose md:text-[40px]/loose lg:text-5xl/loose tracking-widest font-ivora font-light"
			>
				THE ATTIRE
			</p>
			<p class="text-base/loose tracking-wider font-gordita text-center">
				HOLY MATRIMONY & RECEPTION
			</p>
			<div class="flex gap-4 md:gap-6">
				<div
					class="size-8 md:size-10 border-[1px] border-[#7E7E7E]/50 rounded-full bg-[#C49B81]"
				></div>
				<div
					class="size-8 md:size-10 border-[1px] border-[#7E7E7E]/50 rounded-full bg-[#D8BFAB]"
				></div>
				<div
					class="size-8 md:size-10 border-[1px] border-[#7E7E7E]/50 rounded-full bg-[#FBE8D8]"
				></div>
				<div
					class="size-8 md:size-10 border-[1px] border-[#7E7E7E]/50 rounded-full bg-[#A6A58F]"
				></div>
				<div
					class="size-8 md:size-10 border-[1px] border-[#7E7E7E]/50 rounded-full bg-[#6C705F]"
				></div>
			</div>
		</div>
	</div>
</div>
