import { useNavigate } from '@solidjs/router';
import { Component, createSignal, onMount } from 'solid-js';
import { isMobile } from '../../utils/isMobile';
import { animateExit, cursor, scroller } from '../Layout';
type Props = { className?: string };

export let navRef!: HTMLDivElement;

const NavBar: Component<Props> = ({ className = ' ' }) => {
    const navigate = useNavigate();
    let [inversed, setInversed] = createSignal(false);
    onMount(() => {
        if (isMobile()) {
            scroller.addListener((n) => {
                if (location.pathname !== '/') return;
                const percent = (n.offset.y / scroller.size.content.height) * 100;
                console.log(percent);
                if (percent > 69.9 && !inversed()) {
                    navRef.classList.add('-inverse');
                    setInversed(true);
                }
                if (percent < 69.9 && inversed()) {
                    navRef.classList.remove('-inverse');
                    setInversed(false);
                }
            });
        }
    });
    return (
        <>
            <div
                ref={navRef}
                style={{ 'max-width': 'min(2000px, 90vmax)' }}
                class={`navbar flex justify-between py-5 absolute top-0 right-0 left-0 bg-transparent w-screen z-50 px-4 transition-colors duration-200 ease-out mx-auto ${className}`}
            >
                <div class="home">
                    <button
                        onMouseEnter={() => cursor?.addState('-exclusion -open')}
                        onMouseLeave={() => cursor?.removeState('-exclusion -open')}
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
                        onMouseEnter={() => cursor?.addState('-exclusion -open')}
                        onMouseLeave={() => cursor?.removeState('-exclusion -open')}
                        onClick={() =>
                            location.pathname === '/'
                                ? scroller.scrollIntoView(document.getElementById('work')!)
                                : animateExit().then(() => navigate('/'))
                        }
                    >
                        Work
                    </button>
                    <button
                        onMouseEnter={() => cursor?.addState('-exclusion -open')}
                        onMouseLeave={() => cursor?.removeState('-exclusion -open')}
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
