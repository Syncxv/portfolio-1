import { useNavigate } from '@solidjs/router';
import { Component, ParentComponent } from 'solid-js';
import { animateExit, cursor, scroller } from '../Layout';
type Props = { className?: string };

const NavBar: Component<Props> = ({ className = ' ' }) => {
    const navigate = useNavigate();
    return (
        <nav
            style={{ 'max-width': 'min(2000px, 90vmax)' }}
            class={`navbar mix-blend-difference pointer-events-none flex justify-between py-5 absolute top-0 right-0 left-0 bg-transparent w-screen z-50 px-4 transition-colors duration-200 ease-out mx-auto ${className}`}
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

            <ul
                onMouseEnter={() => cursor?.addState('-exclusion -open')}
                onMouseLeave={() => cursor?.removeState('-exclusion -open')}
                class="flex items-center justify-center gap-4 pointer-events-auto"
            >
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
