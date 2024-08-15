<script lang="ts">
	import type { PageData } from '../$types';
	import { pb } from '$lib/pocketbase';
	import QnACard from '$lib/components/QnACard.svelte';

    const questions = [
        {
            question:"WHAT SHOULD I WEAR?",
            answer: "We kindly request that you dress in formal wear for our wedding.  A floor-length gown, sophisticated cocktail dress for ladies.  Men are kindly requested to suit up and leave their t-shirts, jeans, and slippers at home.",
            conditional:"*Please refrain from wearing white, that’s reserved for the bride.",
            conditional2:"If you have any questions about the dress code, please don’t hesitate to contact us. ",
        },
        {
            question:"CAN I BRING A +1?",
            answer: "Please note that this invitation is valid for one person, unless you have been informed otherwise personally.",
        },
        {
            question:"WILL THE WEDDING BE INDOOR OR OUTDOOR?",
            answer: "Events will be held outdoors, except Tea Pai Ceremony.",
        },
        {
            question:"WILL THE DINNER RECEPTION BE SEATED?",
            answer: "Yes! Please RSVP to ensure that you will be attending the dinner reception, so that we can arrange the seating accordingly.",
        },
        {
            question:"WHAT ACCOMMODATIONS ARE PROVIDED?",
            answer: "Flight ticket will not be provided. Hotel and round trip shuttle will be provided. Please check out the Travel Guide section.",
        },
        {
            question:"SHOULD I BRING A GIFT?",
            answer: "We are thrilled to have you celebrate with us, and while gifts are not necessary, we would be grateful if you choose to honor us with cash or angpao.",
        },
        {
            question:"I HAVE MORE QUESTIONS! WHO SHOULD I SPEAK TO?",
            answer: "You may reach out to Marco or Jessica directly. We look forward to celebrating with you.",
        },
    ]

	export let data: PageData;
</script>

<div class="wrapper bg-mj-black relative flex !flex-col text-white justify-center">
    <div class="relative min-h-48 min-w-full flex 2xl:justify-center">
        <img class="object-cover md:hidden" src={pb.files.getUrl(data.main, data.main.qna_mobile)} />
        <img class="object-cover hidden md:block lg:hidden" src={pb.files.getUrl(data.main, data.main.qna_tablet)} />
        <img class="object-cover hidden lg:block" src={pb.files.getUrl(data.main, data.main.qna_desktop)} />
        <p class="absolute bottom-0 left-0 max-w-48 text-3xl md:text-4xl lg:text-5xl md:text-nowrap pl-4 pb-4 md:pl-8 md:pb-8 lg:pl-12 lg:pb-12 2xl:left-48  font-timesNewRoman">QUESTIONS & ANSWERS</p>
    </div>
    <div class="px-6 md:px-8 lg:px-16 py-14 font-gordita flex flex-col gap-14 max-w-[1600px] 2xl:self-center 2xl:w-full">
        {#each questions as item, index}
        <QnACard question={item.question} answer={item.answer} conditional={item.conditional} conditional2={item.conditional2} index={index} isLast={index === questions.length - 1}/>
        {/each}
    </div>
</div>
