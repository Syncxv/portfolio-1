import { Component } from 'solid-js';
import { scroller } from '../../App';
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
                    <button onClick={() => scroller.scrollIntoView(document.getElementById('home')!)} class="mix-blend-difference">
                        Home
                    </button>
                </div>

                <ul class="flex items-center justify-center gap-4">
                    {/* <li>
                        <a href="#about">About</a>
                    </li> */}
                    <button onClick={() => scroller.scrollIntoView(document.getElementById('work')!)}>Work</button>
                    <button onClick={() => scroller.scrollIntoView(document.getElementById('contact')!)}>Contact</button>
                </ul>
            </div>
        </>
    );
};

export default NavBar;
