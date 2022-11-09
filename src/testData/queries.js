import { POSLIST } from "./positions";
import { COMPLIST } from "./companies";

export const departmentOptions = () => {
  const departments = [];
  POSLIST.forEach((e) => {
    if (!departments.includes(e.department)) {
      departments.push(e.department);
      departments.sort();
    }
  });
  return departments;
};

export const companiesOptions = () => {
  const companies = [];
  COMPLIST.forEach((e) => {
    if (!companies.includes(e.name)) {
      companies.push(e.name);
      companies.sort();
    }
  });
  return companies;
};

export const companiesPositionsList = (cid) => {
  return POSLIST.filter((position) => position.cid === cid);
};

export const findCompanyByID = (cid) => {
  return COMPLIST.find((company) => (company.cid = cid));
};
