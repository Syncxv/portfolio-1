import { Component, onMount } from 'solid-js';
import gsap from 'gsap';
type Props = {};

const Hero: Component<Props> = (props) => {
    let firstRef: HTMLDivElement | undefined;
    let heading1: HTMLDivElement | undefined;
    let heading2: HTMLDivElement | undefined;
    onMount(() => {
        let timeline = gsap.timeline();
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
    return (
        <>
            <section class="flex justify-center relative bg-primary-black text-white z-20">
                <div class="wrapper absolute top-1/3">
                    <div class="relative overflow-hidden">
                        <p ref={firstRef} class="text-xl">
                            Aruldev Arackal
                        </p>
                    </div>
                    <div class="relative overflow-hidden">
                        <h1 ref={heading1} class="text-8xl">
                            Video Editor
                        </h1>
                    </div>
                    <div class="relative overflow-hidden">
                        <h1 ref={heading2} class="text-8xl ml-16 ">
                            & Developer
                        </h1>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
