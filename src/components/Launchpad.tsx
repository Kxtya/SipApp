import React, { useState } from 'react';
import styled from 'styled-components';
import { COLORS } from '../types';
import { Button, Title, Text, FlexContainer } from './styled/CommonStyles';
import SignUpModal from './SignUpModal';
import SignInModal from './SignInModal';

const LaunchpadContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, ${COLORS.mainTheme} 0%, ${COLORS.accent1} 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const ContentCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 40px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 100%;
`;

const Logo = styled.div`
  font-size: 48px;
  font-weight: bold;
  color: ${COLORS.mainTheme};
  margin-bottom: 10px;
  font-family: 'Arial Rounded MT Bold', Arial, sans-serif;
`;

const Slogan = styled.p`
  font-size: 18px;
  color: ${COLORS.blackProxy};
  margin-bottom: 30px;
  font-weight: 500;
`;

const ActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
`;

const LinkButton = styled.button`
  background: none;
  border: none;
  color: ${COLORS.mainTheme};
  font-size: 16px;
  cursor: pointer;
  text-decoration: underline;
  margin-top: 10px;
  
  &:hover {
    color: ${COLORS.accent1};
  }
`;

const Footer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: white;
  font-size: 12px;
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: underline;
  margin: 0 5px;
  
  &:hover {
    opacity: 0.8;
  }
`;

const Launchpad: React.FC = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  return (
    <>
      <LaunchpadContainer>
        <ContentCard>
          <Logo>Sip</Logo>
          <Slogan>Sip Safe. Sip Connected.</Slogan>
          
          <ActionButtons>
            <Button onClick={() => setShowSignUp(true)}>
              Sign up
            </Button>
            <LinkButton onClick={() => setShowSignIn(true)}>
              Already have an account? Sign in
            </LinkButton>
          </ActionButtons>
        </ContentCard>
        
        <Footer>
          <Text color="white" style={{ fontSize: '12px' }}>
            By continuing, you agree to our
            <FooterLink href="#">Terms</FooterLink>
            and
            <FooterLink href="#">Privacy Policy</FooterLink>
          </Text>
        </Footer>
      </LaunchpadContainer>
      
      {showSignUp && (
        <SignUpModal onClose={() => setShowSignUp(false)} />
      )}
      
      {showSignIn && (
        <SignInModal onClose={() => setShowSignIn(false)} />
      )}
    </>
  );
};

export default Launchpad; 