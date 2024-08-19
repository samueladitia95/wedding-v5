<script lang="ts">
    import WishesCard from "$lib/components/WishesCard.svelte";

    const wishes = [
        {
            name: "Babang Ganteng",
            wish: "Congrats on your wedding! I'm so happy for both of you! See you soon in Bali!",
            created: "Saturday, 13 May 2023 10:00"
        },
        {
            name: "Teteh Geulis",
            wish: "Congrats on your wedding! So happy for you! See you soon in Bali!",
            created: "Saturday, 13 May 2023 10:00"
        },
        {
            name: "Orang Lain",
            wish: "Ululululuululululu",
            created: "Saturday, 13 May 2023 10:00"
        },
        {
            name: "Babang Ganteng2",
            wish: "Congrats on your wedding! So happy for you! See you soon in Bali!",
            created: "Saturday, 13 May 2023 10:00"
        },
        {
            name: "Teteh Geulis",
            wish: "Congrats on your wedding! So happy for you! See you soon in Bali!",
            created: "Saturday, 13 May 2023 10:00"
        },
    ]
</script>

<div class=" bg-mj-dark-sand min-h-screen w-full">
    <div class="px-[24px] py-[72px] text-white gap-[48px] flex flex-col max-w-[800px]">
        {#each wishes as wish}
        <WishesCard name={wish.name} wish={wish.wish} created={wish.created} />
        {/each}
    </div>
</div>