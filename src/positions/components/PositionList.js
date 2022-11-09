import React from "react";

import PositionItem from "./PositionItem.js";
import { RefinePositionSearch } from "../../shared/sharedFunctions.js";
import { departmentOptions as departmentsQuery } from "../../shared/queries.js";

const PositionsList = ({ searchText, filterDepartment, positionsList }) => {
  const departmentOptions = departmentsQuery();
  if (positionsList.length === 0) {
    return <div>Nincsenek nyitott gyakornoki pozíciók.</div>;
  }

  if (searchText === undefined) searchText = "";

  if (filterDepartment === undefined) filterDepartment = departmentOptions;

  const filteredData = RefinePositionSearch(positionsList, searchText, filterDepartment);

  return (
    <ul>
      {filteredData.map((position) => (
        <PositionItem
          pid={position.pid}
          cid={position.cid}
          name={position.name}
          location={position.location}
          department={position.department}
          key={position.pid}
        />
      ))}
    </ul>
  );
};

export default PositionsList;
