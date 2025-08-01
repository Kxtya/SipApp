import styled from 'styled-components';
import { COLORS } from '../../types';

// MARK: - Common Styled Components
export const Container = styled.div`
  min-height: 100vh;
  background-color: ${COLORS.whiteProxy};
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
`;

export const Button = styled.button<{ variant?: 'primary' | 'secondary' | 'outline' }>`
  padding: 12px 24px;
  border-radius: 25px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  ${({ variant = 'primary' }) => {
    switch (variant) {
      case 'primary':
        return `
          background-color: ${COLORS.mainTheme};
          color: white;
          &:hover {
            background-color: ${COLORS.accent1};
          }
        `;
      case 'secondary':
        return `
          background-color: ${COLORS.accent1};
          color: white;
          &:hover {
            background-color: ${COLORS.mainTheme};
          }
        `;
      case 'outline':
        return `
          background-color: transparent;
          color: ${COLORS.mainTheme};
          border: 2px solid ${COLORS.mainTheme};
          &:hover {
            background-color: ${COLORS.mainTheme};
            color: white;
          }
        `;
    }
  }}
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e1e5e9;
  border-radius: 10px;
  font-size: 16px;
  transition: border-color 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: ${COLORS.mainTheme};
  }
`;

export const Card = styled.div`
  background: white;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
`;

export const Title = styled.h1<{ size?: 'large' | 'medium' | 'small' }>`
  color: ${COLORS.blackProxy};
  font-weight: bold;
  margin: 0;
  
  ${({ size = 'large' }) => {
    switch (size) {
      case 'large':
        return 'font-size: 32px;';
      case 'medium':
        return 'font-size: 24px;';
      case 'small':
        return 'font-size: 18px;';
    }
  }}
`;

export const Text = styled.p<{ color?: string; weight?: string }>`
  color: ${({ color }) => color || COLORS.blackProxy};
  font-weight: ${({ weight }) => weight || 'normal'};
  margin: 0;
`;

export const FlexContainer = styled.div<{ direction?: 'row' | 'column'; justify?: string; align?: string; gap?: string }>`
  display: flex;
  flex-direction: ${({ direction = 'row' }) => direction};
  justify-content: ${({ justify = 'flex-start' }) => justify};
  align-items: ${({ align = 'stretch' }) => align};
  gap: ${({ gap = '0' }) => gap};
`;

export const StatusBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: ${COLORS.whiteProxy};
  border-bottom: 1px solid #e1e5e9;
`;

export const TimeText = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: ${COLORS.blackProxy};
`;

export const StatusIcons = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

export const Icon = styled.span`
  font-size: 14px;
  color: ${COLORS.blackProxy};
`; 