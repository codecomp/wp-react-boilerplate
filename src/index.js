import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import reducers from './reducers';

import App from './components/App';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const render = Component => ReactDOM.render(
    <AppContainer>
        <Provider store={createStoreWithMiddleware(reducers)}>
            <Component />
        </Provider>
    </AppContainer>,
    document.getElementById('app')
);

render(App);

// Webpack Hot Module Replacement API
if (module.hot) { module.hot.accept('./components/App', () => render(App)); } // eslint-disable-line no-undef
