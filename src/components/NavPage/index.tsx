import { createAnimation } from 'motion-signals';
import { Accessor, Component, createEffect } from 'solid-js';
import { delay } from '../NavBar';
import Styles from './NavPage.module.scss';
const NavPage: Component<{ isOpen: Accessor<boolean>; getFinished: () => boolean; close: () => void }> = ({ isOpen, getFinished, close }) => {
    const headingAnimation = createAnimation(
        `.${Styles.navHeading}`,
        { y: [-100, 0], opacity: [0, 1] },
        {
            delay: delay * 3,
            duration: 1,
            easing: [0.22, 0.03, 0.26, 1],
        }
    );

    createEffect(() => {
        isOpen() && getFinished() && headingAnimation.play();
        !isOpen() && headingAnimation.getAnimateInstance()?.reverse();
    });

    return (
        <div class={`${Styles.absoluteWrapper}`}>
            <div class={`${Styles.navPage} ${isOpen() ? Styles.open : ''}`}>
                <h2 class={Styles.navHeading}>NAVIGATION</h2>
                <ul class={Styles.navButtons}>
                    <li class={Styles.navBtn}>
                        <a class={Styles.text} href="#Home">
                            Home
                        </a>
                    </li>
                    <li class={Styles.navBtn}>
                        <a onClick={close} class={Styles.text} href="#About">
                            About
                        </a>
                    </li>
                    <li class={Styles.navBtn}>
                        <a class={Styles.text} href="#Projects">
                            Projects
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavPage;
