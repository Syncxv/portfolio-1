import { stagger } from 'motion';
import { createAnimation } from 'motion-signals';
import { createSignal, onMount } from 'solid-js';
import NavPage from '../NavPage';
import Styles from './NavBar.module.scss';

export let delay = 0.4;

function NavBar() {
    const [isOpen, setOpen] = createSignal(false);
    const {
        play: openAnimation,
        getIsFinished,
        getAnimateInstance,
    } = createAnimation(
        `.${Styles.bar}`,
        { y: ['-100vh', 0], opacity: 1 },

        {
            delay: stagger(delay, { from: 'last' }),

            duration: 1,
            easing: [0.22, 0.03, 0.26, 1],
        }
    );
    const {
        play: closeAnimation,
        getIsFinished: finished2,
        getAnimateInstance: instance2,
    } = createAnimation(
        `.${Styles.bar}`,
        { y: [0, '-100vh'], opacity: 1 },

        {
            delay: stagger(delay, { start: 0.5, from: 3 }),

            // endDelay: 0.4,
            duration: 1,
            easing: [0.22, 0.03, 0.26, 1],
        }
    );

    const close = () => {
        isOpen() ? closeAnimation() : openAnimation();
        setOpen((prev) => !prev);
    };
    return (
        <>
            <nav class={Styles.nav}>
                <button disabled={!getIsFinished() || !finished2()} class={Styles.navButton} onClick={() => close()}>
                    <div class={Styles.line1}></div>
                    <div class={Styles.line2}></div>
                    <div class={Styles.line3}></div>
                </button>
            </nav>
            <div class={Styles.Bars}>
                <div class={Styles.bar}></div>
                <div class={Styles.bar}></div>
                <div class={Styles.bar}></div>
                {<NavPage isOpen={isOpen} close={closeAnimation} getFinished={() => !getIsFinished()} />}
            </div>
        </>
    );
}

export default NavBar;
