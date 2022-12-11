import { Component } from 'solid-js';
import { cursor } from '../Layout';
import Footer from '../Footer';
import Hero from '../Hero';
import { navRef } from '../NavBar';
import ParallaxSection from '../ParallaxSection';
import WorkSection from '../Work';

interface Props {}

const Home: Component<Props> = () => {
    let inversed: boolean = false;
    return (
        <>
            <div class="relative z-10">
                <Hero />
                <WorkSection />
            </div>
            <Footer />
        </>
    );
};
export default Home;
