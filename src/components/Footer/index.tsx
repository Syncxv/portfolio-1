import Styles from './Footer.module.scss';

type Props = {};

const Footer = (props: Props) => {
    return (
        <div
            id={Styles.footer}
            class="grid grid-cols-1 gap-8 items-center justify-items-center text-center lg:text-left lg:justify-items-start lg:gap-72"
        >
            <div class="flex flex-col items-center lg:items-start justify-center col-[1 / 3]">
                <h1 class="text-5xl font-bold">Lets work together</h1>
                <a href="/" class="font-semibold text-3xl mt-5">
                    Contact Me
                </a>
            </div>
            <div class="contant-grid flex flex-col mt-20 lg:grid lg:grid-cols-2 gap-12 items-center">
                <div class="email font-bold text-2xl">
                    <p>aruldevarackal1@gmail.com</p>
                </div>

                <div class="grid grid-cols-2 gap-12">
                    <a target="_blank" href="https://www.github.com/Syncxv">
                        Github
                    </a>
                    <a target="_blank" href="https://www.github.com/Syncxv">
                        Github
                    </a>
                    <a target="_blank" href="https://www.github.com/Syncxv">
                        Github
                    </a>
                    <a target="_blank" href="https://www.github.com/Syncxv">
                        Github
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
