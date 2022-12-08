interface Links {
    github?: string;
}
interface Work {
    id: string;
    name: string;
    cardImage: string;
    cardDescription: string;
    video?: string;
    type: 'website' | 'editing' | 'development';
    links: Links[];
}

export const WORKS: Work[] = [
    {
        id: 'twitter-clone',
        name: 'Twitter Clone',
        cardDescription:
            'A Full-Stack Application that is similar to twitter. It uses next js & chakra ui for the frontend and a mongodb, graphql backend',
        cardImage: 'https://media.discordapp.net/attachments/748017439496732702/1050071593453371432/Frame_2.png',
        type: 'development',
        links: [{ github: 'hehe' }],
    },
];
