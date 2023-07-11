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
            <img className='bar-image' src={barImage} width='60%' />
            {button && <Button onClick={onClick} buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
    );
};

export default LandingBar;