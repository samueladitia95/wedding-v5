<script lang="ts">
	import galleryImg1 from '$lib/assets/gallery-images/Gallery IMG 1.jpg';
	import galleryImg2 from '$lib/assets/gallery-images/Gallery IMG 2.jpg';
	import galleryImg3 from '$lib/assets/gallery-images/Gallery IMG 3.jpg';
	import galleryImg4 from '$lib/assets/gallery-images/Gallery IMG 4.jpg';
	import galleryImg5 from '$lib/assets/gallery-images/Gallery IMG 5.jpg';
	import { Marquee } from 'svelte-fast-marquee';
	import type { PageData } from '../$types';
	import { pb } from '$lib/pocketbase';
	export let data: PageData;

	const startedText =
		'IT ALL  started  FROM a Random  hello from a stranger 12 Years  ago AND THE REST IS JUST HISTORY';
</script>

<div class="relative bg-mj-beige text-mj-black min-h-screen flex justify-center md:tracking-wider lg:tracking-[0.4rem]">
	<div class="px-[24px] py-[40px] max-w-[1600px] font-light">
		<!-- font perlu diganti -->
		<p class="text-3xl md:text-5xl xl:text-7xl uppercase !leading-[4rem] md:!leading-[5rem] xl:!leading-[6rem]">
			IT ALL <i class="lowercase">started</i> FROM a Random <i class="lowercase">hello</i> from a stranger 12 Years ago AND THE REST IS JUST
			HISTORY
		</p>
	</div>
	<div class="max-w-[1600px] absolute bottom-0 flex flex-row overflow-x-scroll no-scrollbar max-h-[300px]">
	 <Marquee >
		<img class="max-h-[300px] w-auto" src={pb.files.getUrl(data.main, data.main.marquee_1)} />
		<img class="max-h-[300px] w-auto" src={pb.files.getUrl(data.main, data.main.marquee_2)} />
		<img class="max-h-[300px] w-auto" src={pb.files.getUrl(data.main, data.main.marquee_3)} />
		<img class="max-h-[300px] w-auto" src={pb.files.getUrl(data.main, data.main.marquee_4)} />
		<img class="max-h-[300px] w-auto" src={pb.files.getUrl(data.main, data.main.marquee_5)} />
	</Marquee>
	</div>
</div>
