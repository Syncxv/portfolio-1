import { createSignal, ParentComponent } from 'solid-js';
import { cursor } from '../Layout';
import { navRef } from '../NavBar';
import ParallaxSection from '../ParallaxSection';
import Styles from './Footer.module.scss';

type Props = {};

const Footer = (props: Props) => {
    let [inversed, setInversed] = createSignal(false);
    return (
        <ParallaxSection
            onMouseOver={() => cursor?.inverse()}
            onMouseOut={() => cursor?.unInverse()}
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
                    <FooterLink href="https://www.github.com/Syncxv">Github</FooterLink>
                    <FooterLink href="https://www.youtube.com/@Sync-Edits">Youtube</FooterLink>
                    <p onMouseEnter={() => cursor?.addState('-exclusion -open')} class="font-bold">
                        aruldevarackal1@gmail.com
                    </p>
                    <p onMouseLeave={() => cursor?.removeState('-exclusion -open')} class="font-bold">
                        Aria#8171
                    </p>
                </div>
            </div>
        </ParallaxSection>
    );
};

export default Footer;

const FooterLink: ParentComponent<{ href: string }> = ({ children, href }) => {
    return (
        <a
            onMouseEnter={() => cursor?.addState('-exclusion -open')}
            onMouseLeave={() => cursor?.removeState('-exclusion -open')}
            target="_blank"
            href={href}
        >
            {children}
        </a>
    );
};
