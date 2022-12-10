import { useParams } from '@solidjs/router';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Component, onMount } from 'solid-js';
import { WORKS } from '../../constants';
import { slideUpOverflow } from '../../utils/slideUpOverflow';
import ParallaxSection from '../ParallaxSection';

interface Props {}

const CasePage: Component<Props> = () => {
    const params = useParams();
    const work = WORKS.find((w) => w.id === params.id);
    if (!work) return <div>work not found eh</div>;

    let heading!: HTMLDivElement;
    let type!: HTMLParagraphElement;
    onMount(() => {
        ScrollTrigger.create({
            trigger: heading,
            animation: slideUpOverflow([type, heading], { duration: 1.4, stagger: 0.2 }),
            start: 'top bottom',
        });
    });
    return (
        <>
            <header class="relative h-screen w-screen z-20 bg-primary-black">
                <div class="content grid grid-cols-3 justify-items-center items-center h-full ">
                    <div style={{ 'grid-column': '1/4' }} class="heading">
                        <div class="relative overflow-hidden">
                            <p ref={type} class="text-sm align-self-start">
                                {work.type}
                            </p>
                        </div>
                        <div class="relative overflow-hidden">
                            <h1 ref={heading} class="text-6xl">
                                {work.caseStudy.heading}
                            </h1>
                        </div>
                    </div>
                </div>
            </header>
            <ParallaxSection zIndex={10} style={{ height: 'fit-content' }}>
                <img src="https://media.discordapp.net/attachments/756761009729044540/1051082255856046150/Slide_16_9_-_1.png" alt="" />
            </ParallaxSection>
            <ParallaxSection zIndex={8} class="bg-dark-900">
                <div
                    style={{ 'grid-template-columns': '.4fr 1fr' }}
                    class="grid justify-items-start p-20 h-screen w-screen place-content-center items-start"
                >
                    <span class="text-2xl">Context</span>
                    <p style={{ 'word-break': 'break-word' }} class="text-xl w-full">
                        {work.caseStudy.context}
                    </p>
                </div>
            </ParallaxSection>
        </>
    );
};
export default CasePage;
