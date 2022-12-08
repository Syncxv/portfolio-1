import { Component, onMount } from 'solid-js';
import { initGsap } from './utils/initGsap';
import NavBar, { navRef } from './components/NavBar';
import { Scrollbar } from 'smooth-scrollbar/scrollbar';
import Cursor from './components/cursor';
import Hero from './components/Hero';
import ParallaxSection from './components/ParallaxSection';
import Footer from './components/Footer';
import WorkSection from './components/Work';
import { createCurosr } from './utils/createCursor';
import { isMobile } from './utils/isMobile';

export let scroller: Scrollbar;
export let cursor: Cursor | null;

const App: Component = () => {
    let scrollerRef: HTMLDivElement;
    let inversed = false;
    onMount(() => {
        (window as any).scroller = scroller = initGsap(scrollerRef);
        (window as any).cursor = cursor = createCurosr();
        if (isMobile()) {
            scroller.addListener((n) => {
                if (n.offset.y > 1454 && !inversed) {
                    navRef.classList.add('-inverse');
                    inversed = true;
                }
                if (n.offset.y < 1454 && inversed) {
                    navRef.classList.remove('-inverse');
                    inversed = false;
                }
            });
        }
    });

    return (
        <div class="wrapper">
            <NavBar />
            <div ref={(r) => (scrollerRef = r)} class="scroller will-change-transform">
                <main class="mx-auto">
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
                        zIndex={8}
                        className="bg-white text-black"
                    >
                        <Footer />
                    </ParallaxSection>
                </main>
            </div>
        </div>
    );
};

export default App;
