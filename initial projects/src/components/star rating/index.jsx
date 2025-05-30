import React from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";
function StarRating({ noOfStars = 20 }) {
  const [rating, setRating] = React.useState(0);
  const [hover, setHover] = React.useState(0);
  const handleClick = (getCurrentIndex) => {
    setRating(getCurrentIndex);
  };
  const handleMouseMove = (getCurrentIndex) => {
    setHover(getCurrentIndex);
  };
  const handleMouseLeave = () => {
    setHover(rating);
  };
  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;

        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseMove(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            size={30}
          />
        );
      })}
    </div>
  );
}

export default StarRating;
