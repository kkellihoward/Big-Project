import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  left: 0;
  bottom: 0;
  z-index: 0;
  width: auto;
  margin-top: -2px;
  align-items: center;
  justify-content: center;
  background-color: #7f44d4;
  padding: 20px;
`;

const ContactInfo = styled.div`
  display: flex;
  gap: 100px;
  align-items: center;
  margin-right: 20px;
`;

const ContactText = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: bold;
  gap: 20px;
  color: white;
  margin-right: 20px;
`;

const Button = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #7f44d4;
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  padding: 8px 16px;
  margin: 0;
  margin-left: 10%;
  cursor: pointer;
  transition: text-decoration 200ms ease-in-out;

  &:hover {
    text-decoration: underline;
  }
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <ContactInfo>
        <ContactText>Phone: 678-999-8212</ContactText>
        <ContactText>Email: Urmom@urmom.com</ContactText>
      </ContactInfo>
      <Button>About Us</Button>
    </FooterContainer>
  );
};

