import { Component } from 'solid-js';
import WorkCard from './WorkCard';

type Props = {};

const WorkSection: Component<Props> = ({}) => {
    return (
        <section class="bg-primary-black">
            <div class="work-section">
                <div
                    style={{ 'grid-template-columns': 'repeat(auto-fit, minmax(20rem, 0.1fr))' }}
                    class="grid items-center justify-center gap-[20%] max-w-screen-2xl mx-auto"
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
