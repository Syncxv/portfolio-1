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
            <ParallaxSection
                onMouseEnter={() => cursor?.inverse()}
                onMouseLeave={() => cursor?.unInverse()}
                onUpdate={(n) => {
                    if (n.progress > 0.96 && !inversed) {
                        navRef.classList.add('-inverse');
                        inversed = true;
                    }
                    if (n.progress < 0.96 && inversed) {
                        navRef.classList.remove('-inverse');
                        inversed = false;
                    }
                }}
                id="contact"
                zIndex={8}
                className="bg-white text-black h-full"
            >
                <Footer />
            </ParallaxSection>
        </>
    );
};
export default Home;
