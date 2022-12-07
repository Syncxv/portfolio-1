import { Component } from 'solid-js';
import WorkCard from './WorkCard';

interface Props {}

const WorkSection: Component<Props> = ({}) => {
    return (
        <section class="bg-primary-black h-full z-50">
            <div class="work-section pb-[5rem]">
                <div
                    style={{ 'grid-template-columns': 'repeat(auto-fit, minmax(33vmax, 0.1fr))' }}
                    class="grid items-center justify-center gap-[10rem]"
                >
                    <WorkCard description="really cool stuff" name="hehe" image="https://cdn.cuberto.com/cb/img/services/digital/1.jpg" />
                    <WorkCard description="really cool stuff" name="hehe" image="https://cdn.cuberto.com/cb/img/services/digital/1.jpg" />
                    <WorkCard description="really cool stuff" name="hehe" image="https://cdn.cuberto.com/cb/img/services/digital/1.jpg" />
                </div>
            </div>
        </section>
    );
};

export default WorkSection;
