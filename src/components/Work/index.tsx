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
                    <WorkCard
                        description="A Full-Stack Application that is similar to twitter. It uses next js & chakra ui for the frontend and a mongodb, graphql backend"
                        name="Twitter Clone"
                        image="https://media.discordapp.net/attachments/748017439496732702/1050071593453371432/Frame_2.png"
                    />
                    <WorkCard
                        description="really cool stuff"
                        name="hehe"
                        image="https://media.discordapp.net/attachments/748017439496732702/1050071593453371432/Frame_2.png?width=630&height=630"
                    />
                    <WorkCard
                        description="really cool stuff"
                        name="hehe"
                        image="https://media.discordapp.net/attachments/748017439496732702/1050071593453371432/Frame_2.png?width=630&height=630"
                    />
                    <WorkCard
                        description="really cool stuff"
                        name="hehe"
                        image="https://media.discordapp.net/attachments/748017439496732702/1050071593453371432/Frame_2.png?width=630&height=630"
                    />

                    <WorkCard
                        description="really cool stuff"
                        name="hehe"
                        image="https://media.discordapp.net/attachments/748017439496732702/1050071593453371432/Frame_2.png?width=630&height=630"
                    />

                    <WorkCard
                        description="really cool stuff"
                        name="hehe"
                        image="https://media.discordapp.net/attachments/748017439496732702/1050071593453371432/Frame_2.png?width=630&height=630"
                    />

                    <WorkCard
                        description="really cool stuff"
                        name="hehe"
                        image="https://media.discordapp.net/attachments/748017439496732702/1050071593453371432/Frame_2.png?width=630&height=630"
                    />

                    <WorkCard
                        description="really cool stuff"
                        name="hehe"
                        image="https://media.discordapp.net/attachments/748017439496732702/1050071593453371432/Frame_2.png?width=630&height=630"
                    />

                    <WorkCard
                        description="really cool stuff"
                        name="hehe"
                        image="https://media.discordapp.net/attachments/748017439496732702/1050071593453371432/Frame_2.png?width=630&height=630"
                    />

                    <WorkCard
                        description="really cool stuff"
                        name="hehe"
                        image="https://media.discordapp.net/attachments/748017439496732702/1050071593453371432/Frame_2.png?width=630&height=630"
                    />

                    <WorkCard
                        description="really cool stuff"
                        name="hehe"
                        image="https://media.discordapp.net/attachments/748017439496732702/1050071593453371432/Frame_2.png?width=630&height=630"
                    />
                </div>
            </div>
        </section>
    );
};

export default WorkSection;
