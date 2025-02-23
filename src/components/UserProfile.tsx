import styled from "styled-components";
import { mockUsers } from "../utils/mockData";

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 10px;
`;

const UserName = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

const RoleText = styled.span`
  font-size: 14px;
  color: #ff4d4f; // 빨간색 강조
`;

interface UserProfileProps {
  userId: number;
}

export const UserProfile: React.FC<UserProfileProps> = ({ userId }) => {
  const user = mockUsers.find((u) => u.id === userId);

  if (!user) return null;

  return (
    <ProfileContainer>
      <ProfileImage src={user.profileImage} alt={user.name} />
      <div>
        <UserName>{user.name}</UserName>
        <RoleText>평가 팀원</RoleText>
      </div>
    </ProfileContainer>
  );
};