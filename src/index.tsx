/* @refresh reload */
import 'windicss.css';
import { render } from 'solid-js/web';
import './scss/_main.scss';
import App from './App';

render(() => <App />, document.getElementById('root') as HTMLElement);
