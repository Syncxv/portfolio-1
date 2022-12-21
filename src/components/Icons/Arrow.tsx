import { Accessor, Component, JSX, splitProps } from 'solid-js';

interface Props {
    style?: Accessor<JSX.StylableSVGAttributes['style']> | JSX.StylableSVGAttributes['style'];
    className?: string;
}

const Arrow: Component<Props> = ({ style, className }) => {
    return (
        <svg
            class={className ?? ''}
            style={style == null ? {} : typeof style === 'function' ? style() : style}
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="#fff"
            viewBox="0 0 256 256"
        >
            <rect width="256" height="256" fill="none"></rect>
            <polyline
                points="96 48 176 128 96 208"
                fill="none"
                stroke="#fff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
            ></polyline>
        </svg>
    );
};
export default Arrow;
