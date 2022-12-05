import { onMount, ParentComponent } from 'solid-js';
import { tlPararallax } from '../utils/parallax';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { navRef } from './NavBar';
type Props = {
    zIndex: number;
    className?: string;
};

const ParallaxSection: ParentComponent<Props> = ({ zIndex, children, className = '' }) => {
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
            onUpdate: function (n) {
                if (n.progress > 0.92 && !inversed) {
                    navRef.classList.add('-inverse');
                    inversed = true;
                }
                if (n.progress < 0.92 && inversed) {
                    navRef.classList.remove('-inverse');
                    inversed = false;
                }
            },
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
