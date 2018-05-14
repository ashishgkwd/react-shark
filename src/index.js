/**
 * index.js
 */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import './styles.css';
import TodoApp from './containers/TodoApp';
import configureStore from './store/configureStore';

const store = configureStore();

const MainApp = () => (
    <div className="main-content">
        <h1>Another Todo</h1>
        <TodoApp />
    </div>
);

// render the app
render(
    <Provider store={store}>
        <MainApp />
    </Provider>,
    document.getElementById('app'),
);
