<script lang="ts">
	import PlayButton from '$lib/components/PlayButton.svelte';
	import type { PageData } from '../$types';
	import { pb } from "$lib/pocketbase";

	const introMainText =
		'Distance is not for the fearful, it is for the bold. It’s for those who are willing to spend a lot time  alone in exchange for a little time with the one they love.';
	export let data:PageData

</script>

<div class="bg-mj-black min-h-screen flex justify-center relative">
	<div class="min-h-screen flex justify-center relative max-w-[1600px]">
		<img
			class="absolute top-0 left-0 md:hidden h-screen w-screen object-cover"
			src={pb.files.getUrl(data.main, data.main.main_image_mobile)}
			alt="mobile-img"/>
		<img
			class="h-screen w-screen absolute top-0 left-0 hidden md:block lg:hidden object-cover"
			src={pb.files.getUrl(data.main, data.main.main_image_tablet)}
			alt="tablet-img"
		/>
		<img
			class="h-screen w-screen absolute top-0 left-0 hidden lg:block object-cover"
			src={pb.files.getUrl(data.main, data.main.main_image_desktop)}
			alt="desktop-img"
		/>
		<div class="z-20 flex flex-col justify-between py-[72px] px-[62px] md:px-[180px] lg:px-[380px]">
			<p class="text-white text-[16px] md:text-[24px] lg:text-[20px] text-center">
				#sayJESStoMARCO
			</p>
			<p class="text-white text-[16px] md:text-[20px] lg:text-[18px] text-center font-gordita">
				{introMainText}
			</p>
			<div class="relative">
				<div class="absolute -left-10 md:-left-32 lg:-left-80 -top-2">
					<PlayButton />
				</div>
			</div>
		</div>
	</div>
</div>
