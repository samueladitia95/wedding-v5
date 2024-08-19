<script lang="ts">
	import PrimaryButton from '$lib/components/PrimaryButton.svelte';
    import logo from "$lib/assets/MJ Logo.svg"
    export let openInvitation: () => void;
</script>

<div class="wrapper bg-mj-beige">
    <div class="flex flex-col justify-evenly items-center w-full">
        <div></div>
        <img src={logo}/>
        <div on:click={openInvitation}>
            <PrimaryButton buttonText={'open invitation'}/>
        </div>
    </div>
</div>
