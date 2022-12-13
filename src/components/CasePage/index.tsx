import { useParams } from '@solidjs/router';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Component, createSignal, For, onCleanup, onMount, ParentComponent } from 'solid-js';
import { WORKS } from '../../constants';
import { slideUpOverflow } from '../../utils/slideUpOverflow';
import Footer from '../Footer';
import ParallaxSection from '../ParallaxSection';

const CasePage: Component = () => {
    return <div>hehe not yet</div>;
    // const params = useParams();
    // const work = WORKS.find((w) => w.id === params.id);
    // if (!work) return <div>work not found eh</div>;

    // let heading!: HTMLDivElement;
    // let type!: HTMLParagraphElement;

    // let [scrollTrigger, setScrollTigger] = createSignal<ScrollTrigger>();
    // onMount(() => {
    //     ScrollTrigger.refresh();
    //     setScrollTigger(
    //         ScrollTrigger.create({
    //             trigger: heading,
    //             animation: slideUpOverflow([type, heading], { duration: 1.4, stagger: 0.2 }),
    //             start: 'top bottom',
    //         })
    //     );
    // });

    // onCleanup(() => scrollTrigger()?.kill());
    // return (
    //     <>
    //         <div class="relative z-10">
    //             <header class="relative h-screen w-screen z-20 bg-primary-black">
    //                 <div class="content grid grid-cols-3 justify-items-start p-20 max-w-[90vmax] items-center h-full ">
    //                     <div style={{ 'grid-column': '1/4' }} class="heading ml-8">
    //                         <div class="relative overflow-hidden">
    //                             <p ref={type} class="text-sm align-self-start">
    //                                 {work.type}
    //                             </p>
    //                         </div>
    //                         <div class="relative overflow-hidden">
    //                             <h1 ref={heading} class="text-6xl">
    //                                 {work.caseStudy.heading}
    //                             </h1>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </header>
    //             <ParallaxSection zIndex={10} style={{ height: 'fit-content' }}>
    //                 <img src={work.caseStudy.images[0]} alt="" />
    //             </ParallaxSection>
    //             <div class="content relative z-[9] h-full bg-primary-black">
    //                 <section style={{ 'z-index': 8 }} class="relative h-screen bg-primary-black">
    //                     <ColumnThingy title="Context" content={work.caseStudy.context} />
    //                 </section>
    //                 <For each={work.caseStudy.challanges}>
    //                     {(item, i) => {
    //                         return (
    //                             <>
    //                                 {item.image ? (
    //                                     <>
    //                                         <ParallaxSection zIndex={7 - i()} style={{ height: 'fit-content' }}>
    //                                             <img src={item.image} alt="" />
    //                                         </ParallaxSection>

    //                                         <ParallaxSection zIndex={6 - i()} style={{ height: 'fit-content' }}>
    //                                             <ColumnThingy title={item.title} content={item.content} />
    //                                         </ParallaxSection>
    //                                     </>
    //                                 ) : (
    //                                     <ColumnThingy title={item.title} content={item.content} />
    //                                 )}
    //                             </>
    //                         );
    //                     }}
    //                 </For>
    //             </div>
    //         </div>

    //         <Footer />
    //     </>
    // );
};

interface Props {
    title: string;
    content: string;
}

const ColumnThingy: Component<Props> = ({ title, content }) => {
    return (
        <div class="flex items-center justify-between p-20 gap-20 w-full h-screen-sm">
            <span class="text-2xl">{title}</span>
            <p style={{ 'word-break': 'break-word' }} class="text-xl w-full max-w-screen-xl">
                {content}
            </p>
        </div>
    );
};

export default CasePage;
