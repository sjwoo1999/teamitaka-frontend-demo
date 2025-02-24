import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { mockUsers } from '../utils/mockData';
import { ReviewForm } from '../components/ReviewForm';
import { User } from '../types';

const EvaluationPage: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();

  // mockUsers에서 URL 파라미터 userId와 일치하는 유저 찾기
  const user = mockUsers.find((u) => u.id === parseInt(userId || '0'));

  useEffect(() => {
    console.log(`Evaluating member: ${userId}`);
  }, [userId]);

  if (!user) {
    return <div>유효하지 않은 팀원 ID입니다.</div>;
  }

  // ReviewForm에서 최종 제출(onSubmit) 시 호출될 콜백
  const handleSubmit = (ratings: { [key: string]: number }, comment: string) => {
    console.log('제출된 평가:', { userId, ratings, comment });
    // 서버 전송, 페이지 이동 등 후속 처리 로직
  };

  return (
    <div>
      {/* ReviewForm에 유저 정보와 onSubmit 콜백 전달 */}
      <ReviewForm user={user as User} onSubmit={handleSubmit} />
    </div>
  );
};

export default EvaluationPage;
