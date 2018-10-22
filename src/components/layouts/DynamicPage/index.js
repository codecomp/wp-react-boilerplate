import React from 'react';
import { Helmet } from 'react-helmet';

import { h1 } from './style.scss';

const DynamicPage = () => {
    return (
        <div>
            <Helmet>
                <title>Dynamic Page</title>
                <meta name='description' content="This loaded aynicioulally" />
            </Helmet>

            <p className={h1}>Page loaded <span>asynchronously</span></p>
        </div>
    );
};

export default DynamicPage;
