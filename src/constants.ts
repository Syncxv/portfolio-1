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
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quibusdam commodi necessitatibus natus sunt nisi. Doloribus aperiam quibusdam magni corrupti sunt provident pariatur doloremque similique eligendi vero excepturi delectus rem eius quod temporibus deserunt eveniet est cumque, aspernatur non ab? Et numquam nobis explicabo temporibus qui cupiditate eum nostrum alias.',
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
];

export const routes: RouteDefinition[] = [
    { path: '/', component: lazy(() => import('./components/Home')) },
    { path: '/case/:id', component: lazy(() => import('./components/CasePage')) },
];
