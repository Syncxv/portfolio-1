import { createSignal } from 'solid-js';
import NavPage from '../NavPage';
import Styles from './NavBar.module.scss';
function NavBar() {
    const [isOpen, setOpen] = createSignal(false);
    return (
        <>
            <nav class={Styles.nav} onClick={() => setOpen((prev) => !prev)}>
                <button class={Styles.navButton}>
                    <div class={Styles.line1}></div>
                    <div class={Styles.line2}></div>
                    <div class={Styles.line3}></div>
                </button>
            </nav>
            <NavPage isOpen={isOpen} />
        </>
    );
}

export default NavBar;
