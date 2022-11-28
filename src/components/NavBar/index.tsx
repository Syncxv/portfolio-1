import { Component } from 'solid-js';
import Styles from './NavBar.module.scss';
type Props = { className?: string };

const NavBar: Component<Props> = ({ className = ' ' }) => {
    return (
        <>
            <div class={`navbar flex justify-between px-16 py-5 absolute inset-0 h-8 top-0 bg-transparent w-screen z-50 ${className}`}>
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
