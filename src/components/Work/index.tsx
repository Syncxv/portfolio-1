import { Component } from 'solid-js';
import WorkCard from './WorkCard';

type Props = {};

const WorkSection: Component<Props> = ({}) => {
    return (
        <div class="h-auto work-section pt-24">
            <div class="grid grid-cols-2 items-center justify-center gap-[20%]">
                <WorkCard name="hehe" image="https://cdn.cuberto.com/cb/img/services/digital/1.jpg" />
                <WorkCard name="hehe" image="https://cdn.cuberto.com/cb/img/services/digital/1.jpg" />
                <WorkCard name="hehe" image="https://cdn.cuberto.com/cb/img/services/digital/1.jpg" />
            </div>
        </div>
    );
};

export default WorkSection;
