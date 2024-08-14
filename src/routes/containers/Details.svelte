<script lang="ts">
    const title = "THE DETAILS"

    import teaPot from "$lib/assets/icons/Teapai Icon.svg"
    import holyMatrimony from "$lib/assets/icons/Holy Matrimony Icon.svg"
    import cocktail from "$lib/assets/icons/Cocktail Icon.svg"
    import reception from "$lib/assets/icons/Reception Icon.svg"
	import DetailsCard from "$lib/components/DetailsCard.svelte";

    const items = [
        {
            image: teaPot,
            name: "TEA PAI CEREMONY",
            condition: "(Family Only)",
            time: "12:00 PM (WITA)",
            location: "THE LOUNGE, MAYA UBUD",
        },
        {
            image: holyMatrimony,
            name: "HOLY MATRIMONY",
            condition: "(Guests are to be seated by 15:30 PM)",
            condition2: "p.s: Children under 5 is not allowed",
            time: "16:00 PM (WITA)",
            location: "CEREMONIAL PLAZA, MAYA UBUD",
        },
        {
            image: cocktail,
            name: "SUNSET COCKTAIL",
            time: "17:00 PM (WITA)",
            location: "MAYASARI GARDEN, MAYA UBUD",
        },
        {
            image: reception,
            name: "RECEPTION",
            condition: "(Family & Friends)",
            time: "18:30 PM (WITA)",
            location: "THE AMPHITHEATRE, MAYA UBUD",
        },
    ]
</script>

<div class="bg-mj-dark-brown min-h-screen">
    <div class="px-6 py-28 flex flex-col justify-center items-center text-white">
        <p class="text-3xl">{title}</p>
        {#each items as item, index}
        <DetailsCard name={item.name} condition={item.condition} condition2={item.condition2} time={item.time} location={item.location} image={item.image} isLast={index === items.length - 1}/>
        {/each}
    </div>

</div>