import styled from "styled-components";
import { ReviewForm } from "../components/ReviewForm";

const PageContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  background-color: #f5f5f5;
  min-height: 100vh;
  padding: 20px;
`;

export const EvaluationPage: React.FC = () => {
  // 목업 데이터로 첫 번째 사용자 선택 (실제로는 라우팅 또는 상태로 동적으로 처리 가능)
  const userId = 1;

  return (
    <PageContainer>
      <ReviewForm userId={userId} />
    </PageContainer>
  );
};