import { isLoading } from '../components/Layout';
import { sleep } from './sleep';

export const waitUntilLoaded = async () => {
    (window as any).sleep = sleep;
    while (isLoading()) await sleep(10);

    return true;
};
