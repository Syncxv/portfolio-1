import Styles from './NavBar.module.scss';
function NavBar() {
    return (
        <nav class={Styles.nav}>
            <button class={Styles.navButton}>
                <div class={Styles.line1}></div>
                <div class={Styles.line2}></div>
                <div class={Styles.line3}></div>
            </button>
        </nav>
    );
}

export default NavBar;
