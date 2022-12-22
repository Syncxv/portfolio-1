import gsap from 'gsap';
import { Component, onMount } from 'solid-js';
import Arrow from './Icons/Arrow';
import { cursor, scroller } from './Layout';

interface Props {
    className?: string;
    onClick?: () => void;
}

const ArrowDownButton: Component<Props> = ({ className = '', onClick = () => {} }) => {
    let btn!: HTMLButtonElement;
    onMount(() => {
        console.log('WAHT', btn);
        const timeline = gsap.timeline();
        timeline.fromTo(
            btn.firstChild,
            { y: '200%' },
            {
                y: '0%',
                ease: 'power3.out',
                duration: 1.8,
                stagger: 0.15,
            },
            0.3
        );
    });
    return (
        <button
            ref={btn}
            onMouseEnter={() => cursor?.addState('-exclusion -open')}
            onMouseLeave={() => cursor?.removeState('-exclusion -open')}
            onClick={onClick}
            class={`absolute bottom-1/8 overflow-hidden ${className}`}
        >
            <Arrow style={{ transform: 'rotate(90deg)' }} />
        </button>
    );
};
export default ArrowDownButton;
