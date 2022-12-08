import { JSX, onMount, ParentComponent, splitProps } from 'solid-js';
import { tlPararallax } from '../utils/parallax';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { isMobile } from '../utils/isMobile';
type Props = {
    zIndex: number;
    onUpdate?: (n: ScrollTrigger) => void;
    className?: string;
};

const ParallaxSection: ParentComponent<Props & JSX.HTMLAttributes<HTMLElement>> = (props) => {
    let target: HTMLElement;
    let content: HTMLElement;
    const [{ zIndex, children, onUpdate = () => {}, className = '' }, rest] = splitProps(props, [
        'children',
        'zIndex',
        'onUpdate',
        'onUpdate',
        'className',
    ]);

    onMount(() => {
        if (isMobile()) return;
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
        <section {...rest} ref={(r) => (target = r)} style={{ 'z-index': zIndex }} class="h-auto min-h-[700px]">
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
