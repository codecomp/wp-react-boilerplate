import React from 'react';
import { Link } from 'react-router-dom';

import { h1 } from './style.css';

const Home = () => {
    return (
        <div>
            <p className={h1}>Home</p>
            <p>
                <Link to="/dynamic">Navigate to Dynamic Page</Link>
            </p>
        </div>
    );
};

export default Home;
