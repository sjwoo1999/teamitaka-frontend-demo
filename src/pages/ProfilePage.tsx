import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const ProfileContainer = styled.div<{ isMobile: boolean }>`
  max-width: 400px;
  margin: 0 auto;
  background-color: #f5f5f5;
  min-height: 100vh;
  padding: ${({ isMobile }) => (isMobile ? "16px" : "24px")};
  text-align: center;
  @media (min-width: 769px) {
    max-width: 500px;
  }
`;

const Title = styled.h2<{ isMobile: boolean }>`
  font-size: ${({ isMobile }) => (isMobile ? "20px" : "24px")};
  font-weight: bold;
  color: #333;
  margin-bottom: ${({ isMobile }) => (isMobile ? "16px" : "24px")};
`;

export const ProfilePage: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 480 });

  return (
    <ProfileContainer isMobile={isMobile}>
      <Title isMobile={isMobile}>프로필 페이지</Title>
      <p style={{ fontSize: isMobile ? "14px" : "16px", color: "#666" }}>
        여기에 사용자 프로필 정보와 설정을 표시할 수 있습니다.
      </p>
    </ProfileContainer>
  );
};