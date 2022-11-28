import { Component, onMount } from 'solid-js';
import { initGsap } from './utils/initGsap';
import NavBar from './components/NavBar';
import { Scrollbar } from 'smooth-scrollbar/scrollbar';
import Cursor from './components/cursor';
import Hero from './components/Hero';
import ParallaxSection from './components/ParallaxSection';
import Footer from './components/Footer';

export let scroller: Scrollbar;
export let cursor: Cursor;

const App: Component = () => {
    let scrollerRef: HTMLDivElement;
    onMount(() => {
        scroller = initGsap(scrollerRef);
        cursor = new Cursor({
            container: 'body',
            className: 'pt-cursor',
            overwrite: true,
            speed: 0.4,
            skewingDelta: 0.001,
            skewingDeltaMax: 0.15,
            skewingIcon: 3,
            skewingMedia: 2,
            skewingText: 2,
            skewing: 4,
            innerClassName: 'pt-cursor-inner',
            mediaClassName: 'pt-cursor-media',
            mediaBoxClassName: 'pt-media-box',
            mediaState: '-media',
            hideMediaTimeout: 300,
            textClassName: 'pt-cursor-text',
            textState: '-text',
            hideTimeout: 300,
            showTimeout: 20,
            hiddenState: '-hidden',
            activeState: '-active',
            iconState: '-icon',
            iconSvgClassName: 'pt-svgsprite',
            iconSvgNamePrefix: '-',
            iconSvgSrc: '/assets/img/sprites/svgsprites.svg',
            visible: true,
            hideOnLeave: true,
            dataAttr: 'cursor',
            stateDetection: { '-pointer': 'a,button', '-hidden': 'iframe' },
        });
    });

    return (
        <div class="wrapper">
            <NavBar className="mx-auto max-w-[1080px]" />
            <div ref={(r) => (scrollerRef = r)} class="scroller will-change-transform">
                <main class="mx-auto max-w-[1080px]">
                    <Hero />
                    <ParallaxSection zIndex={9}>
                        <Footer />
                    </ParallaxSection>
                </main>
            </div>
        </div>
    );
};

export default App;
