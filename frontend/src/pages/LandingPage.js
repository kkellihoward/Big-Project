import React, { useState } from 'react';
import LandingBar from '../components/LandingBar';
import { LoginModal } from '../components/LoginModal';
import { Button } from '../components/Button';
import Image1 from '../components/image1';
import Image2 from '../components/image2';
import '../components/Button.css';

function LandingPage()
{
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    };

    const onClick = () => {
        
    }

    return(
        <>
            <LandingBar />
            <LoginModal showModal={showModal} setShowModal={setShowModal}/>
            <Image1/>
            <Image2/>
            <Button onClick={onClick}>Get Started</Button>
        </>
    );
};


export default LandingPage;