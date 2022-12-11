import { Scrollbar } from 'smooth-scrollbar/interfaces';
import { onMount, ParentComponent } from 'solid-js';
import { createCurosr } from '../utils/createCursor';
import { initGsap } from '../utils/initGsap';
import { whichTransitionEvent } from '../utils/whichTransition';
import Cursor from './cursor';
import NavBar from './NavBar';

interface Props {}

export let scroller: Scrollbar;
export let cursor: Cursor | null;
export let mainRef!: HTMLElement;

export const animateExit = () => {
    return new Promise((res) => {
        mainRef.classList.add('page-exit-active');

        var transitionEnd = whichTransitionEvent();
        mainRef.addEventListener(transitionEnd!, onTransitionEnd, false);

        function onTransitionEnd() {
            scroller.setPosition(0, 0);
            mainRef.classList.remove('page-exit-active');
            mainRef.removeEventListener(transitionEnd!, onTransitionEnd);
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
        <div class="wrapper">
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
