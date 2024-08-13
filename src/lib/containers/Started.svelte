<script lang="ts">
	import galleryImg1 from '$lib/assets/gallery-images/Gallery IMG 1.jpg';
	import galleryImg2 from '$lib/assets/gallery-images/Gallery IMG 2.jpg';
	import galleryImg3 from '$lib/assets/gallery-images/Gallery IMG 3.jpg';
	import galleryImg4 from '$lib/assets/gallery-images/Gallery IMG 4.jpg';
	import galleryImg5 from '$lib/assets/gallery-images/Gallery IMG 5.jpg';

	const startedText =
		'IT ALL  started  FROM a Random  hello from a stranger 12 Years  ago AND THE REST IS JUST HISTORY';
</script>

<div class="relative bg-mj-beige text-mj-black h-screen">
	<div class="px-[24px] py-[40px]">
		<p class="text-[32px] md:text-[48px] md:text-[56px] xl:text-[72px]">
			IT ALL <i>started</i> FROM a Random <i>hello</i> from a stranger 12 Years ago AND THE REST IS JUST HISTORY
		</p>
	</div>
	<div class="absolute bottom-0 flex flex-row overflow-scroll no-scrollbar">
		<img src={galleryImg1} />
		<img src={galleryImg2} />
		<img src={galleryImg3} />
		<img src={galleryImg4} />
		<img src={galleryImg5} />
	</div>
</div>
