import { createSignal } from 'solid-js';
import { cursor } from '../Layout';
import { navRef } from '../NavBar';
import ParallaxSection from '../ParallaxSection';
import Styles from './Footer.module.scss';

type Props = {};

const Footer = (props: Props) => {
    let [inversed, setInversed] = createSignal(false);
    return (
        <ParallaxSection
            onMouseEnter={() => cursor?.inverse()}
            onMouseLeave={() => cursor?.unInverse()}
            onUpdate={(n) => {
                if (n.progress > 0.96 && !inversed()) {
                    navRef.classList.add('-inverse');
                    setInversed(true);
                }
                if (n.progress < 0.96 && inversed()) {
                    navRef.classList.remove('-inverse');
                    setInversed(false);
                }
            }}
            id="contact"
            zIndex={0}
            className="bg-white text-black h-full"
        >
            <div
                id={Styles.footer}
                class="grid grid-cols-1 gap-8 items-center justify-items-center text-center lg:text-left lg:justify-items-start lg:gap-72"
            >
                <div class="flex flex-col items-center lg:items-start justify-center col-[1 / 3]">
                    <h1 class="text-5xl font-bold">Lets work together</h1>
                    <a
                        onMouseEnter={() => cursor?.addState('-exclusion -open')}
                        onMouseLeave={() => cursor?.removeState('-exclusion -open')}
                        href="/"
                        class="font-semibold text-3xl mt-5"
                    >
                        Contact Me
                    </a>
                </div>
                <div class="contact-grid flex flex-col mt-20 lg:grid lg:grid-cols-2 gap-12 items-center">
                    <div class="email font-bold text-2xl">
                        <p>aruldevarackal1@gmail.com</p>
                    </div>

                    <div class="grid grid-cols-2 gap-12">
                        <a
                            onMouseEnter={() => cursor?.addState('-exclusion -open')}
                            onMouseLeave={() => cursor?.removeState('-exclusion -open')}
                            target="_blank"
                            href="https://www.github.com/Syncxv"
                        >
                            Github
                        </a>
                        <a
                            onMouseEnter={() => cursor?.addState('-exclusion -open')}
                            onMouseLeave={() => cursor?.removeState('-exclusion -open')}
                            target="_blank"
                            href="https://www.github.com/Syncxv"
                        >
                            Github
                        </a>
                        <a
                            onMouseEnter={() => cursor?.addState('-exclusion -open')}
                            onMouseLeave={() => cursor?.removeState('-exclusion -open')}
                            target="_blank"
                            href="https://www.github.com/Syncxv"
                        >
                            Github
                        </a>
                        <a
                            onMouseEnter={() => cursor?.addState('-exclusion -open')}
                            onMouseLeave={() => cursor?.removeState('-exclusion -open')}
                            target="_blank"
                            href="https://www.github.com/Syncxv"
                        >
                            Github
                        </a>
                    </div>
                </div>
            </div>
        </ParallaxSection>
    );
};

export default Footer;
