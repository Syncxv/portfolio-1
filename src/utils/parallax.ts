import gsap from 'gsap';

export const tlPararallax = (content: gsap.TweenTarget) => {
    const timeline = gsap.timeline();

    timeline.set(content, {
        willChange: 'transform',
    });
    timeline.fromTo(
        content,
        {
            y: '-50%',
        },
        {
            y: '0%',
            ease: 'none',
            duration: 0.4,
        }
    );
    timeline.set(content, {
        willChange: 'auto',
    });
    return timeline;
};
