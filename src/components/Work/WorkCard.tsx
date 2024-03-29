import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Component, createSignal, onCleanup, onMount } from 'solid-js';
import { cursor, isExiting } from '../Layout';
import Arrow from '../Icons/Arrow';
import { useNavigate } from '@solidjs/router';
import { Work } from '../../constants';
import { waitUntilLoaded } from '../../utils/waitUntilLoaded';
import { isMobile } from '../../utils/isMobile';
type Props = {
    work: Work;
};

const slideUp = (image: HTMLDivElement, container: HTMLDivElement) => {
    const timeline = gsap.timeline();

    timeline.set(image, {
        willChange: 'transform',
    });

    // timeline.fromTo(container, { y: '50%' }, { y: 0, ease: 'power3.out', duration: 0.5 });

    timeline.fromTo(
        image,
        { y: '50%' },
        {
            y: 0,
            // scale: 1,
            ease: 'power3.out',
            duration: 2,
        },
        0.2
    );

    timeline.set(image, {
        willChange: 'auto',
    });

    return timeline;
};

const WorkCard: Component<Props> = ({ work }) => {
    let imageRef!: HTMLImageElement;
    let videoRef!: HTMLVideoElement
    let imageContainer!: HTMLDivElement;
    let card!: HTMLDivElement;
    const [timeline, setTimeline] = createSignal<gsap.core.Timeline>();
    let [scrollTrigger, setScrollTigger] = createSignal<ScrollTrigger>();
    const naviagte = useNavigate();

    const onClick = () => {
        cursor?.removeText();
        work.links.forEach((link) => window.open(link.url, '_blank'));
        // animateExit().then(() => {
        //     naviagte(`/case/${path}`);
        // });
    };
    onMount(async () => {
        await waitUntilLoaded();
        setTimeline(slideUp(imageRef, imageContainer));
        setScrollTigger(
            ScrollTrigger.create({
                trigger: card,
                animation: timeline(),
                start: 'top bottom',
            })
        );
    });

    onCleanup(() => scrollTrigger()?.kill());

    return (
        <div ref={card} id={work.id} class="work-card w-[33vmax] aspect-square flex flex-col justify-center items-start gap-4">
            <div
                onClick={onClick}
                ref={imageContainer}
                onMouseOver={() => {
                    work.card.cursorText && !isExiting() && cursor?.setText(work.card.cursorText);
                    if (videoRef && !isMobile()) {
                        imageRef.classList.add('hidden')
                        videoRef.classList.remove('hidden')
                        work.card.video && videoRef.play()
                    }
                }}
                onMouseLeave={() => {
                    work.card.cursorText && cursor?.removeText();
                    if (videoRef && !isMobile()) {
                        imageRef.classList.remove('hidden')
                        videoRef.classList.add('hidden')
                        work.card.video && videoRef.pause();
                    }
                }}
                class="overflow-hidden h-full w-full"
            >
                <img
                    ref={imageRef}
                    style={{ width: 'max(50vw, 400px)', 'aspect-ratio': '1 / 1' }}
                    class="object-cover"
                    src={work.card.image}
                    alt=""
                />
                {work.card.video != null &&
                    <video
                        ref={videoRef}
                        style={{ width: 'max(50vw, 400px)', 'aspect-ratio': '1 / 1' }}
                        class="object-none hidden"
                        loop
                        muted
                    >
                        <source
                            src={work.card.video} type="video/webm" />
                    </video>
                }

            </div>
            <div class="flex justify-between items-center w-full">
                <span class="text-xl">{work.name}</span>
                <button onClick={onClick}>
                    <Arrow />
                </button>
            </div>

            <span class="mt-4 text-lg text-gray-300">{work.card.description}</span>
        </div>
    );
};

export default WorkCard;
