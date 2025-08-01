import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../types';
import { Friend } from '../types';

const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

const ProfilePicture = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${COLORS.mainTheme};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 20px;
  flex-shrink: 0;
`;

const FriendInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const FriendName = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${COLORS.blackProxy};
`;

const SipsCount = styled.div`
  font-size: 14px;
  color: ${COLORS.blackProxy};
  opacity: 0.6;
`;

const OnlineStatus = styled.div<{ isOnline: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => isOnline ? '#4CAF50' : '#9E9E9E'};
  flex-shrink: 0;
`;

interface FriendCardProps {
  friend: Friend;
}

const FriendCard: React.FC<FriendCardProps> = ({ friend }) => {
  return (
    <Card>
      <ProfilePicture>
        {friend.firstName.charAt(0)}
      </ProfilePicture>
      
      <FriendInfo>
        <FriendName>
          {friend.firstName} {friend.lastName}
        </FriendName>
        <SipsCount>
          Sips Together: {friend.sipsTogether}
        </SipsCount>
      </FriendInfo>
      
      <OnlineStatus isOnline={friend.isOnline} />
    </Card>
  );
};

export default FriendCard; 