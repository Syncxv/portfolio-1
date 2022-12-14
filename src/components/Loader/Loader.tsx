import { createSignal, onMount, ParentComponent } from 'solid-js';
import gsap from 'gsap';
import Classes from './Loader.module.scss';

export const [isLoaderExiting, setLoaderExiting] = createSignal<boolean>(false);
const [_timeline, setTimeline] = createSignal<gsap.core.Timeline>();

export const animateLoaderExit = () => {
    return _timeline()!.to(mainLoader, { backgroundSize: '500px 500px', duration: 1 }, 2).to(h1, { y: 200, duration: 0.5, ease: 'power.out' }, 2);
};

let h1!: HTMLHeadingElement;
let mainLoader!: HTMLDivElement;

interface Props {}
export const Loader: ParentComponent<Props> = ({ children }) => {
    onMount(() => {
        let timeline = setTimeline(gsap.timeline());
        timeline.fromTo(h1, { y: 200 }, { y: 0, duration: 1.5, ease: 'power3.out' }, 0.4);
    });

    return (
        <div class={`${Classes.BRUH}loader grid place-content-center items-center justify-items-center h-screen w-screen`}>
            <div ref={mainLoader} class="relative overflow-hidden p-8">
                <h1 ref={h1} class="text-9xl">
                    Loading
                </h1>
            </div>
        </div>
    );
};
