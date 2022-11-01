import Styles from './Hero.module.scss';

function Hero() {
    return (
        <div class={Styles.hero}>
            <h1 class={Styles.MyNAME}>
                <span class={Styles.arul}>Arul</span>
                <br />
                <span class={Styles.dev}>Dev</span>
            </h1>
        </div>
    );
}

export default Hero;
