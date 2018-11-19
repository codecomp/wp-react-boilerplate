import React, { lazy, Suspense } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import style from '../styles/main.scss';  // eslint-disable-line no-unused-vars

import Home from './layouts/Home';
import Loading from './elements/Loading';

const AsyncDynamicPage = lazy(() => import(/* webpackChunkName:'DynamicPage' */ './layouts/DynamicPage'));
const AsyncFourOhFour = lazy(() => import(/* webpackChunkName:'FourOhFour' */ './layouts/FourOhFour'));

const App = () => {
    return (
        <Router>
            <div>
                <Suspense fallback={Loading}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/dynamic" component={AsyncDynamicPage} />
                        <Route component={AsyncFourOhFour} />
                    </Switch>
                </Suspense>
            </div>
        </Router>
    );
};

export default App;
