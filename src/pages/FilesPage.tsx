import styled from "styled-components";

const FilesContainer = styled.div`
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

export const FilesPage: React.FC = () => {
  return (
    <FilesContainer>
      <Title>파일 페이지</Title>
      <p>여기에 팀 관련 파일 목록이나 다운로드 링크를 추가할 수 있습니다.</p>
      <p>예: 평가 보고서, 팀 노트 등.</p>
    </FilesContainer>
  );
};