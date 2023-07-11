import React from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { LoginForm } from './LoginForm';
import Tabs from './Tabs';

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const LoginModal = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal && (
        <Background>
          <ModalWrapper showModal={showModal}>
            <ModalContent>
              <Tabs/>
            </ModalContent>
            <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
            />
          </ModalWrapper>
        </Background>
      )}
    </>
  );
};