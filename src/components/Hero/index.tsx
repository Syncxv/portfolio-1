import { Component } from 'solid-js';
import Footer from '../Footer';
import ParallaxSection from '../ParallaxSection';

type Props = {};

const Hero: Component<Props> = (props) => {
    return (
        <>
            <section class="flex justify-center relative bg-primary-black text-white z-20">
                <h1 class="text-9xl">hey</h1>
            </section>
            <ParallaxSection zIndex={10}>
                <img src="https://cdn.cuberto.com/cb/img/ulesson/main.jpg" alt="" />
            </ParallaxSection>
            <ParallaxSection zIndex={5} className="pt-20 bg-white text-black">
                <h1 class="text-9xl">hey</h1>
            </ParallaxSection>
            <ParallaxSection zIndex={0}>
                <Footer />
            </ParallaxSection>
        </>
    );
};

export default Hero;
