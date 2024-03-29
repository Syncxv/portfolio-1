import ScrollTrigger from 'gsap/ScrollTrigger';
import { Component, For, onMount } from 'solid-js';
import { WORKS } from '../../constants';
import { slideUpOverflow } from '../../utils/slideUpOverflow';
import WorkCard from './WorkCard';

interface Props {}

const WorkSection: Component<Props> = ({}) => {
    let heading!: HTMLDivElement;
    onMount(async () => {
        ScrollTrigger.create({
            trigger: heading,
            animation: slideUpOverflow(heading, {}, { duration: 1.4, stagger: 0 }),
            start: 'top bottom',
        });
    });
    return (
        <section id="work" class="bg-primary-black h-full z-50">
            <div class="work-section flex flex-col items-center gap-12 pb-[5rem]">
                <div class="relative overflow-hidden mt-20">
                    <h2 ref={heading} class="text-4xl lg:text-7xl">
                        Work
                    </h2>
                </div>
                <div
                    style={{ 'grid-template-columns': 'repeat(auto-fit, minmax(33vmax, 0.1fr))' }}
                    class="grid items-center justify-center w-full gap-[10rem]"
                >
                    {
                        <For each={WORKS} fallback={<div>Loading..</div>}>
                            {(work) => <WorkCard work={work} />}
                        </For>
                    }
                </div>
            </div>
        </section>
    );
};

export default WorkSection;
