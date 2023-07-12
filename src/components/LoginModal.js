import React from 'react';
import styled from 'styled-components';
import * as Components from './LoginSignup';
import { MdClose } from 'react-icons/md';
// css styling for modal from background to close modal
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
  color: black;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  // z-index: 10;
  border-radius: 5px;
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

export const LoginModal = ({ showModal, setShowModal, hidetext, setHideText }) => {
  const [signIn, toggle] = React.useState(true);
  return (
    <>
      {showModal && (
        <Background>
          <ModalWrapper showModal={showModal}>
            <ModalContent>
            {/* Component of the sliding login and sign up */}
            <Components.Container>
              <Components.SignUpContainer signinIn={signIn}>
                  {/* setting the create account side as a form */}
                  <Components.Form>
                      <Components.Title>Create Account</Components.Title>
                      {/* creating input values  */}
                      <Components.Input type='userName' placeholder='User Name' />
                      <Components.Input type='email' placeholder='Email' />
                      <Components.Input type='password' placeholder='Password' />
                      <Components.Button style={{backgroundColor: '#7f44d4'}}>Sign Up</Components.Button>
                  </Components.Form>
              </Components.SignUpContainer>

              <Components.SignInContainer signinIn={signIn}>
                  {/*setting the create account side of form  */}
                   <Components.Form>
                      {/* setting field values for sign up */}
                       <Components.Title>Sign in</Components.Title>
                       <Components.Input type='userName1' placeholder='User Name' />
                       <Components.Input type='password' placeholder='Password' />
                       <Components.Button style={{backgroundColor: '#7f44d4'}}>Sign In</Components.Button>
                   </Components.Form>
              </Components.SignInContainer>

              {/* container for sliding pannels, as it slides the information changes */}
              <Components.OverlayContainer signinIn={signIn}>
                  <Components.Overlay signinIn={signIn}>
                  {/* left side pannel for sign up */}
                  <Components.LeftOverlayPanel signinIn={signIn}style={{backgroundColor: '#7f44d4'}}>
                      <Components.Title>Welcome Back!</Components.Title>
                      <Components.Paragraph>
                          If you already have an account, please sign in here!
                      </Components.Paragraph>
                      {/* sign in button is set to false when it is clicked opn the overlay panel*/}
                      <Components.GhostButton onClick={() => toggle(true)}>
                          Sign In
                      </Components.GhostButton>
                      </Components.LeftOverlayPanel>
                    {/* right side pannel for sign in */}
                      <Components.RightOverlayPanel signinIn={signIn} style={{backgroundColor: '#7f44d4'}}>
                        <Components.Title>Hello, Friend!</Components.Title>
                        <Components.Paragraph>
                            Get started on your journey with us!
                        </Components.Paragraph>
                            {/* signup button is set to false when it is clicked opn the overlay panel*/}
                            <Components.GhostButton onClick={() => toggle(false)}>
                                Sign Up
                            </Components.GhostButton> 
                      </Components.RightOverlayPanel>
  
                  </Components.Overlay>
              </Components.OverlayContainer>

          </Components.Container>
            </ModalContent>
            <CloseModalButton
                aria-label='Close modal'
                onClick={() => (setShowModal(prev => !prev), setHideText(prev => !prev))} 
            />
          </ModalWrapper>
        </Background>
      )}
    </>
  );
};