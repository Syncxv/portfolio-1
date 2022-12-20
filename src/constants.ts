import { RouteDefinition } from '@solidjs/router';
import { lazy } from 'solid-js';

export interface Links {
    label: string;
    url: string;
}
[];

export interface Work {
    readonly id: string;
    readonly name: string;
    readonly caseStudy?: {
        readonly heading: string;
        readonly context: string;
        readonly challanges: {
            video?: string;
            image?: string;
            title: string;
            content: string;
        }[];
        readonly images: string[];
    };
    readonly card: {
        readonly video?: string;
        readonly image?: string;
        readonly description: string;
        readonly cursorText: string | false;
    };
    readonly video?: string;
    readonly type: 'website' | 'editing' | 'development';
    readonly links: Links[];
}

//TODO: make images webp / compress and optimize for web
export const WORKS: Work[] = [
    {
        id: 'twitter-clone',
        name: 'Social Media Web App',
        caseStudy: {
            heading: 'Social Media Next Js Project',
            context:
                'Its 2021 october ish. I was still stuck in india because there was a new variant of coivd at the time called omnicron or something i forgor. I was pretty bored so i decided to learn how full stack applications were made. I started by watching a benawad tutorial on a fullstack reddit clone. Ive tried to make a few full stack websites using his tutorials however they never got finished. HOWEVER THIS PROJECT i commited to finishing (kind of)',
            challanges: [
                {
                    title: 'Creating The Messaging Section',
                    content: `This is by far the hardest part. Even tho ive already done a chat app before this was very difficult. The atual instant messaging (you know the when the other user atually gets the message) was the easy part.
                THE HARD part was managing the scroll. When you scroll up you would want to load more messages right. However when ever the message component mounted the scroll position would be at the top which could cause it to load more messages. So i had to find a way to keep it at the bottom. 
                
                                I fixed this problem by using the useLayoutEffect hook. IT WAS my first time using 
                `,
                },
                { title: 'hehe', content: 'challange 2' },
            ],
            images: ['https://media.discordapp.net/attachments/756761009729044540/1051082255856046150/Slide_16_9_-_1.png'],
        },
        card: {
            description:
                'A Full-Stack Application that is similar to twitter. It uses next js & chakra ui for the frontend and a mongodb, graphql backend.',
            image: 'https://media.discordapp.net/attachments/748017439496732702/1050071593453371432/Frame_2.png',
            cursorText: 'Github',
        },
        type: 'development',
        links: [
            {
                label: 'github',
                url: 'https://github.com/Syncxv/api_v1',
            },
            {
                label: 'github',
                url: 'https://github.com/Syncxv/nextjs-social-media-clone',
            },
        ],
    },

    {
        id: 'falls',
        name: 'Falls',
        type: 'editing',
        card: {
            cursorText: 'Youtube',
            description:
                'A big project for a team called avail maybe idk. But this project taught me a lot about editing. I made this 2 years ago sooooo have mercy',
            video: '/falls.webm',
            image: 'https://media.discordapp.net/attachments/756761009729044540/1052178520320770098/Falls_0-30_screenshot.png',
        },
        links: [{ label: 'Youtube', url: 'https://www.youtube.com/watch?v=mtsFwfG1EnY' }],
    },

    {
        id: 'steamed',
        name: 'Steamed',
        caseStudy: {
            heading: 'Steamed',
            context: `Before i started this project i had a lot of experience in modding the discord client. 
                We usually do it by getting discords functions through the webpackjsonp/webpackchunk in the window object. 
                When i realised steam uses a CEF (Chromium Embeded Framework) I thought i could somehow do the same thing on steam AND THEN i saw steam uses webpack too SO that gave me even more confidence in starting this project. 
                And the rest is history`,
            challanges: [
                {
                    image: 'https://media.discordapp.net/attachments/756761009729044540/1051082255856046150/Slide_16_9_-_1.png',
                    title: 'Figuring out how steam works',
                    content: `Steam has its own gui written in c++ (which i dont know much about). 
                    However Steam also uses chromium to render html. They use a CEF (Chromium Embeded Framework) to render the friends, library, store and some other stuff.
                    After enabling developer tools on the cef i can figure out how the web app was made.`,
                },
                { title: 'A CHALLANGE', content: 'challange 2' },
            ],
            images: ['https://media.discordapp.net/attachments/756761009729044540/1051082255856046150/Slide_16_9_-_1.png'],
        },
        card: {
            description: 'A client mod for the steam desktop client. Still in development and no where near done',
            image: 'https://media.discordapp.net/attachments/748017439496732702/1051128279999991918/steamed.png?width=630&height=630',
            cursorText: 'Case Study',
        },
        type: 'development',
        links: [{ label: 'Youtube', url: 'https://youtu.be/CbpOLuDGuSQ' }],
    },

    {
        id: 'flutter-todo-app',
        name: 'Flutter Todo App',
        type: 'development',
        card: {
            description: 'A simple good lookin todo app (i didnt make the desgin). I love flutter ong',
            cursorText: 'Github',
            image: 'https://cdn.dribbble.com/users/878428/screenshots/15794848/media/ef99358faf464f78fa7654d8e72bc997.png?compress=1',
        },
        links: [
            {
                label: 'Github',
                url: 'https://github.com/Syncxv/flutter-todo-app',
            },
        ],
    },
];

export const routes: RouteDefinition[] = [
    { path: '/', component: lazy(() => import('./components/Home')) },
    { path: '/case/:id', component: lazy(() => import('./components/CasePage')) },
];

export interface Skill {
    name: string;
}

export const Skills = [
    { name: 'Tailwind' },
    { name: 'GSAP' },
    { name: 'npm' },
    { name: 'pnpm' },
    { name: 'yarn' },
    { name: 'Linux' },
    { name: 'Git' },
    { name: 'Dart' },
    { name: 'Flutter' },
    { name: 'typescript' },
    { name: 'C++' },
    { name: 'C' },
    { name: 'Rust' },
    { name: 'CSS/SCSS' },
    { name: 'GraphQL' },
    { name: 'React' },
    { name: 'SolidJs' },
    { name: 'ES5/ES6' },

    { name: 'Python' },
    { name: 'Framer Motion' },
    { name: 'Postgres' },
    { name: 'MongoDB' },
    { name: 'After Effects' },
    { name: 'Premier Pro' },
    { name: 'Photoshop' },
    { name: 'Figma' },
    { name: 'Java' },
    { name: 'Svelte' },
    { name: 'Next JS 12/13' },
    { name: 'NodeJS' },
    { name: 'Docker' },

    { name: 'Redux' },
];
