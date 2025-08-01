import React, { useState } from 'react';
import styled from 'styled-components';
import { COLORS } from '../types';
import { Button, Input, Title, Text } from './styled/CommonStyles';
import { useAuth } from '../contexts/AuthContext';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 20px;
  padding: 30px;
  max-width: 400px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: ${COLORS.blackProxy};
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: ${COLORS.blackProxy};
  
  &:hover {
    color: ${COLORS.mainTheme};
  }
`;

const ForgotPasswordLink = styled.button`
  background: none;
  border: none;
  color: ${COLORS.mainTheme};
  font-size: 14px;
  cursor: pointer;
  text-decoration: underline;
  align-self: flex-end;
  
  &:hover {
    color: ${COLORS.accent1};
  }
`;

interface SignInModalProps {
  onClose: () => void;
}

const SignInModal: React.FC<SignInModalProps> = ({ onClose }) => {
  const { signIn } = useAuth();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signIn(formData.username, formData.password);
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const isFormValid = formData.username && formData.password;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        
        <Title size="large" style={{ textAlign: 'center', marginBottom: '10px' }}>
          Welcome Back
        </Title>
        <Text style={{ textAlign: 'center', marginBottom: '30px', color: '#666' }}>
          Sign in to your account
        </Text>

        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Username</Label>
            <Input
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
            />
          </FormGroup>

          <FormGroup>
            <Label>Password</Label>
            <Input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
            />
          </FormGroup>

          <ForgotPasswordLink type="button">
            Forgot Password?
          </ForgotPasswordLink>

          <Button type="submit" disabled={!isFormValid}>
            Sign In
          </Button>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default SignInModal; 