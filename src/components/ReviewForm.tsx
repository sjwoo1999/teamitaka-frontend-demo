import styled from "styled-components";
import { UserProfile } from "./UserProfile";
import { RatingSlider } from "./RatingSlider";
import { evaluationCategories } from "../utils/mockData"; // mockUsers 제거
import React, { useState } from "react";
import StarRatings from "react-star-ratings"; // StarRatings import 추가

const FormContainer = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

const StarRatingSection = styled.div`
  margin-bottom: 20px;
`;

const SliderSection = styled.div`
  margin-bottom: 20px;
`;

const CommentInput = styled.textarea`
  width: 100%;
  height: 100px;
  margin: 20px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  resize: none;
  font-size: 14px;
  color: #333;
`;

const CommentDisplay = styled.div`
  width: 100%;
  height: 100px;
  margin: 20px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #fff;
  font-size: 14px;
  color: #333;
  overflow-y: auto;
`;

const SubmitButton = styled.button`
  background-color: #ff4d4f;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
  font-weight: bold;
`;

interface ReviewFormProps {
  userId: number;
}

export const ReviewForm: React.FC<ReviewFormProps> = ({ userId }) => {
  const [step, setStep] = useState<"star" | "slider" | "complete">("star");
  const [ratings, setRatings] = useState<{ [key: string]: number }>({});
  const [comment, setComment] = useState("");

  const handleRatingChange = (categoryKey: string, value: number) => {
    setRatings((prev) => ({ ...prev, [categoryKey]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === "star") {
      setStep("slider");
    } else if (step === "slider") {
      setStep("complete");
    } else {
      console.log("제출된 평가:", { userId, ratings, comment });
      // 실제로는 API 호출 또는 상태 관리로 데이터 저장
    }
  };

  const renderContent = () => {
    switch (step) {
      case "star":
        return (
          <>
            <Title>팀원 평가</Title>
            <UserProfile userId={userId} />
            <StarRatingSection>
              해당 팀원의 전체 종합은 몇 점인가요?
              <StarRatings
                rating={ratings["overall"] || 0}
                starRatedColor="gold"
                starEmptyColor="#ccc"
                starDimension="20px"
                starSpacing="2px"
                numberOfStars={5}
                name="overall"
                changeRating={(newRating: number) => handleRatingChange("overall", newRating)}
              />
            </StarRatingSection>
            <CommentInput
              placeholder="구체적인 역량을 예시와 함께 입력하세요."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <SubmitButton onClick={handleSubmit}>평가 보내기</SubmitButton>
          </>
        );
      case "slider":
        return (
          <>
            <Title>팀원 평가</Title>
            <UserProfile userId={userId} />
            <SliderSection>
              해당 팀원의 능력 평점수는 몇 점인가요?
              {evaluationCategories.map((category) => (
                <RatingSlider
                  key={category.id}
                  category={category}
                  onRatingChange={handleRatingChange}
                  value={ratings[category.key] || 0}
                />
              ))}
            </SliderSection>
            <SubmitButton onClick={handleSubmit}>다음으로 넘어가기</SubmitButton>
          </>
        );
      case "complete":
        return (
          <>
            <Title>팀원 평가</Title>
            <UserProfile userId={userId} />
            <p>해당 팀원의 평가가 완료되었습니다. 시스템 크론.</p>
            <CommentDisplay>{comment || "코멘트가 없습니다."}</CommentDisplay>
            <SubmitButton onClick={handleSubmit}>완료하기</SubmitButton>
          </>
        );
      default:
        return null;
    }
  };

  return <FormContainer>{renderContent()}</FormContainer>;
};