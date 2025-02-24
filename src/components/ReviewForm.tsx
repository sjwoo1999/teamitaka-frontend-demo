import React, { useState } from "react";
import styled from "styled-components";
import StarRatings from "react-star-ratings";
import { UserProfile } from "./UserProfile";
import { RatingSlider } from "./RatingSlider";
import { evaluationCategories } from "../utils/mockData";
import { User } from "../types";
import { useMediaQuery } from "react-responsive";

const FormContainer = styled.div<{ isMobile: boolean }>`
  padding: ${({ isMobile }) => (isMobile ? "16px" : "24px")};
  background-color: #f5f5f5;
  min-height: 100vh;
  @media (max-width: 480px) {
    padding: 10px;
  }
  @media (min-width: 769px) {
    max-width: 500px;
    margin: 0 auto;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  border-radius: 8px 8px 0 0;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #333;
`;

const Title = styled.h2<{ isMobile: boolean }>`
  font-size: ${({ isMobile }) => (isMobile ? "20px" : "24px")};
  font-weight: bold;
  color: #333;
  text-align: center;
`;

const ContentContainer = styled.div<{ isMobile: boolean }>`
  background: #fff;
  padding: ${({ isMobile }) => (isMobile ? "10px" : "20px")};
  border-radius: 8px;
  margin-top: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: ${({ isMobile }) => (isMobile ? "100%" : "80%")};
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 769px) {
    width: 90%;
  }
`;

const StarRatingSection = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

const CommentInput = styled.textarea<{ isMobile: boolean }>`
  width: 100%;
  height: ${({ isMobile }) => (isMobile ? "80px" : "120px")};
  margin: 20px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  resize: none;
  font-size: ${({ isMobile }) => (isMobile ? "14px" : "16px")};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: border-color 0.2s ease;

  &:focus {
    border-color: #ff4d4f;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #ff4d4f, #ff7f00);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
  }
`;

const CompleteMessage = styled.p<{ isMobile: boolean }>`
  color: #28a745;
  font-size: ${({ isMobile }) => (isMobile ? "16px" : "18px")};
  font-weight: 500;
  margin-bottom: 20px;
  text-align: center;
`;

interface ReviewFormProps {
  user: User;
  onSubmit: (ratings: { [key: string]: number }, comment: string) => void;
}

export const ReviewForm: React.FC<ReviewFormProps> = ({ user, onSubmit }) => {
  const [step, setStep] = useState<"star" | "slider" | "complete">("star");
  const [ratings, setRatings] = useState<{ [key: string]: number }>({});
  const [comment, setComment] = useState("");
  const isMobile = useMediaQuery({ maxWidth: 480 });

  const handleRatingChange = (categoryKey: string, value: number) => {
    setRatings((prev) => ({ ...prev, [categoryKey]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === "star") setStep("slider");
    else if (step === "slider") setStep("complete");
    else onSubmit(ratings, comment);
  };

  const renderContent = () => {
    switch (step) {
      case "star":
        return (
          <>
            <ContentContainer isMobile={isMobile}>
              <Title isMobile={isMobile}>팀원 평가</Title>
              <UserProfile user={user} />
              <StarRatingSection>
                <h3>전체 평점</h3>
                <StarRatings
                  rating={ratings["overall"] || 0}
                  starRatedColor="#ffd700"
                  starEmptyColor="#ddd"
                  starDimension={isMobile ? "18px" : "24px"}
                  starSpacing="4px"
                  numberOfStars={5}
                  name="overall"
                  changeRating={(newRating) => handleRatingChange("overall", newRating)}
                />
                <p style={{ fontSize: isMobile ? "12px" : "14px", color: "#666" }}>
                  해당 팀원의 업무 분담 및 구체적인 역할은 무엇이었나요?
                </p>
              </StarRatingSection>
              <CommentInput
                isMobile={isMobile}
                placeholder="구체적인 역량을 예시와 함께 입력하세요."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <SubmitButton onClick={handleSubmit}>평가 보내기</SubmitButton>
            </ContentContainer>
          </>
        );
      case "slider":
        return (
          <>
            <ContentContainer isMobile={isMobile}>
              <Title isMobile={isMobile}>세부 평가</Title>
              <UserProfile user={user} />
              {evaluationCategories.map((category) => (
                <RatingSlider
                  key={category.id}
                  category={category}
                  onRatingChange={handleRatingChange}
                  value={ratings[category.key] || 0}
                />
              ))}
              <SubmitButton onClick={handleSubmit}>다음으로 넘어가기</SubmitButton>
            </ContentContainer>
          </>
        );
      case "complete":
        return (
          <>
            <ContentContainer isMobile={isMobile}>
              <Title isMobile={isMobile}>평가 완료</Title>
              <UserProfile user={{ ...user, evaluated: true }} />
              <CompleteMessage isMobile={isMobile}>
                평가가 완료되었습니다. 감사합니다! ✔
              </CompleteMessage>
              <SubmitButton onClick={handleSubmit}>완료하기</SubmitButton>
            </ContentContainer>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <FormContainer isMobile={isMobile}>
      <Header>
        <BackButton onClick={() => window.history.back()}>←</BackButton>
        <Title isMobile={isMobile}>팀원 평가</Title>
      </Header>
      {renderContent()}
    </FormContainer>
  );
};