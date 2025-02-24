import styled from "styled-components";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { EvaluationCategory } from "../types";
import { useMediaQuery } from "react-responsive";

const RatingContainer = styled.div<{ isMobile: boolean }>`
  margin: ${({ isMobile }) => (isMobile ? "15px 0" : "20px 0")};
  width: ${({ isMobile }) => (isMobile ? "100%" : "80%")};
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 769px) {
    width: 70%;
  }
`;

const CategoryLabel = styled.div<{ isMobile: boolean }>`
  font-size: ${({ isMobile }) => (isMobile ? "14px" : "16px")};
  font-weight: 600;
  color: #333;
  margin-bottom: ${({ isMobile }) => (isMobile ? "6px" : "8px")};
`;

interface RatingSliderProps {
  category: EvaluationCategory;
  onRatingChange: (categoryKey: string, value: number) => void;
  value?: number;
}

export const RatingSlider: React.FC<RatingSliderProps> = ({
  category,
  onRatingChange,
  value = 0,
}) => {
  const isMobile = useMediaQuery({ maxWidth: 480 });

  return (
    <RatingContainer isMobile={isMobile}>
      <CategoryLabel isMobile={isMobile}>{category.label}</CategoryLabel>
      <Slider
        min={1}
        max={5}
        value={value}
        onChange={(val) => onRatingChange(category.key, val as number)}
        railStyle={{ backgroundColor: "#ddd", height: 6 }}
        trackStyle={{ backgroundColor: "#ff4d4f", height: 6 }}
        handleStyle={{
          borderColor: "#ff4d4f",
          backgroundColor: "#fff",
          width: isMobile ? 14 : 16,
          height: isMobile ? 14 : 16,
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          marginTop: -5,
        }}
      />
    </RatingContainer>
  );
};