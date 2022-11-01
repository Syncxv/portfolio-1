import type { Component } from 'solid-js';
import Hero from './components/Hero';
import NavBar from './components/NavBar';

const App: Component = () => {
    return (
        <>
            <NavBar />
            <main>
                <section>
                    <Hero />
                </section>
            </main>
        </>
    );
};

export default App;
