import { Component, lazy } from 'solid-js';
import { Route, Routes } from '@solidjs/router';
import Layout from './components/Layout';

const CasePage = lazy(() => import('./components/CasePage'));
const Home = lazy(() => import('./components/Home'));

const App: Component = () => {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path="/" component={Home} />
                    <Route path="/case/:id" component={CasePage} />
                </Routes>
            </Layout>
        </>
    );
};

export default App;
