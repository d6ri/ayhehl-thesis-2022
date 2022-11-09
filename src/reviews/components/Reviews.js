import React from "react";

import ReviewList from "./ReviewList";
import { findReviewsByCompanyID } from "../../shared/queries";

const Reviews = ({ cid }) => {
  const reviewList = findReviewsByCompanyID(cid);
  return <ReviewList reviewList={reviewList} />;
};

export default Reviews;
