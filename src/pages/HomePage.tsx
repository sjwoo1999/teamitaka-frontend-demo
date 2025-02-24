import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { mockUsers } from "../utils/mockData";
import { useMediaQuery } from "react-responsive";

const HomeContainer = styled.div<{ isMobile: boolean }>`
  max-width: 400px;
  margin: 0 auto;
  background-color: #f5f5f5;
  min-height: 100vh;
  padding: ${({ isMobile }) => (isMobile ? "16px" : "24px")};
  @media (min-width: 769px) {
    max-width: 500px;
  }
`;

const Title = styled.h2<{ isMobile: boolean }>`
  font-size: ${({ isMobile }) => (isMobile ? "20px" : "24px")};
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: ${({ isMobile }) => (isMobile ? "16px" : "24px")};
`;

const UserList = styled.ul`
  list-style: none;
  padding: 0;
`;

const UserItem = styled.li<{ isMobile: boolean }>`
  display: flex;
  align-items: center;
  padding: ${({ isMobile }) => (isMobile ? "10px" : "12px")};
  background-color: #fff;
  margin-bottom: ${({ isMobile }) => (isMobile ? "10px" : "12px")};
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const ProfileImage = styled.img<{ isMobile: boolean }>`
  width: ${({ isMobile }) => (isMobile ? "40px" : "50px")};
  height: ${({ isMobile }) => (isMobile ? "40px" : "50px")};
  border-radius: 25px;
  margin-right: 12px;
`;

const UserName = styled.span<{ isMobile: boolean }>`
  font-size: ${({ isMobile }) => (isMobile ? "16px" : "18px")};
  font-weight: 600;
  color: #333;
`;

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 480 });

  return (
    <HomeContainer isMobile={isMobile}>
      <Title isMobile={isMobile}>팀원 목록</Title>
      <UserList>
        {mockUsers.map((user) => (
          <UserItem
            key={user.id}
            isMobile={isMobile}
            onClick={() => navigate(`/evaluate/${user.id}`)}
          >
            <ProfileImage isMobile={isMobile} src={user.profileImage} alt={user.name} />
            <UserName isMobile={isMobile}>{user.name}</UserName>
          </UserItem>
        ))}
      </UserList>
    </HomeContainer>
  );
};