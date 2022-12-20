import { Scrollbar } from 'smooth-scrollbar/interfaces';
import { createEffect, createSignal, onMount, ParentComponent, Show } from 'solid-js';
import { WORKS } from '../constants';
import { createCurosr } from '../utils/createCursor';
import { initGsap } from '../utils/initGsap';
import { loadImage } from '../utils/loadImage';
import { whichTransitionEvent } from '../utils/whichTransition';
import Cursor from './cursor';
import { animateLoaderExit, Loader } from './Loader/Loader';
import NavBar from './NavBar';

interface Props {}

export let scroller: Scrollbar;
export let cursor: Cursor | null;
export let mainRef!: HTMLElement;

export const [isExiting, setExiting] = createSignal(false);

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
    onMount(() => {
        (window as any).scroller = scroller = initGsap(scrollerRef);
        (window as any).cursor = cursor = createCurosr();
    });
    return (
        <div class="wrapper text-light-bg-light-200">
            <NavBar />
            <div ref={scrollerRef} class="scroller will-change-transform">
                <main ref={mainRef} class="mx-auto">
                    {children}
                </main>
            </div>
        </div>
    );
};
export default Layout;
