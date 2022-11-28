import { Component, onMount } from 'solid-js';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import { initGsap } from './utils/initGsap';
import type { Scrollbar } from 'smooth-scrollbar/scrollbar';
import ParallaxSection from './components/ParallaxSection';

export let scroller: Scrollbar;

const App: Component = () => {
    let scrollerRef: HTMLDivElement;
    onMount(() => {
        scroller = initGsap(scrollerRef);
    });
    return (
        <>
            <NavBar />
            <div ref={(r) => (scrollerRef = r)} class="scroller will-change-transform">
                <main>
                    <ParallaxSection zIndex={10}>
                        <Hero />
                    </ParallaxSection>
                    <ParallaxSection zIndex={9}>
                        <span>hey</span>
                    </ParallaxSection>
                </main>
            </div>
        </>
    );
};

export default App;
