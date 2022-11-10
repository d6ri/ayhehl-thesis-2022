import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { COMPLIST } from "../../testData/companies";
import IndexImg from "../../shared/components/UI/IndexImg";
import CompanyAbout from "../components/CompanyAbout.js";
import CompaniesPos from "../components/CompaniesPos";
import CompanyContact from "../components/CompanyContact";
import Reviews from "../../reviews/components/Reviews";
import Tabs from "../../shared/components/UI/Tab/Tabs";
import Tab from "../../shared/components/UI/Tab/Tab";
import { AuthContext } from "../../shared/context/auth-context";

const Company = () => {
  const auth = useContext(AuthContext);
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
      <Tabs>
        <Tab
          id={"aboutTab"}
          navTitle={"Rólunk"}
          content={<CompanyAbout description={company.desc} />}
        />
        <Tab
          id={"companyPositions"}
          navTitle={"Gyakornoki pozíciók"}
          content={<CompaniesPos cid={company.cid} />}
        />
        <Tab
          id={"companyContact"}
          navTitle={"Kapcsolat"}
          content={<CompanyContact contact={company.contact} />}
        />
        {auth.isLoggedIn && (
          <Tab
            id={"companyReviews"}
            navTitle={"Vélemények"}
            content={<Reviews cid={company.cid} />}
          />
        )}
      </Tabs>
    </div>
  );
};

export default Company;
