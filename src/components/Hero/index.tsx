import { Component } from 'solid-js';

type Props = {};

const Hero: Component<Props> = (props) => {
    return (
        <>
            <section class="flex justify-center relative bg-primary-black text-white z-20">
                <div class="wrapper absolute top-1/3">
                    <p class="text-xl">Aruldev Arackal</p>
                    <h1 class="text-8xl">Video Editor</h1>
                    <h1 class="text-8xl ml-16 ">UI Developer</h1>
                </div>
            </section>
        </>
    );
};

export default Hero;
