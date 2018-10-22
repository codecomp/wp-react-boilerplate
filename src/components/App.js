import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';

import style from '../styles/main.scss';  // eslint-disable-line no-unused-vars

import Home from './layouts/Home';
import Loading from './elements/Loading';

const AsyncDynamicPage = importedComponent(
    () => import(/* webpackChunkName:'DynamicPage' */ './layouts/DynamicPage'), {
        LoadingComponent: Loading
    }
);
const AsyncFourOhFour = importedComponent(
    () => import(/* webpackChunkName:'FourOhFour' */ './layouts/FourOhFour'), {
        LoadingComponent: Loading
    }
);

const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/dynamic" component={AsyncDynamicPage} />
                    <Route component={AsyncFourOhFour} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
