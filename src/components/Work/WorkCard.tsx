import { Component } from 'solid-js';

type Props = {
    name: string;
    image: string;
};

const WorkCard: Component<Props> = ({ name, image }) => {
    return (
        <div class="work-card w-1/2 flex flex-col justify-center items-start gap-4">
            <div class="overflow-hidden h-80 w-80 bg-gray-500">
                {/* <img style={{ width: 'max(50vw, 400px)', 'aspect-ratio': '1 / 1' }} class="object-cover" src={image} alt="" /> */}
            </div>
            <span>{name}</span>
        </div>
    );
};

export default WorkCard;
