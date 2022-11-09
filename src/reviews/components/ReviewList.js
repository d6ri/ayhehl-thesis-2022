import React from "react";

import ReviewItem from "../components/ReviewItem.js";

const ReviewList = ({ reviewList }) => {
  return (
    <ul>
      {reviewList.map((review) => {
        return (
          <ReviewItem
            uid={review["uid"]}
            date={review["date"]}
            position={review["formValues"]["position"]}
            suggestions={review["formValues"]["suggestions"]}
            key={review["rid"]}
          />
        );
      })}
    </ul>
  );
};

export default ReviewList;
