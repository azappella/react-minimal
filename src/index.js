import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { globalCss } from '@stitches/react';

import store from './store';
import App from './components/app';
import normalize from './css/normalize';

const globalStyles = globalCss`${normalize}`;

function GlobalStyles() {
    globalStyles();

    return <div />;
}

if (module.hot) {
    module.hot.accept();
}

ReactDOM.render(
    <>
        <Provider store={store}>
            <App />
        </Provider>
        <GlobalStyles />
    </>,
    document.getElementById('root')
);
