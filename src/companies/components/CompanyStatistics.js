import React from "react";

import { HiStar } from "react-icons/hi";

import { returnReviewValuesByAttribute } from "../../shared/queries";

const CompanyStatistics = ({ cid }) => {
  const attributes = {
    "flexibleSchedule": "Rugalmas munkaidő beosztás",
    "workplaceEnvironment": "Kellemes munkakörnyezet",
    "foreignLanguage": "Idegennyelv tudás szükségessége",
    "mentoring": "Mentori segítség",
    "specificKnowledge": "Differenciált tudás szerzése",
  };
  let overallAvg = 0;
  return (
    <div>
      {Object.keys(attributes).map((attr) => {
        let average = returnReviewValuesByAttribute(cid, attr);
        overallAvg += average;
        return (
          <div key={attr}>
            {attributes[attr]}:<span>{average} pont</span>
            {[...Array(5)].map((star, i) => {
              return <HiStar size='20' color={average <= i ? "#d8d8d8" : "#FFDB33"} />;
            })}
          </div>
        );
      })}
      <p>Összátlag: {overallAvg / Object.keys(attributes).length}</p>
    </div>
  );
};

export default CompanyStatistics;
