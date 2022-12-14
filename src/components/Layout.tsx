import { Scrollbar } from 'smooth-scrollbar/interfaces';
import { createEffect, createSignal, onMount, ParentComponent } from 'solid-js';
import { WORKS } from '../constants';
import { createCurosr } from '../utils/createCursor';
import { initGsap } from '../utils/initGsap';
import { loadImage } from '../utils/loadImage';
import { whichTransitionEvent } from '../utils/whichTransition';
import Cursor from './cursor';
import { Loader } from './Loader';
import NavBar from './NavBar';

interface Props {}

export let scroller: Scrollbar;
export let cursor: Cursor | null;
export let mainRef!: HTMLElement;

export const [isExiting, setExiting] = createSignal(false);

export const [timelines, setTimelines] = createSignal<gsap.core.Timeline[]>([]);

export const [isLoading, setLoading] = createSignal<boolean>(true);

export const animateExit = () => {
    return new Promise((res) => {
        setExiting(true);
        mainRef.classList.add('page-exit-active');

        var transitionEnd = whichTransitionEvent();
        mainRef.addEventListener(transitionEnd!, onTransitionEnd, false);

        function onTransitionEnd() {
            scroller.setPosition(0, 0);
            mainRef.classList.remove('page-exit-active');
            mainRef.removeEventListener(transitionEnd!, onTransitionEnd);
            setExiting(false);
            res(true);
        }
    });
};

const Layout: ParentComponent<Props> = ({ children }) => {
    let scrollerRef!: HTMLDivElement;
    (window as any).timelines = timelines;
    onMount(() => {
        Promise.all(WORKS.map((w) => loadImage(w.card.image)))
            .then(() => (setLoading(false), setTimeout(() => ScrollTrigger.refresh(true), 1)))
            .catch((err) => console.error('failed loading iamges', err));
        (window as any).scroller = scroller = initGsap(scrollerRef);
        (window as any).cursor = cursor = createCurosr();
    });
    return (
        <div class="wrapper">
            <NavBar />
            <div ref={scrollerRef} class="scroller will-change-transform">
                <main ref={mainRef} class="mx-auto">
                    {isLoading() ? <Loader /> : children}
                </main>
            </div>
        </div>
    );
};
export default Layout;
