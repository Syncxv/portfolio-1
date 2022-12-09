import { Route, Routes } from '@solidjs/router';
import { For } from 'solid-js';
import { routes } from '../constants';

export const AppRouters = () => {
    return (
        <Routes>
            <For each={routes}>{(route) => <Route path={route.path} component={route.component} data={route.data} />}</For>
            <Route path="/*all" element={<div>Page not found :(</div>} />
        </Routes>
    );
};
