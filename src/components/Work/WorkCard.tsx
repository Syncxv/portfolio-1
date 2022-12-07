import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Component, onMount } from 'solid-js';
import { cursor } from '../../App';
import Arrow from '../Icons/Arrow';

type Props = {
    name: string;
    description: string;
    image: string;
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

const WorkCard: Component<Props> = ({ name, image, description }) => {
    let imageRef!: HTMLImageElement;
    let imageContainer!: HTMLDivElement;
    let card!: HTMLDivElement;
    onMount(() => {
        ScrollTrigger.create({
            trigger: card,
            animation: slideUp(imageRef, imageContainer),
            start: 'top bottom',
        });
    });
    return (
        <div ref={card} class="work-card w-[33vmax] aspect-square flex flex-col justify-center items-start gap-4">
            <div
                ref={imageContainer}
                onMouseOver={() => cursor.setText('Case Study')}
                onMouseLeave={() => cursor.removeText()}
                class="overflow-hidden h-full w-full"
            >
                <img ref={imageRef} style={{ width: 'max(50vw, 400px)', 'aspect-ratio': '1 / 1' }} class="object-cover" src={image} alt="" />
            </div>
            <div class="flex justify-between items-center w-full">
                <span class="text-lg">{name}</span>
                <button onMouseOver={() => cursor.setText('CLICK ME')} onMouseLeave={() => cursor.removeText()}>
                    <Arrow />
                </button>
            </div>

            <span class="mt-4 text-sm">{description}</span>
        </div>
    );
};

export default WorkCard;
