import React, { useState } from 'react';
import styled from 'styled-components';
import { COLORS } from '../types';
import { Button, Input, Title, Text, FlexContainer } from './styled/CommonStyles';
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

const AppleButton = styled(Button)`
  background: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  &:hover {
    background: #333;
  }
`;

interface SignUpModalProps {
  onClose: () => void;
}

const SignUpModal: React.FC<SignUpModalProps> = ({ onClose }) => {
  const { signUp } = useAuth();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const user = {
      id: Date.now().toString(),
      firstName: formData.firstName,
      lastName: formData.lastName,
      username: formData.username,
      email: formData.email,
      bathroomTimerDuration: 10,
    };

    signUp(user);
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const isFormValid = formData.firstName && formData.lastName && 
                     formData.username && formData.email && 
                     formData.password && formData.confirmPassword &&
                     formData.password === formData.confirmPassword;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        
        <Title size="large" style={{ textAlign: 'center', marginBottom: '10px' }}>
          Create Account
        </Title>
        <Text style={{ textAlign: 'center', marginBottom: '30px', color: '#666' }}>
          Join the Sip community
        </Text>

        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>First name</Label>
            <Input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First name"
            />
          </FormGroup>

          <FormGroup>
            <Label>Last initial</Label>
            <Input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last initial"
            />
          </FormGroup>

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
            <Label>Email address</Label>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address"
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

          <FormGroup>
            <Label>Confirm password</Label>
            <Input
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
            />
          </FormGroup>

          <Button type="submit" disabled={!isFormValid}>
            Sign Up
          </Button>

          <AppleButton type="button">
            🍎 Sign Up with Apple
          </AppleButton>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default SignUpModal; 