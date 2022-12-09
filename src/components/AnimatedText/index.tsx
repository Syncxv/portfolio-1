import { onMount, ParentComponent } from 'solid-js';
import { slideUpOverflow } from '../../utils/slideUpOverflow';

interface Props {}

const AnimatedText: ParentComponent<Props> = ({ children }) => {
    let heading!: HTMLDivElement;
    onMount(() => {
        ScrollTrigger.create({
            trigger: heading,
            animation: slideUpOverflow(heading, { duration: 1.4, stagger: 0 }),
            start: 'top bottom',
        });
    });
    return (
        <div class="relative overflow-hidden">
            <div ref={heading} class="headng">
                {children}
            </div>
        </div>
    );
};
export default AnimatedText;
