import { Component } from 'solid-js';
import Styles from './NavBar.module.scss';
type Props = { className?: string };

export let navRef!: HTMLDivElement;

const NavBar: Component<Props> = ({ className = ' ' }) => {
    return (
        <>
            <div ref={navRef} class={`navbar flex justify-between py-5 absolute top-0 right-0 left-0 bg-transparent w-screen z-50 px-4 ${className}`}>
                <div class="home">
                    <a href="/" class="mix-blend-difference">
                        Home
                    </a>
                </div>

                <ul class="flex items-center justify-center gap-4">
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#work">Work</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default NavBar;
