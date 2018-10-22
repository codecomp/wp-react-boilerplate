import React from 'react';

import { h1 } from './style.scss';

const DynamicPage = () => {
    return (
        <div>
            <p className={h1}>Page loaded <span>asynchronously</span></p>
        </div>
    );
};

export default DynamicPage;
