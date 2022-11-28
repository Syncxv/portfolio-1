import Styles from './Footer.module.scss';

type Props = {};

const Footer = (props: Props) => {
    return (
        <div id={Styles.footer} class="grid grid-cols-1 gap-72">
            <div class="flex flex-col items-start justify-center col-[1 / 3]">
                <h1 class="text-5xl font-bold">So How was your day</h1>
                <a href="/" class="font-semibold text-3xl mt-5">
                    contact me pls
                </a>
            </div>
            <div class="contant-grid grid grid-cols-2 gap-72 items-center">
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
