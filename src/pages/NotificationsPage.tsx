import styled from "styled-components";

const NotificationsContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  background-color: #f5f5f5;
  min-height: 100vh;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

export const NotificationsPage: React.FC = () => {
  return (
    <NotificationsContainer>
      <Title>알림 페이지</Title>
      <p>여기에 팀원 평가 알림 또는 시스템 공지사항을 표시할 수 있습니다.</p>
      <p>예: "김재원의 평가가 완료되었습니다."</p>
    </NotificationsContainer>
  );
};