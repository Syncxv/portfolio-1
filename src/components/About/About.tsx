import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Component, For, onCleanup, onMount } from 'solid-js';
import { Skills } from '../../constants';
import { clamp } from '../../utils/clamp';
import { isMobile } from '../../utils/isMobile';
import { slideUpOverflow } from '../../utils/slideUpOverflow';
import { SplitTextJS } from '../../utils/SplitTextJs';
import ArrowDownButton from '../ArrowDownButton';
import { scroller } from '../Layout';
interface Props {}
let coolRef!: HTMLCanvasElement;

let pRef1!: HTMLParagraphElement;
let pRef2!: HTMLParagraphElement;

let h2Ref1!: HTMLHeadingElement;
let h2Ref2!: HTMLHeadingElement;

export const slideX = (elem: gsap.TweenTarget, from: gsap.TweenVars = {}, props: gsap.TweenVars = {}, pos: gsap.Position = 0) => {
    const timeline = gsap.timeline();
    timeline.fromTo(
        elem,
        {
            x: '200%',
            ...from,
        },
        {
            x: '0%',
            ease: 'power3.out',
            duration: 1.8,
            stagger: 0.15,
            ...props,
        },
        pos
    );

    return timeline;
};

let resizeFunc = () => (coolRef.width = window.innerWidth);
export const About: Component<Props> = () => {
    onMount(() => {
        TagCanvas.Start('myCanvas', 'taglist', {
            textColour: '#ffffff',
            outlineThickness: 0.5,
            outlineColour: '#FE0853',
            maxSpeed: 0.06,
            freezeActive: true,
            shuffleTags: true,
            shape: 'sphere',
            zoom: 0.8,
            noSelect: true,
            textFont: null,
            pinchZoom: true,
            wheelZoom: false,
            freezeDecel: true,
            fadeIn: 3000,
            initial: [0.3, -0.1],
            depth: 1.1,
        });
        window.addEventListener('resize', resizeFunc);
        const what = new SplitTextJS(pRef1);
        ScrollTrigger.create({
            trigger: pRef1,
            start: 'top bottom',
            animation: slideUpOverflow(what.words, { opacity: 0 }, { opacity: 1, duration: 0.8, stagger: 0.025 }),
            // scrub: true,
        });
        ScrollTrigger.create({
            trigger: h2Ref1,
            start: 'top bottom',
            animation: slideX(h2Ref1, { x: '-200%' }),
        });

        const what2 = new SplitTextJS(pRef2);
        ScrollTrigger.create({
            trigger: pRef2,
            start: 'top bottom',
            animation: slideUpOverflow(what2.words, { opacity: 0 }, { opacity: 1, duration: 0.8, stagger: 0.025 }),
            // scrub: true,
        });
        ScrollTrigger.create({
            trigger: h2Ref2,
            start: 'top bottom',
            animation: slideX(h2Ref2),
        });
    });

    onCleanup(() => {
        TagCanvas.Delete('myCanvas');
        window.removeEventListener('resize', resizeFunc);
    });
    return (
        <>
            <section id="about" class="bg-primary-black min-h-screen overflow-hidden" style={{ height: 'fit-content' }}>
                <div id="part1" class="part1 flex flex-col gap-32 items-center w-full max-w-[90vw] mx-auto pt-24 my-[70vh] relative">
                    <h2 ref={h2Ref1} class="text-7xl self-start font-bold z-50">
                        HI
                    </h2>
                    <p ref={pRef1} class="text-4xl lg:text-5xl max-w-[24ch] self-end">
                        I am a 17 year old high school student who has a strong passion for all things computers.
                    </p>
                    <ArrowDownButton
                        className="-bottom-1/4 lg:-bottom-1/2"
                        onClick={() => scroller.scrollIntoView(document.getElementById('part2')!)}
                    />
                </div>

                <div id="part2" class="part2 flex flex-col gap-32 items-center w-full max-w-[90vw] mx-auto my-72 pt-24">
                    <h2 ref={h2Ref2} class="text-7xl self-end font-bold">
                        Skills
                    </h2>
                    <p ref={pRef2} class="text-4xl lg:text-5xl max-w-[24ch] self-start">
                        G'day I have a broad range of skills from video editing to low level assembly programming. I LOVE learning new technologies
                        and building real world applications with them. OH and also I love reverse engineering.
                    </p>
                </div>
                <div class="myCanvasContainer flex items-center justify-center mb-32">
                    <canvas ref={coolRef} height={isMobile() ? 350 : 800} width={resizeFunc()} id="myCanvas"></canvas>
                </div>
            </section>
            <div id="taglist" style={{ display: 'none' }}>
                <ul>
                    <For each={Skills}>
                        {(item) => (
                            <li>
                                <a href="#">{item.name}</a>
                            </li>
                        )}
                    </For>
                </ul>
            </div>
        </>
    );
};
