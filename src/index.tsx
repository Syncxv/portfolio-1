/* @refresh reload */
import 'windi.css';
import './scss/_main.scss';
import { render } from 'solid-js/web';

import App from './App';

render(() => <App />, document.getElementById('root') as HTMLElement);
