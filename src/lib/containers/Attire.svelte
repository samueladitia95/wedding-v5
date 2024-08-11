<script lang="ts">
	const attire1Desktop = 'https://drive.google.com/thumbnail?id=1JeCFcyIQy1vdYwaJYRULPIrSgeuZXHT-';
	const attire2Desktop = 'https://drive.google.com/thumbnail?id=11_lxuK4-e2U2dcat9Xo4_ZmZSnEmNH4a';
	const attire1Tablet = 'https://drive.google.com/thumbnail?id=1A5WHxVsYb7ZvVg2LEQnD2brqmOxPH296';
	const attire2Tablet = 'https://drive.google.com/thumbnail?id=1Re0vyf86BCJRIv7ZTotegzjpHk_RzzMo';
	const attire1Mobile = 'https://drive.google.com/thumbnail?id=1Aop1cptOLrNIVtfdsnvq8BEgSXnGxJ76';
	const attire2Mobile = 'https://drive.google.com/thumbnail?id=1ilaXVUxQ2AduYVhEk61-BWoPBWLVaGvn';
</script>

<div class="min-h-screen bg-mj-beige flex flex-col items-center justify-center">
	<div class=" flex flex-col gap-[24px] text-mj-black">
        <div>
            <img class="hidden lg:block" src={attire1Desktop} />
            <img class="hidden lg:block" src={attire2Desktop} />
        </div>
        <div>
            <img class="hidden md:block lg:hidden" src={attire1Tablet} />
            <img class="hidden md:block" src={attire2Tablet} />
        </div>
		<div class="flex flex-row pb-[100px]">
			<img class="md:hidden z-10" src={attire1Mobile} />
			<img class="md:hidden z-30" src={attire2Mobile} />
		</div>
		<div class="flex flex-col items-center gap-[24px]">
			<p class="text-[32px]">THE ATTIRE</p>
			<p class="text-[16px]">HOLY MATRIMONY & RECEPTION</p>
            <div class="flex gap-[16px]">
                <div class="size-[32px] border-[1px] border-mj-black/30 rounded-full bg-[#EFE6D5]"></div>
                <div class="size-[32px] border-[1px] border-mj-black/30 rounded-full bg-[#E7D5C1]"></div>
                <div class="size-[32px] border-[1px] border-mj-black/30 rounded-full bg-[#C9BDA7]"></div>
                <div class="size-[32px] border-[1px] border-mj-black/30 rounded-full bg-[#C1A790]"></div>
            </div>
            <p class="text-[12px]">LIGHT CHAMPAGNE / BEIGE / NUDE</p>
		</div>
	</div>
</div>
