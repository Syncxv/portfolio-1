import { onMount, ParentComponent } from 'solid-js';
import { tlPararallax } from '../utils/parallax';
import ScrollTrigger from 'gsap/ScrollTrigger';
type Props = {
    zIndex: number;
    onUpdate?: (n: ScrollTrigger) => void;
    className?: string;
};

const ParallaxSection: ParentComponent<Props> = ({ zIndex, children, onUpdate = () => {}, className = '' }) => {
    let target: HTMLElement;
    let content: HTMLElement;
    let inversed = false;
    onMount(() => {
        let timeline = tlPararallax(content);

        ScrollTrigger.create({
            trigger: target,
            animation: timeline,
            scrub: true,
            start: 'top bottom',
            end: 'top top',
            onUpdate: (n) => onUpdate(n),
        });
    });
    return (
        <section ref={(r) => (target = r)} style={{ 'z-index': zIndex }} class="h-auto min-h-[700px]">
            <div
                ref={(r) => (content = r)}
                class={`content relative flex flex-col items-center justify-center overflow-hidden min-h-screen ${className}`}
            >
                {children}
            </div>
        </section>
    );
};

export default ParallaxSection;
