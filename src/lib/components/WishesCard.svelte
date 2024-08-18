<script lang="ts">
	export let name: string;
	export let wish: string;
	export let created: string;
</script>

<div class="flex flex-col gap-[16px]">
	<p class="pb-[12px]">{name}</p>
	<p>{wish}</p>
	<p class="text-[14px] font-extralight">{created}</p>
</div>
