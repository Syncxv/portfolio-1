interface Links {
    github?: string;
}
interface Work {
    name: string;
    heaidng: string;
    headngImage: string;
    cardImage: string;
    video?: string;
    type: 'website' | 'editing' | 'development';
    links: Links[];
}

export const WORKS: Work[] = [
    // {
    //     name: 'Steam Client Mod',
    // },
];
