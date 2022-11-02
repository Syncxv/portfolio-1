import { stagger } from 'motion';
import { createAnimation } from 'motion-signals';
import { createSignal, onMount } from 'solid-js';
import Styles from './NavBar.module.scss';
function NavBar() {
    const [isOpen, setOpen] = createSignal(false);
    const { play, getIsFinished, replay, reset, getAnimateInstance } = createAnimation(
        `.${Styles.bar}`,
        { y: ['-100vh', 0], opacity: 1 },

        {
            delay: stagger(0.3),
            duration: 2,
            easing: [0.22, 0.03, 0.26, 1],
        }
    );

    return (
        <>
            <nav
                class={Styles.nav}
                onClick={() => {
                    isOpen() ? getAnimateInstance()?.reverse() : play();
                    setOpen((prev) => !prev);
                }}
            >
                <button class={Styles.navButton}>
                    <div class={Styles.line1}></div>
                    <div class={Styles.line2}></div>
                    <div class={Styles.line3}></div>
                </button>
            </nav>
            <div class={Styles.Bars}>
                <div class={Styles.bar}></div>
                <div class={Styles.bar}></div>
                <div class={Styles.bar}></div>
            </div>
        </>
    );
}

export default NavBar;
