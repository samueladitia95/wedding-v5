<script lang="ts">
	import dayjs from 'dayjs';

	export let name: string;
	export let wish: string;
	export let created: string;
</script>

<div class="flex flex-col gap-[16px] font-gordita">
	<p class="pb-[12px] tracking-wider uppercase">{name}</p>
	<p class="tracking-wide">{wish}</p>
	<p class="text-[14px] font-light">{dayjs(created).format('dddd, D MMMM YYYY HH:mm')}</p>
</div>
