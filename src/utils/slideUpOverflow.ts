import gsap from 'gsap';

export const slideUpOverflow = (elem: HTMLElement, props: gsap.TweenVars = {}) => {
    const timeline = gsap.timeline();
    timeline.fromTo(
        elem,
        {
            y: '200%',
        },
        {
            y: '0%',
            ease: 'power3.out',
            duration: 1.8,
            stagger: 0.15,
            ...props,
        },
        0.2
    );

    return timeline;
};
