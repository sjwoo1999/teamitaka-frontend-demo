import styled from "styled-components";

const HomeContainer = styled.div`
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

export const HomePage: React.FC = () => {
  return (
    <HomeContainer>
      <Title>홈 페이지</Title>
      <p>환영합니다! 팀원 평가 시스템에 오신 것을 환영합니다.</p>
      <p>여기에 홈 화면의 주요 내용이나 링크를 추가할 수 있습니다.</p>
    </HomeContainer>
  );
};