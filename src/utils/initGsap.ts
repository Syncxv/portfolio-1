import Scrollbar from 'smooth-scrollbar';
import SoftScrollPlugin from './SoftScroll';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { isMobile } from './isMobile';
import { setTimelines } from '../components/Layout';

export const initGsap = (scrollerRef: HTMLDivElement) => {
    console.log('INTIALIZING GSAP AND SCROLLBAR');
    gsap.registerPlugin(ScrollTrigger);
    let oldTimeline = gsap.timeline;
    gsap.timeline = (vars: gsap.TimelineVars | undefined) => {
        let timeline = oldTimeline(vars);
        console.log('GOT NEW TIMELINE', timeline);
        setTimelines((prev) => [...prev, timeline]);
        return timeline;
    };
    (window as any).ScrollTrigger = ScrollTrigger;
    if (!isMobile()) Scrollbar.use(SoftScrollPlugin);
    const scroller = ((window as any).scroller = Scrollbar.init(scrollerRef, {
        continuousScrolling: false,
        damping: 0.12,
        renderByPixels: true,
    }));
    // Tell ScrollTrigger to use these proxy getter/setter methods for the "body" element:
    ScrollTrigger.scrollerProxy('body', {
        scrollTop(value) {
            if (arguments.length) {
                //@ts-ignore
                scroller.scrollTop = value;
            }
            return scroller.scrollTop;
        },
        getBoundingClientRect: function () {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: 'transform',
    });
    scroller.addListener(ScrollTrigger.update);
    return scroller;
};
