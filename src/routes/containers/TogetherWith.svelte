<script lang="ts">
	import type { PageData } from '../$types';
	import { pb } from '$lib/pocketbase';
	export let data: PageData;
	import imageMobile from '$lib/assets/inv-images/Main Inv Image - Mobile.jpg';
	import imageTablet from '$lib/assets/inv-images/Main Inv Image - Tablet.jpg';
	import imageDesktop from '$lib/assets/inv-images/Main Inv Image - Desktop.jpg';
	const togetherWith = 'Together with their loving families';
	const groom = 'Hendro Marco';
	const groomFamily = 'SON OF THOMAS ALLIANTO (+) & HUANG CHIN CHIN';
	const bride = 'JESSICA TEGUH';
	const brideFamily = 'DAUGHTER OF JIMMY TEGUH & ROYANI TAIB';
	const invite = 'INVITE YOU TO THEIR WEDDING';
</script>

<div class="bg-mj-black wrapper tracking-widest">
	<!-- SMALL MEDIUM DISPLAY -->
	<div
		class="min-h-screen px-6 py-28 flex flex-col text-white text-center justify-center w-full gap-[20px] md:gap-[35px] uppercase lg:hidden max-w-[1600px]"
	>
		<p class="text-[14px] md:text-[16px] px-[70px] md:px-60 lg:px-72 font-gordita leading-loose">
			{togetherWith}
		</p>

		<div class="flex items-center justify-center rounded-[150px]">
			<img class="h-[300px] rounded-[150px]" src={pb.files.getUrl(data.main, data.main.together_mobile)} />
		</div>
		<div class="flex flex-col gap-[16px] md:gap-[20px]">
			<p class="font-aboreto text-[32px] md:text-[40px]">{groom}</p>
			<p class="text-[11px] md:text-[16px]">{groomFamily}</p>
		</div>
		<p class="text-[32px] md:text-[40px] font-aboreto">&</p>
		<div class="flex flex-col gap-[16px] md:gap-[20px]">
			<p class="font-aboreto text-[32px] md:text-[40px]">
				{bride}
			</p>
			<p class="text-[12px]">{brideFamily}</p>
		</div>
		<p class="text-[12px]">{invite}</p>
	</div>

	<!-- LARGE DISPLAY -->
	<div
		class="h-screen px-[24px] py-[112px] flex-col text-white text-center justify-center gap-[96px] uppercase hidden lg:flex max-w-[1600px]"
	>
		<p class="text-[16px] max-w-[230px] self-center">{togetherWith}</p>
		<div class="grid grid-flow-col grid-cols-10 items-center xl:px-[100px] gap-6">
			<div class="flex flex-col gap-[20px] col-span-4">
				<p class="text-[40px] font-aboreto">{groom}</p>
				<p class="text-sm font-gordita">{groomFamily}</p>
			</div>
			<div class="flex items-center justify-center rounded-[150px col-span-2">
				<img class="h-[300px] rounded-[150px] object-cover" src={pb.files.getUrl(data.main, data.main.together_desktop)} />
			</div>
			<div class="flex flex-col gap-[20px] col-span-4">
				<p class="text-[40px] font-aboreto">
					{bride}
				</p>
				<p class="text-sm font-gordita">{brideFamily}</p>
			</div>
		</div>
		<p class="font-gordita">{invite}</p>
	</div>
</div>

<style>
	.testing {
		display: flex;
		padding: 0px 72px;
		justify-content: center;
		align-items: center;
		gap: 40px;
		align-self: stretch;
	}
</style>
