import gsap from 'gsap';

export const slideUpOverflow = (elem: gsap.TweenTarget, props: gsap.TweenVars = {}, pos: gsap.Position = 0) => {
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
        pos
    );

    return timeline;
};
