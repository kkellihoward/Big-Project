import React, { useState } from 'react';
import LandingBar from '../components/LandingBar';
import { LoginModal } from '../components/LoginModal';
//import { Button } from '../components/Button';
import Image1 from '../components/image1';
import styled from 'styled-components';
import {Footer} from '../components/Footer.js'
import '../components/style.css';

const Contiainer = styled.div`
    display: flex;
`;

function LandingPage()
{
    const [hideText, setHideText] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
        setHideText(prev => !prev);
    };

    return(
        <>
            <LoginModal showModal={showModal} setShowModal={setShowModal} hideText={hideText} setHideText={setHideText}/>
            <LandingBar hideText={hideText} setHideText={setHideText}/>
            <Image1/>
            <div className='lptext1'>
                <>
                {
                !hideText ? 
                <div>
                    <h1 className='lpHeader'>Manage all your events with us Today!</h1>
                    <p>
                    Plan your good times with our event manager! Send out invites, upload pictures, ask the attendees questions.
                    Everything you need right here. Click the button below to get started!
                    </p>
                    <button className='button2' onClick={openModal}>Get Started</button>
                </div>
                :
                <></>
                }
                </>
            </div>
            <Footer/>
        </>
    );
};


export default LandingPage;