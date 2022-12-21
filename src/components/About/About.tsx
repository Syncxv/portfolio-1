import { Component, For, onCleanup, onMount } from 'solid-js';
import { Skills } from '../../constants';
import { clamp } from '../../utils/clamp';
import { isMobile } from '../../utils/isMobile';
interface Props {}

let coolRef!: HTMLCanvasElement;
let resizeFunc = () => (coolRef.width = clamp(window.innerWidth * 0.9, 350, 600));
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
    });

    onCleanup(() => {
        TagCanvas.Delete('myCanvas');
        window.removeEventListener('resize', resizeFunc);
    });
    return (
        <>
            <section class="bg-primary-black min-h-screen" style={{ height: 'fit-content' }}>
                <div class="flex flex-col lg:flex-row gap-12 items-center justify-around mt-24 mx-auto max-w-[90vw] ">
                    <div class="idkman lg:text-start text-center max-w-[65ch]">
                        <h3 class="text-2xl  mb-8 font-bold">HI Im Aruldev</h3>
                        <p class="text-start text-lg text-gray-300">
                            I am a 17 year old high school student who has a strong passion for all things computers. From building and repairing
                            hardware to coding and programming, I love learning about and exploring the endless possibilities that technology has to
                            offer. In my free time, you can often find me tinkering with my own personal computer or working on a new project.
                            <br /> <br /> I have explored a wide variety of interests and subjects over the years. This is because I am passionate
                            about learning and growing as a person. In addition to increasing my knowledge and skills, I find that trying new things
                            and exploring different areas of interest helps keep things interesting and engaging. It also helps me to avoid boredom or
                            burnout, and keeps my mind active and curious. I have made a point of dipping my toes into a lot of different ponds, in
                            order to keep learning and growing as a person.
                        </p>
                    </div>
                    <div class="myCanvasContainer flex items-center justify-center">
                        <canvas ref={coolRef} height={isMobile() ? 350 : 600} width={resizeFunc()} id="myCanvas"></canvas>
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
