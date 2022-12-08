import { Scrollbar } from 'smooth-scrollbar/interfaces';
import { onMount, ParentComponent } from 'solid-js';
import { createCurosr } from '../utils/createCursor';
import { initGsap } from '../utils/initGsap';
import Cursor from './cursor';
import NavBar from './NavBar';

interface Props {}

export let scroller: Scrollbar;
export let cursor: Cursor | null;

const Layout: ParentComponent<Props> = ({ children }) => {
    let scrollerRef: HTMLDivElement;

    onMount(() => {
        (window as any).scroller = scroller = initGsap(scrollerRef);
        (window as any).cursor = cursor = createCurosr();
        console.log(children);
    });
    return (
        <div class="wrapper">
            <NavBar />
            <div ref={(r) => (scrollerRef = r)} class="scroller will-change-transform">
                <main class="mx-auto">{children}</main>
            </div>
        </div>
    );
};
export default Layout;
