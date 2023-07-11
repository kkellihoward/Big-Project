import React, { useState } from 'react';
import LandingBar from '../components/LandingBar';
import { LoginModal } from '../components/LoginModal';
import { Button } from '../components/Button';
import Image1 from '../components/image1';
import Image2 from '../components/image2';
import styled from 'styled-components';
import '../components/Button.css';
import Btmbtn from '../components/btmbtn';



const Contiainer = styled.div`
    display: flex;
`;

function LandingPage()
{
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    };

    return(
        <>
            <LoginModal showModal={showModal} setShowModal={setShowModal}/>
            <LandingBar />
            <Image1/>
            <Image2/>
            <Button onClick={openModal}>Get Started</Button>
            <Btmbtn />
        </>
    );
};


export default LandingPage;