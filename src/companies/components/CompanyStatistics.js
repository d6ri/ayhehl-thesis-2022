import React from "react";

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
          <p key={attr}>
            {attributes[attr]}: <span>{average} pont</span>
          </p>
        );
      })}
      <p>Összátlag: {overallAvg / Object.keys(attributes).length} / 5 pont</p>
    </div>
  );
};

export default CompanyStatistics;
