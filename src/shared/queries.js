import { POSLIST } from "../testData/positions";
import { COMPLIST } from "../testData/companies";
import { REVIEWSLIST } from "../testData/reviews";

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
    companies.push({ id: e.cid, value: e.name });
  });
  return companies;
};

export const companiesPositionsList = (cid) => {
  return POSLIST.filter((position) => position.cid === cid);
};

export const findCompanyByID = (cid) => {
  return COMPLIST.find((company) => (company.cid = cid));
};

export const findReviewsByCompanyID = (cid) => {
  return REVIEWSLIST.filter((review) => review["formValues"]["companyId"] === cid);
};
