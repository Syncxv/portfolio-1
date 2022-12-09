import { RouteDefinition } from '@solidjs/router';
import { lazy } from 'solid-js';

interface Links {
    github?: string;
}
interface Work {
    id: string;
    name: string;
    caseStudy: {
        heading: string;
        basicInfo: string;
        whatILearnt: string;
    };
    card: {
        image: string;
        description: string;
    };
    video?: string;
    type: 'website' | 'editing' | 'development';
    links: Links[];
}

export const WORKS: Work[] = [
    {
        id: 'twitter-clone',
        name: 'Twitter Clone',
        caseStudy: {
            heading: 'Social Media Next Js Project',
            basicInfo: '',
            whatILearnt: '',
        },
        card: {
            description:
                'A Full-Stack Application that is similar to twitter. It uses next js & chakra ui for the frontend and a mongodb, graphql backend',
            image: 'https://media.discordapp.net/attachments/748017439496732702/1050071593453371432/Frame_2.png',
        },
        type: 'development',
        links: [{ github: 'hehe' }],
    },
];

export const routes: RouteDefinition[] = [
    { path: '/', component: lazy(() => import('./components/Home')) },
    { path: '/case/:id', component: lazy(() => import('./components/CasePage')) },
];
