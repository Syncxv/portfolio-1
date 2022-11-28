import { Component } from 'solid-js';

type Props = {
    name: string;
    image: string;
};

const WorkCard: Component<Props> = ({ name, image }) => {
    return (
        <div class="work-card flex flex-col justify-center items-center">
            <div class="w-full h-auto overflow-hidden">
                <img style={{ width: 'max(50vw, 400px)', 'aspect-ratio': '1 / 1' }} class="object-cover" src={image} alt="" />
            </div>
            <span>{name}</span>
        </div>
    );
};

export default WorkCard;
