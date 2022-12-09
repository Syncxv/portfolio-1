import { Component } from 'solid-js';
import Layout from './components/Layout';
import { AppRouters } from './routing/AppRouter';

const App: Component = () => {
    return (
        <>
            <Layout>
                <AppRouters />
            </Layout>
        </>
    );
};

export default App;
