import { React, useState } from "react";

import { POSLIST } from "../../testData/positions";
import PositionsList from "../components/PositionList";
import { departmentOptions as departmentsQuery } from "../../testData/queries";

const Positions = () => {
  const departmentOptions = departmentsQuery();

  const [inputText, setInputText] = useState("");
  function inputTextHandler(e) {
    setInputText(e.target.value.toLowerCase());
  }

  const [inputDepartment, setInputDepartment] = useState([]);
  function inputDepHandler(e) {
    const button = e.target;

    button.toggleAttribute("data-unchoosen");

    if (!button.hasAttribute("data-unchoosen")) {
      setInputDepartment([...inputDepartment, button.value]);
      button.setAttribute("data-choosen", "true");
    } else {
      setInputDepartment(inputDepartment.filter((dep) => dep !== button.value));
      button.toggleAttribute("data-choosen");
    }
  }

  return (
    <div>
      <div className="searchBar">
        <input
          onChange={inputTextHandler}
          defaultValue=""
          type="text"
          placeholder="Keresés a pozíciók között"
          label="Search"
        />
        <div>
          {departmentOptions.map((dep) => (
            <button
              name="department"
              value={dep}
              onClick={inputDepHandler}
              key={dep}
              data-unchoosen
            >
              {dep}
            </button>
          ))}
        </div>
      </div>
      <PositionsList
        searchText={inputText}
        filterDepartment={inputDepartment}
        positionsList={POSLIST}
      />
    </div>
  );
};

export default Positions;
