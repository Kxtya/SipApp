import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { COLORS } from '../types';
import { Button, Title, Text, FlexContainer, StatusBar, TimeText, StatusIcons, Icon } from './styled/CommonStyles';
import { useAuth } from '../contexts/AuthContext';
import { Friend } from '../types';
import FriendCard from './FriendCard';
import AddFriendsModal from './AddFriendsModal';

const HomeContainer = styled.div`
  min-height: 100vh;
  background-color: ${COLORS.whiteProxy};
`;

const MainContent = styled.div`
  padding: 20px;
`;

const TopNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const NavigationButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  color: ${COLORS.mainTheme};
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: rgba(216, 27, 96, 0.1);
  }
`;

const StartSessionButton = styled(Button)`
  width: 150px;
  height: 45px;
  font-size: 18px;
`;

const ProfileButton = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${COLORS.mainTheme};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
`;

const FriendsSection = styled.div`
  margin-top: 20px;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const AddButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  color: ${COLORS.mainTheme};
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: rgba(216, 27, 96, 0.1);
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;
`;

const EmptyIcon = styled.div`
  font-size: 60px;
  color: ${COLORS.mainTheme};
  opacity: 0.6;
  margin-bottom: 20px;
`;

const EmptyTitle = styled(Title)`
  margin-bottom: 10px;
`;

const EmptyDescription = styled(Text)`
  color: ${COLORS.blackProxy};
  opacity: 0.6;
  margin-bottom: 30px;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
`;

const Home: React.FC = () => {
  const { currentUser, signOut } = useAuth();
  const [friends, setFriends] = useState<Friend[]>([]);
  const [showAddFriends, setShowAddFriends] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  };

  const handleSignOut = () => {
    signOut();
  };

  return (
    <HomeContainer>
      <StatusBar>
        <TimeText>{formatTime(currentTime)}</TimeText>
        <StatusIcons>
          <Icon>📶</Icon>
          <Icon>🔋</Icon>
        </StatusIcons>
      </StatusBar>

      <MainContent>
        <TopNavigation>
          <NavigationButton>📅</NavigationButton>
          <StartSessionButton>Start Sippin'</StartSessionButton>
          <ProfileButton onClick={handleSignOut}>
            {currentUser?.firstName?.charAt(0) || 'U'}
          </ProfileButton>
        </TopNavigation>

        <FriendsSection>
          <SectionHeader>
            <Title size="medium">Your Friends</Title>
            <AddButton onClick={() => setShowAddFriends(true)}>➕</AddButton>
          </SectionHeader>

          {friends.length === 0 ? (
            <EmptyState>
              <EmptyIcon>👥</EmptyIcon>
              <EmptyTitle size="medium">Add friends to start Sippin'</EmptyTitle>
              <EmptyDescription>
                Connect with friends to enjoy safe drinking sessions together
              </EmptyDescription>
              <Button onClick={() => setShowAddFriends(true)}>
                Add Your First Friend
              </Button>
            </EmptyState>
          ) : (
            <div>
              {friends.map((friend) => (
                <FriendCard key={friend.id} friend={friend} />
              ))}
            </div>
          )}
        </FriendsSection>
      </MainContent>

      {showAddFriends && (
        <AddFriendsModal onClose={() => setShowAddFriends(false)} />
      )}
    </HomeContainer>
  );
};

export default Home; 