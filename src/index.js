import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import './css/index.css';
import App from './components/App';

let rootElement = document.getElementById('root');

render(
    <Provider store = {store}>
        <App />
    </Provider>,
    rootElement
);
