import React from "react";

import Card from "../../shared/components//UI/Card.js";

import { USERSLIST } from "../../testData/users.js";

const ReviewItem = ({ uid, date, position, suggestions }) => {
  // find user by review.uid --> program
  const user = USERSLIST.find((user) => user.uid === uid);
  return (
    <li>
      <Card>
        <h2>{`${user.program} szakos hallgató, ${position} pozíció`}</h2>
        <span>{date}</span>
        <p>{suggestions}</p>
      </Card>
    </li>
  );
};

export default ReviewItem;
