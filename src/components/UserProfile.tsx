import styled from "styled-components";
import { User } from "../types";
import { useMediaQuery } from "react-responsive";

const ProfileContainer = styled.div<{ isMobile: boolean }>`
  display: flex;
  align-items: center;
  padding: ${({ isMobile }) => (isMobile ? "10px" : "12px")};
  background-color: #fff;
  margin-bottom: ${({ isMobile }) => (isMobile ? "15px" : "20px")};
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  width: ${({ isMobile }) => (isMobile ? "100%" : "80%")};
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 769px) {
    width: 70%;
  }
`;

const ProfileImage = styled.img<{ isMobile: boolean }>`
  width: ${({ isMobile }) => (isMobile ? "40px" : "60px")};
  height: ${({ isMobile }) => (isMobile ? "40px" : "60px")};
  border-radius: 50%;
  margin-right: 12px;
  border: 2px solid #ff4d4f;
`;

const UserName = styled.span<{ isMobile: boolean }>`
  font-size: ${({ isMobile }) => (isMobile ? "16px" : "18px")};
  font-weight: 600;
  color: #ff7f00;
`;

const Checkmark = styled.span<{ isMobile: boolean }>`
  color: #28a745;
  font-size: ${({ isMobile }) => (isMobile ? "16px" : "20px")};
  margin-left: 8px;
`;

interface UserProfileProps {
  user: User;
}

export const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  const isMobile = useMediaQuery({ maxWidth: 480 });

  return (
    <ProfileContainer isMobile={isMobile}>
      <ProfileImage isMobile={isMobile} src={user.profileImage} alt={user.name} />
      <UserName isMobile={isMobile}>{user.name}</UserName>
      {user.evaluated && <Checkmark isMobile={isMobile}>✔</Checkmark>}
    </ProfileContainer>
  );
};