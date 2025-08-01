import React, { useState } from 'react';
import styled from 'styled-components';
import { COLORS } from '../types';
import { Button, Input, Title, Text } from './styled/CommonStyles';
import { Friend } from '../types';

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
  max-width: 500px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
`;

const SearchContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

const SearchInput = styled(Input)`
  padding-left: 40px;
`;

const SearchIcon = styled.span`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: ${COLORS.blackProxy};
  opacity: 0.6;
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

const SuggestedFriendCard = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
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

const Username = styled.div`
  font-size: 14px;
  color: ${COLORS.blackProxy};
  opacity: 0.6;
`;

const AddButton = styled.button<{ isAdded: boolean }>`
  padding: 8px 16px;
  border-radius: 15px;
  border: 1px solid ${COLORS.mainTheme};
  background: ${({ isAdded }) => isAdded ? '#4CAF50' : 'transparent'};
  color: ${({ isAdded }) => isAdded ? 'white' : COLORS.mainTheme};
  font-size: 14px;
  font-weight: 600;
  cursor: ${({ isAdded }) => isAdded ? 'default' : 'pointer'};
  transition: all 0.2s ease;
  
  &:hover {
    background: ${({ isAdded }) => isAdded ? '#4CAF50' : COLORS.mainTheme};
    color: white;
  }
`;

interface AddFriendsModalProps {
  onClose: () => void;
}

const suggestedFriends: Friend[] = [
  {
    id: '1',
    username: 'alex_smith',
    firstName: 'Alex',
    lastName: 'Smith',
    sipsTogether: 5,
    isOnline: true,
  },
  {
    id: '2',
    username: 'sarah_jones',
    firstName: 'Sarah',
    lastName: 'Jones',
    sipsTogether: 3,
    isOnline: false,
  },
  {
    id: '3',
    username: 'mike_wilson',
    firstName: 'Mike',
    lastName: 'Wilson',
    sipsTogether: 8,
    isOnline: true,
  },
  {
    id: '4',
    username: 'emma_davis',
    firstName: 'Emma',
    lastName: 'Davis',
    sipsTogether: 2,
    isOnline: false,
  },
];

const AddFriendsModal: React.FC<AddFriendsModalProps> = ({ onClose }) => {
  const [searchText, setSearchText] = useState('');
  const [addedFriends, setAddedFriends] = useState<Set<string>>(new Set());

  const handleAddFriend = (friendId: string) => {
    setAddedFriends(prev => new Set([...prev, friendId]));
  };

  const filteredFriends = suggestedFriends.filter(friend =>
    friend.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
    friend.lastName.toLowerCase().includes(searchText.toLowerCase()) ||
    friend.username.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        
        <Title size="large" style={{ textAlign: 'center', marginBottom: '20px' }}>
          Add Friends
        </Title>

        <SearchContainer>
          <SearchIcon>🔍</SearchIcon>
          <SearchInput
            placeholder="Search by username or phone number"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </SearchContainer>

        <Title size="small" style={{ marginBottom: '15px' }}>
          Suggested Friends
        </Title>

        <div>
          {filteredFriends.map((friend) => (
            <SuggestedFriendCard key={friend.id}>
              <ProfilePicture>
                {friend.firstName.charAt(0)}
              </ProfilePicture>
              
              <FriendInfo>
                <FriendName>
                  {friend.firstName} {friend.lastName}
                </FriendName>
                <Username>@{friend.username}</Username>
              </FriendInfo>
              
              <AddButton
                isAdded={addedFriends.has(friend.id)}
                onClick={() => handleAddFriend(friend.id)}
                disabled={addedFriends.has(friend.id)}
              >
                {addedFriends.has(friend.id) ? 'Added' : 'Add'}
              </AddButton>
            </SuggestedFriendCard>
          ))}
        </div>
      </ModalContent>
    </ModalOverlay>
  );
};

export default AddFriendsModal; 