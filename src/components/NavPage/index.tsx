import { Accessor, Component } from 'solid-js';
import Styles from './NavPage.module.scss';
const NavPage: Component<{ isOpen: Accessor<boolean> }> = ({ isOpen }) => {
    return (
        <div class={`${Styles.absoluteWrapper} ${isOpen() ? Styles.open : ''}`}>
            <div class={`${Styles.navPage} `}>
                <h2 class={Styles.navHeading}>NAVIGATION</h2>
                <ul class={Styles.navButtons}>
                    <li class={Styles.navBtn}>
                        <a class={Styles.text} href="#Home">
                            Home
                        </a>
                    </li>
                    <li class={Styles.navBtn}>
                        <a class={Styles.text} href="#About">
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
