import { Component, createSignal, onMount, ParentComponent } from 'solid-js';
import { WORKS } from '../constants';
import { loadImage } from '../utils/loadImage';
import Layout from './Layout';

interface Props {}

export const Loader: ParentComponent<Props> = ({ children }) => {
    return (
        <>
            <div>LOADING</div>
        </>
    );
};
