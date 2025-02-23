import styled from "styled-components";
import { UserProfile } from "./UserProfile";
import { RatingSlider } from "./RatingSlider";
import { evaluationCategories } from "../utils/mockData";
import React, { useState, useEffect } from "react";
import StarRatings from "react-star-ratings";
import { EvaluationStep } from "../types"; // EvaluationStep 타입 import 추가

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

const BackButton = styled.button`
  background-color: #ccc;
  color: #333;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  margin-right: 10px;
  font-size: 16px;
  font-weight: bold;
`;

interface ReviewFormProps {
  userId: number;
}

export const ReviewForm: React.FC<ReviewFormProps> = ({ userId }) => {
  const [step, setStep] = useState<EvaluationStep>("star");
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
      setStep("complete1");
    } else if (step === "complete1") {
      setStep("complete2");
    } else if (step === "complete2") {
      setStep("complete3");
    }
  };

  const handleBack = () => {
    if (step === "complete1") setStep("slider");
    else if (step === "complete2") setStep("complete1");
    else if (step === "complete3") setStep("complete2");
  };

  useEffect(() => {
    if (step.startsWith("complete")) {
      const timer = setTimeout(() => {
        if (step === "complete1") setStep("complete2");
        else if (step === "complete2") setStep("complete3");
      }, 3000); // 3초 후 다음 단계로
      return () => clearTimeout(timer); // 클린업
    }
  }, [step]);

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
      case "complete1":
        return (
          <>
            <Title>팀원 평가 내용 상세보기(완료된 것)</Title>
            <UserProfile userId={userId} />
            <p>해당 팀원의 전체 종합 평가는 {ratings["overall"] || 0}점입니다.</p>
            <CommentDisplay>{comment || "코멘트가 없습니다."}</CommentDisplay>
            <BackButton onClick={handleBack}>뒤로 가기</BackButton>
            <SubmitButton onClick={handleSubmit}>다음</SubmitButton>
          </>
        );
      case "complete2":
        return (
          <>
            <Title>팀원 평가 내용 상세보기(완료된 것)-1</Title>
            <UserProfile userId={userId} />
            <p>노력: {ratings["effort"] || 0}점, 의지: {ratings["willpower"] || 0}점</p>
            <CommentDisplay>{comment || "코멘트가 없습니다."}</CommentDisplay>
            <BackButton onClick={handleBack}>뒤로 가기</BackButton>
            <SubmitButton onClick={handleSubmit}>다음</SubmitButton>
          </>
        );
      case "complete3":
        return (
          <>
            <Title>팀원 평가 내용 상세보기(완료된 것)-2</Title>
            <UserProfile userId={userId} />
            <p>성장: {ratings["growth"] || 0}점, 소통: {ratings["communication"] || 0}점</p>
            <CommentDisplay>{comment || "코멘트가 없습니다."}</CommentDisplay>
            <BackButton onClick={handleBack}>뒤로 가기</BackButton>
            <SubmitButton onClick={() => setStep("star")}>초기화</SubmitButton>
          </>
        );
      default:
        return null;
    }
  };

  return <FormContainer>{renderContent()}</FormContainer>;
};