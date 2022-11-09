import React from "react";

import ReviewItem from "../components/ReviewItem.js";

const ReviewList = (reviewList) => {
  return (
    <ul>
      {reviewList.map((review) => {
        <ReviewItem
          uid={review.uid}
          date={review.date}
          position={review["formValues"]["position"]}
          suggestion={""}
        />;
      })}
    </ul>
  );
};

export default ReviewList;
