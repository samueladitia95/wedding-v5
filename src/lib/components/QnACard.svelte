<script lang="ts">
	import arrowDown from '$lib/assets/icons/arrow-down.svg?raw';
	import { string } from 'zod';

	let selected: boolean = false;
    export let question: string;
    export let answer: string;
    export let conditional: string;
    export let conditional2: string;
    export let isLast: boolean;
    export let index:number;
</script>

<div class={`flex flex-row gap-4 ${isLast? '':'border-b'} border-b-white/20 ${selected? 'pb-14': 'pb-2' }`}>
	<p>0{index+1}.</p>
	<div class="text-xs leading-6 w-full">
		<p class="pb-4 text-base flex justify-between hover:cursor-pointer" on:click={()=>{selected=!selected}}>
			{question} <span class={`${selected?'rotate-0':'rotate-180'}`}>{@html arrowDown}</span>
		</p>
        {#if selected}
		<div>
			<p>
				{answer}
			</p>
            {#if conditional}
			<p class="py-6 font-timesNewRoman italic">
                {conditional}
			</p>
            {/if}
            {#if conditional2}
			<p>{conditional2}</p>
            {/if}
		</div>
        {/if}
	</div>
</div>
