import gsap from 'gsap';
import { Component, ComponentProps, createEffect, createSignal, For, onMount, ParentComponent } from 'solid-js';
import { Transition } from 'solid-transition-group';
import { Skills } from '../../constants';
import { isMobile } from '../../utils/isMobile';
import { About } from '../About';
import Arrow from '../Icons/Arrow';
import Styles from './Tech.module.scss';
interface Props {}

let coolRef!: HTMLDivElement;

export const Tech: Component<Props> = () => {
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
    });
    return (
        <>
            <section class="bg-primary-black" style={{ height: 'fit-content' }}>
                <div class="flex flex-col lg:flex-row gap-12 items-center justify-around mt-24 mx-auto max-w-[90vw] ">
                    <div class="idkman p-10 lg:text-start text-center max-w-[65ch]">
                        <h3 class="text-2xl  mb-8 font-bold">I love learnin new things</h3>
                        <p class="text-start text-gray-300">
                            I have explored a wide variety of interests and subjects over the years. This is because I am passionate about learning
                            and growing as a person. In addition to increasing my knowledge and skills, I find that trying new things and exploring
                            different areas of interest helps keep things interesting and engaging. It also helps me to avoid boredom or burnout, and
                            keeps my mind active and curious. I have made a point of dipping my toes into a lot of different ponds, in order to keep
                            learning and growing as a person.
                        </p>
                    </div>
                    <div ref={coolRef} class="myCanvasContainer">
                        <canvas height={isMobile() ? 350 : 600} width={isMobile() ? 350 : 600} id="myCanvas"></canvas>
                    </div>
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
