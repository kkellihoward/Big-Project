import React, { useState } from 'react';
import { Button } from './Button';
import './style.css';
import { LoginModal } from '../components/LoginModal';

function LandingBar(props) {
    const [button, setButton] = useState(true);
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    };

   window.addEventListener('resize', showButton);

    return (
        <>
        <LoginModal showModal={showModal} setShowModal={setShowModal}/>
        <div className='navBar' style={{ display: "flex" }}> 
            <div className='button1div' style={{ marginLeft: "auto" }}>
                <button className='button1' onClick={openModal}>Get Started</button>
            </div>     
        </div>
        </>
    );
};

export default LandingBar;