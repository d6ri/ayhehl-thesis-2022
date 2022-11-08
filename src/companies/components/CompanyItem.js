import React from "react";
import { Link } from "react-router-dom";

import Card from "../../shared/components/UI/Card";
import IndexImg from "../../shared/components/UI/IndexImg";
import Button from "../../shared/components/FormElements/Button";

const CompanyItem = ({ cid, name, industry, headquarters, size }) => {
  return (
    <li>
      <Card>
        <div className="positem__head">
          <IndexImg src={`/images/${cid}.jpg`} alt={cid} widht="100px" height="100px" />
          <Link to={`/companies/${cid}`}>
            <h2>{name}</h2>
          </Link>
        </div>
        <div className="positem__info">
          <h3>Iparág:</h3>
          <span>
            {industry.length > 1 ? industry.map((e) => <span key={e}>{e} </span>) : industry}
          </span>
          <h3>Székhelye:</h3>
          <span>{headquarters}</span>
          <h3>Mérete:</h3>
          <span>{size}</span>
          <br />
          <Button to={`/companies/${cid}`}>Részletek</Button>
        </div>
      </Card>
    </li>
  );
};

export default CompanyItem;
