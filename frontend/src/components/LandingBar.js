import React, { useState } from 'react';
import { Button } from './Button';
import barImage from '../assets/images/IMG_0540.png';
import './LandingBar.css';

function LandingBar() {
    const [button, setButton] = useState(true);

    const onClick = () => {
        
    }

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);

    return (
        <div className='nav'>
            <div className='res'>RES</div>
            <center>
            <img className = 'navimg' src={barImage} width='55%' />
            </center>
            <div className='btnord'>
            {button && <Button className = 'btnord' onClick={onClick} buttonStyle='btn--outline'>SIGN UP</Button>}
            </div>        
        </div>
    );
};

export default LandingBar;