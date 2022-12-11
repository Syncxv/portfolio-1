import { Component } from 'solid-js';
import Footer from '../Footer';
import Hero from '../Hero';
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
