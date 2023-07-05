import React from 'react';
import Navbar from '../components/navbar';
import { BrowserRouter as Router } from 'react-router-dom';

const LandingPage = () =>
{
    return(
        <Router>
            <Navbar />
        </Router>
    );
};

export default LandingPage;