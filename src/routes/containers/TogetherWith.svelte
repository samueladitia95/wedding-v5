<script lang="ts">
	import type { PageData } from '../$types';
	import { pb } from '$lib/pocketbase';
	export let data: PageData;
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
		class="min-h-screen px-6 py-28 flex flex-col text-white text-center justify-center w-full gap-10 uppercase lg:hidden max-w-[1600px]"
	>
		<p class="text-sm md:text-base px-[70px] md:px-60 lg:px-72 font-gordita leading-loose">
			{togetherWith}
		</p>

		<div class="flex items-center justify-center rounded-full">
			<img
				class="h-[300px] rounded-[150px]"
				src={pb.files.getUrl(data.main, data.main.together_mobile)}
				alt="inv"
			/>
		</div>

		<div class="flex flex-col gap-6">
			<div class="flex flex-col gap-6 font-ivora">
				<p class="text-3xl md:text-[40px]">{groom}</p>
				<p class="text-xs md:text-base">{groomFamily}</p>
			</div>

			<p class="text-[32px] md:text-[40px] font-ivora">&</p>

			<div class="flex flex-col gap-6 font-ivora">
				<p class="text-[32px] md:text-[40px]">
					{bride}
				</p>
				<p class="text-xs md:text-base">{brideFamily}</p>
			</div>
		</div>

		<p class="text-xs md:text-sm md:mt-14">{invite}</p>
	</div>

	<!-- LARGE DISPLAY -->
	<div
		class="h-screen
			px-[24px]
			py-[112px]
			flex-col
			text-white
			text-center
			justify-center
			gap-[96px]
			uppercase
			hidden
			lg:flex
			w-screen"
	>
		<p
			class="text-base max-w-[300px] self-center font-gordita tracking-[0.3em] leading-9 text-center"
		>
			{togetherWith}
		</p>

		<div class="grid grid-flow-col grid-cols-10 items-center xl:px-24 gap-6">
			<div class="flex flex-col gap-5 col-span-4">
				<p class="text-4xl font-ivora font-light tracking-widest">{groom}</p>
				<p class="text-sm font-gordita tracking-widest">{groomFamily}</p>
			</div>
			<div class="flex items-center justify-center col-span-2">
				<img
					class="h-[435px] max-w-[300px] rounded-[150px] object-cover"
					src={pb.files.getUrl(data.main, data.main.together_desktop)}
					alt="together"
				/>
			</div>
			<div class="flex flex-col gap-[20px] col-span-4">
				<p class="text-[40px] font-ivora font-light">
					{bride}
				</p>
				<p class="text-sm font-gordita">{brideFamily}</p>
			</div>
		</div>

		<p class="font-gordita">{invite}</p>
	</div>
</div>
