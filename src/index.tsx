/* @refresh reload */
import { render } from 'solid-js/web';
import './scss/_main.scss';
import App from './App';

render(() => <App />, document.getElementById('root') as HTMLElement);
