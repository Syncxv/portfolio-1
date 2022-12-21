import { Component } from 'solid-js';
import Footer from '../Footer';
import Hero from '../Hero';
import WorkSection from '../Work';
import { About } from '../About';
interface Props {}

const Home: Component<Props> = () => {
    return (
        <>
            <div class="relative z-10">
                <Hero />
                <About />
                <WorkSection />
            </div>
            <Footer />
        </>
    );
};
export default Home;
