import { Component } from 'solid-js';
import { cursor } from '../../App';
import Arrow from '../Icons/Arrow';

type Props = {
    name: string;
    description: string;
    image: string;
};

const WorkCard: Component<Props> = ({ name, image, description }) => {
    return (
        <div class="work-card w-[33vmax] aspect-square flex flex-col justify-center items-start gap-4">
            <div
                onMouseOver={() => cursor.setText('Case Study')}
                onMouseLeave={() => cursor.removeText()}
                class="overflow-hidden h-full w-full bg-gray-500"
            >
                <img style={{ width: 'max(50vw, 400px)', 'aspect-ratio': '1 / 1' }} class="object-cover" src={image} alt="" />
            </div>
            <div class="flex justify-between items-center w-full">
                <span class="text-lg">{name}</span>
                <button onMouseOver={() => cursor.setText('CLICK ME')} onMouseLeave={() => cursor.removeText()}>
                    <Arrow />
                </button>
            </div>

            <span class="mt-4 text-sm">{description}</span>
        </div>
    );
};

export default WorkCard;
