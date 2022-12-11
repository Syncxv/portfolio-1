import { RouteDefinition } from '@solidjs/router';
import { lazy } from 'solid-js';

interface Links {
    github?: string;
}
interface Work {
    readonly id: string;
    readonly name: string;
    readonly caseStudy: {
        readonly heading: string;
        readonly context: string;
        readonly challanges: string[];
        readonly images: string[];
    };
    readonly card: {
        readonly image: string;
        readonly description: string;
    };
    readonly video?: string;
    readonly type: 'website' | 'editing' | 'development';
    readonly links: Links[];
}

//TODO: make images webp / compress and optimize for web
export const WORKS: Work[] = [
    {
        id: 'twitter-clone',
        name: 'Twitter Clone',
        caseStudy: {
            heading: 'Social Media Next Js Project',
            context:
                'Its 2021 october ish. I was still stuck in india. There was a new variant of coivd at the time called omnicorn or something i forgor. I was pretty bored so i decided to learn how full stack applications are made. I learned so much while making this project. This is probably one of my biggest projects yet',
            challanges: ['challange 1', 'challange 2'],
            images: ['https://media.discordapp.net/attachments/756761009729044540/1051082255856046150/Slide_16_9_-_1.png'],
        },
        card: {
            description:
                'A Full-Stack Application that is similar to twitter. It uses next js & chakra ui for the frontend and a mongodb, graphql backend',
            image: 'https://media.discordapp.net/attachments/748017439496732702/1050071593453371432/Frame_2.png',
        },
        type: 'development',
        links: [{ github: 'hehe' }],
    },

    {
        id: 'steamed',
        name: 'Steamed',
        caseStudy: {
            heading: 'Steamed',
            context:
                'Before i started this project i had a lot of experience in modding the discord client. We usually do it by getting discords functions through the webpackjsonp/webpackchunk in the window object. When i realised steam uses a CEF (Chromium Embeded Framework) I thought i could somehow do the same thing on steam AND THEN i saw steam uses webpack too SO that gave me even more confidence in starting this project. And the rest is history',
            challanges: ['challange 1', 'challange 2'],
            images: ['https://media.discordapp.net/attachments/756761009729044540/1051082255856046150/Slide_16_9_-_1.png'],
        },
        card: {
            description: 'A client mod for the steam desktop client.',
            image: 'https://media.discordapp.net/attachments/748017439496732702/1051128279999991918/steamed.png?width=630&height=630',
        },
        type: 'development',
        links: [{ github: 'hehe' }],
    },
];

export const routes: RouteDefinition[] = [
    { path: '/', component: lazy(() => import('./components/Home')) },
    { path: '/case/:id', component: lazy(() => import('./components/CasePage')) },
];
