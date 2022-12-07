import { Component } from 'solid-js';

interface Props {}

const Arrow: Component<Props> = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#fff" viewBox="0 0 256 256">
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
