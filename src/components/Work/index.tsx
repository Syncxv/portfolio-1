import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Component, onMount } from 'solid-js';
import { slideUpOverflow } from '../../utils/slideUpOverflow';
import WorkCard from './WorkCard';

interface Props {}

const WorkSection: Component<Props> = ({}) => {
    let heading!: HTMLDivElement;
    onMount(() => {
        ScrollTrigger.create({
            trigger: heading,
            animation: slideUpOverflow(heading, { duration: 1.4, stagger: 0 }),
            start: 'top bottom',
        });
    });
    return (
        <section class="bg-primary-black h-full z-50">
            <div class="work-section flex flex-col items-center gap-12 pb-[5rem]">
                <div class="relative overflow-hidden">
                    <h2 ref={heading} class="text-[5vmax] ">
                        Work
                    </h2>
                </div>
                <div
                    style={{ 'grid-template-columns': 'repeat(auto-fit, minmax(33vmax, 0.1fr))' }}
                    class="grid items-center justify-center w-full gap-[10rem]"
                >
                    <WorkCard
                        description="A Full-Stack Application that is similar to twitter. It uses next js & chakra ui for the frontend and a mongodb, graphql backend"
                        name="Twitter Clone"
                        image="https://media.discordapp.net/attachments/748017439496732702/1050071593453371432/Frame_2.png"
                    />
                </div>
            </div>
        </section>
    );
};

export default WorkSection;
