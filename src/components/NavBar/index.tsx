import { useNavigate } from '@solidjs/router';
import { Component, createSignal, onMount, ParentComponent } from 'solid-js';
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
                if (percent > 79.1 && !inversed()) {
                    navRef.classList.add('-inverse');
                    setInversed(true);
                }
                if (percent < 79.1 && inversed()) {
                    navRef.classList.remove('-inverse');
                    setInversed(false);
                }
            });
        }
    });
    return (
        <nav
            ref={navRef}
            style={{ 'max-width': 'min(2000px, 90vmax)' }}
            class={`navbar pointer-events-none flex justify-between py-5 absolute top-0 right-0 left-0 bg-transparent w-screen z-50 px-4 transition-colors duration-200 ease-out mx-auto ${className}`}
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
                    class="mix-blend-difference pointer-events-auto"
                >
                    Home
                </button>
            </div>

            <ul class="flex items-center justify-center gap-4 pointer-events-auto">
                <NavLink type="id" elemId="work">
                    Work
                </NavLink>
                <NavLink type="id" elemId="contact">
                    Contact
                </NavLink>
            </ul>
        </nav>
    );
};

export default NavBar;

interface NavLinkId {
    type: 'id';
    elemId: string;
}

interface NavLinkName {
    type: 'name';
    path: string;
}

type NavLinkProps = NavLinkId | NavLinkName;

function isNavId(example: NavLinkProps): example is NavLinkId {
    return example.type === 'id';
}

const NavLink: ParentComponent<NavLinkProps> = ({ children, ...props }) => {
    const navigate = useNavigate();
    if (isNavId(props)) {
        return (
            <button
                onMouseEnter={() => cursor?.addState('-exclusion -open')}
                onMouseLeave={() => cursor?.removeState('-exclusion -open')}
                onClick={() =>
                    location.pathname === '/'
                        ? scroller.scrollIntoView(document.getElementById(props.elemId)!)
                        : animateExit().then(() => navigate('/'))
                }
            >
                {children}
            </button>
        );
    }
    return (
        <a href={props.path} onMouseEnter={() => cursor?.addState('-exclusion -open')} onMouseLeave={() => cursor?.removeState('-exclusion -open')}>
            {children}
        </a>
    );
};
