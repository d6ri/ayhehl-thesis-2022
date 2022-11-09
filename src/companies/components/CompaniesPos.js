import React from "react";
import PositionsList from "../../positions/components/PositionList";

import { companiesPositionsList } from "../../testData/queries";

const CompaniesPos = ({ cid }) => {
  const FilteredPositions = companiesPositionsList(cid);

  return <PositionsList positionsList={FilteredPositions} />;
};

export default CompaniesPos;
