import Styles from './NavBar.module.scss';
type Props = {};

const NavBar = (props: Props) => {
    return (
        <>
            <div class={`navbar flex justify-between p-5 absolute top-0 bg-transparent w-screen z-50 text-black `}>
                <div class="logo">
                    <span class="mix-blend-difference">A</span>
                </div>
            </div>
        </>
    );
};

export default NavBar;
