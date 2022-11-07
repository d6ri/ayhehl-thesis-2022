import React, { useState } from "react";

import { FaStar } from "react-icons/fa";

import "./StarRating.css";
const StarRating = (props) => {
  const [rating, setRating] = useState(0);

  function handleClick(ratingValue) {
    setRating(ratingValue);
  }

  return (
    <fieldset id={props.id} className="star-container">
      <legend>{props.label}</legend>
      {[...Array(5)].map((star, i) => {
        let ratingValue = i + 1;
        return (
          <button
            id={`${props.id}-${ratingValue}`}
            key={ratingValue}
            onClick={() => handleClick(ratingValue)}
            type="button"
            className="star-btn"
          >
            <FaStar size="30" color={ratingValue <= rating ? "#FFDB33" : "#d8d8d8"} />
          </button>
        );
      })}
      <span>{rating}</span>
    </fieldset>
  );
};

export default StarRating;
