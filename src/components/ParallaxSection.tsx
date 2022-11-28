import { onMount, ParentComponent } from 'solid-js';
import { tlPararallax } from '../utils/parallax';
import ScrollTrigger from 'gsap/ScrollTrigger';
type Props = {
    zIndex: number;
    className?: string;
};

const ParallaxSection: ParentComponent<Props> = ({ zIndex, children, className = '' }) => {
    let target: HTMLElement;
    let content: HTMLElement;
    onMount(() => {
        let timeline = tlPararallax(content);

        ScrollTrigger.create({
            trigger: target,
            animation: timeline,
            scrub: true,
            start: 'top bottom',
            end: 'top top',
        });
    });
    return (
        <section ref={(r) => (target = r)} style={{ 'z-index': zIndex }} class="h-auto min-h-[700px]">
            <div
                ref={(r) => (content = r)}
                class={`content relative flex flex-col items-center justify-center h-screen overflow-hidden ${className}`}
            >
                {children}
            </div>
        </section>
    );
};

export default ParallaxSection;
