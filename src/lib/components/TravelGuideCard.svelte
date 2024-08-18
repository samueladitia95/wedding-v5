<script lang="ts">
    export let image;
    export let name: string;
    export let detail: string;
</script>
<div class="flex flex-col justify-center items-center uppercase">
    <img class="pb-8" src={image}/>
    <p>{name}</p>
    <p class="text-xs whitespace-pre-line">{detail}</p>
</div>