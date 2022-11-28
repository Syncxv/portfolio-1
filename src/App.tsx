import { Component, onMount } from 'solid-js';
import { initGsap } from './utils/initGsap';
import ParallaxSection from './components/ParallaxSection';
import Footer from './components/Footer';
import NavBar from './components/Nav/NavBar';
import { Scrollbar } from 'smooth-scrollbar/scrollbar';

export let scroller: Scrollbar;

const App: Component = () => {
    let scrollerRef: HTMLDivElement;
    onMount(() => {
        scroller = initGsap(scrollerRef);
    });

    return (
        <div class="wrapper">
            <NavBar />
            <div ref={(r) => (scrollerRef = r)} class="scroller will-change-transform">
                <main>
                    <section class="flex justify-center relative bg-white text-black z-20">
                        <h1 class="text-9xl">hey</h1>
                    </section>
                    <ParallaxSection zIndex={10} className="bg-black">
                        <img src="https://cdn.cuberto.com/cb/img/ulesson/main.jpg" alt="" />
                    </ParallaxSection>
                    <ParallaxSection zIndex={5} className="pt-20 bg-white text-black">
                        <h1 class="text-9xl">hey</h1>
                    </ParallaxSection>
                    <ParallaxSection zIndex={0}>
                        <Footer />
                    </ParallaxSection>
                </main>
            </div>
        </div>
    );
};

export default App;
