import styled from "styled-components";
import StarRatings from "react-star-ratings";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { EvaluationCategory } from "../types";

const RatingContainer = styled.div`
  margin: 15px 0;
  padding: 15px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CategoryLabel = styled.div`
  font-size: 14px;
  margin-bottom: 5px;
  color: #333;
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
  return (
    <RatingContainer>
      <CategoryLabel>{category.label}</CategoryLabel>
      <StarRatings
        rating={value}
        starRatedColor="gold"
        starEmptyColor="#ccc"
        starDimension="20px"
        starSpacing="2px"
        numberOfStars={5}
        name={category.key}
        changeRating={(newRating: number) => onRatingChange(category.key, newRating)}
      />
      <Slider
        min={1}
        max={5}
        value={value}
        onChange={(val) => onRatingChange(category.key, val as number)}
        railStyle={{ backgroundColor: "#ccc", height: 6 }}
        trackStyle={{ backgroundColor: "#ff4d4f", height: 6 }}
        handleStyle={{
          borderColor: "#ff4d4f",
          backgroundColor: "#fff",
          width: 16,
          height: 16,
          marginTop: -5,
        }}
      />
    </RatingContainer>
  );
};