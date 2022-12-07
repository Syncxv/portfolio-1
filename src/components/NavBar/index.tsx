import { Component } from 'solid-js';
type Props = { className?: string };

export let navRef!: HTMLDivElement;

const NavBar: Component<Props> = ({ className = ' ' }) => {
    return (
        <>
            <div
                ref={navRef}
                style={{ 'max-width': 'min(2000px, 90vmax)' }}
                class={`navbar flex justify-between py-5 absolute top-0 right-0 left-0 bg-transparent w-screen z-50 px-4 transition-colors duration-200 ease-out mx-auto ${className}`}
            >
                <div class="home">
                    <a href="/" class="mix-blend-difference">
                        Home
                    </a>
                </div>

                <ul class="flex items-center justify-center gap-4">
                    {/* <li>
                        <a href="#about">About</a>
                    </li> */}
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
