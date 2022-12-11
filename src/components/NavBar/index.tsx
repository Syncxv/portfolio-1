import { useNavigate } from '@solidjs/router';
import { Component } from 'solid-js';
import { animateExit, scroller } from '../Layout';
type Props = { className?: string };

export let navRef!: HTMLDivElement;

const NavBar: Component<Props> = ({ className = ' ' }) => {
    const navigate = useNavigate();
    return (
        <>
            <div
                ref={navRef}
                style={{ 'max-width': 'min(2000px, 90vmax)' }}
                class={`navbar flex justify-between py-5 absolute top-0 right-0 left-0 bg-transparent w-screen z-50 px-4 transition-colors duration-200 ease-out mx-auto ${className}`}
            >
                <div class="home">
                    <button
                        onClick={() =>
                            location.pathname === '/'
                                ? scroller.scrollIntoView(document.getElementById('home')!)
                                : animateExit().then(() => navigate('/'))
                        }
                        class="mix-blend-difference"
                    >
                        Home
                    </button>
                </div>

                <ul class="flex items-center justify-center gap-4">
                    <button
                        onClick={() =>
                            location.pathname === '/'
                                ? scroller.scrollIntoView(document.getElementById('work')!)
                                : animateExit().then(() => navigate('/'))
                        }
                    >
                        Work
                    </button>
                    <button
                        onClick={() =>
                            location.pathname === '/'
                                ? scroller.scrollIntoView(document.getElementById('contact')!)
                                : animateExit().then(() => navigate('/'))
                        }
                    >
                        Contact
                    </button>
                </ul>
            </div>
        </>
    );
};

export default NavBar;
