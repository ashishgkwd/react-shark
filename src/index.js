/**
 * index.js
 */
import React from 'react';
import { render } from 'react-dom';

import './styles.css';

import TodoBox from './containers/TodoBox';

if (module.hot) {
    module.hot.accept();
}

const MainApp = () => (
    <div className="main-content">
        <h1>Another Todo</h1>
        <TodoBox />
    </div>
);

// render the app
render(<MainApp />, document.getElementById('app'));
