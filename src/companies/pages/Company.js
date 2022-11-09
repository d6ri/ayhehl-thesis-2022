import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import { COMPLIST } from "../../testData/companies";
import IndexImg from "../../shared/components/UI/IndexImg";
import CompanyAbout from "../components/CompanyAbout.js";
import CompaniesPos from "../components/CompaniesPos";
import CompanyContact from "../components/CompanyContact";
import Reviews from "../../reviews/components/Reviews";

const Company = () => {
  const navigate = useNavigate();
  const cid = useParams().cid;
  const company = COMPLIST.find((comp) => comp.cid.toString() === cid);

  return (
    <div>
      <button onClick={() => navigate(-1)}>Vissza</button>
      <div>
        <IndexImg
          src={`/images/${company.cid}.jpg`}
          alt={company.cid}
          widht='150px'
          height='150px'
        />
        <h1>{company.name}</h1>
      </div>
      <div>
        <h3>Iparág: {company.industry}</h3>
        <h3>Cég mérete: {company.size}</h3>
        <h3>Székhely: {company.headquarters}</h3>
        <h3>Alapítás éve: {company.founded}</h3>
      </div>
      <div>
        <h3>A cégről</h3>
        <CompanyAbout description={company.desc} />
      </div>
      <div>
        <h3>Gyakornoki pozíciók</h3>
        <CompaniesPos cid={company.cid} />
      </div>
      <div>
        <h3>Kapcsolat</h3>
        <CompanyContact contact={company.contact} />
      </div>
      <div>
        <h3>Vélemények</h3>
        <Reviews cid={company.cid} />
      </div>
    </div>
  );
};

export default Company;
