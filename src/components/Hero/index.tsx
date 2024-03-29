import { Component, createSignal, onCleanup, onMount } from 'solid-js';
import gsap from 'gsap';
import Arrow from '../Icons/Arrow';
import { cursor, scroller } from '../Layout';
import ArrowDownButton from '../ArrowDownButton';
import { CircleBlob } from '../CircleBlob/CircleBlob';
type Props = {};

const Hero: Component<Props> = (props) => {
    let firstRef: HTMLDivElement | undefined;
    let heading1: HTMLDivElement | undefined;
    let heading2: HTMLDivElement | undefined;
    let btn!: HTMLButtonElement;
    let [timeLine, setTimeLine] = createSignal<gsap.core.Timeline>();
    onMount(async () => {
        console.log('CREATING TIMELINE');
        let timeline = setTimeLine(gsap.timeline());
        let all = [firstRef, heading1];
        timeline.set(all, {
            willChange: 'transform',
        });
        timeline.fromTo(
            firstRef!,
            {
                y: '150%',
            },
            {
                y: '0%',
                duration: 1.1,
                ease: 'power3.out',
            },
            0
        );
        timeline.fromTo(
            heading1!,
            {
                y: '-100%',
            },
            {
                y: '0%',
                clearProps: 'y',
                duration: 1.8,
                stagger: 0.1,
                ease: 'power3.out',
            },
            0.2
        );
        timeline.fromTo(
            heading2!,
            {
                y: '200%',
            },
            {
                y: '0%',
                ease: 'power3.out',
                duration: 1.8,
                stagger: 0.15,
            },
            0.2
        );
    });
    onCleanup(() => timeLine()?.kill());
    return (
        <section id="home" class="flex justify-center relative bg-primary-black text-white z-20">
            <div class="wrapper absolute top-1/3 lg:block flex flex-col items-center justify-center mix-blend-difference">
                <div class="relative self-start">
                    <CircleBlob />
                    <div class="self-start w-full lg:ml-0 relative overflow-hidden">
                        <p ref={firstRef} class="text-sm lg:text-lg">
                            Aruldev
                        </p>
                    </div>
                </div>
                <div class="relative overflow-hidden">
                    <h1 ref={heading1} class="text-5xl mg:text-6xl lg:text-8xl">
                        Video Editor
                    </h1>
                </div>
                <div class="relative overflow-hidden">
                    <h1 ref={heading2} class="text-5xl mg:text-6xl lg:text-8xl lg:ml-16 ">
                        & Developer
                    </h1>
                </div>
            </div>
            <ArrowDownButton onClick={() => scroller.scrollIntoView(document.getElementById('part1')!)} />
        </section>
    );
};

export default Hero;
