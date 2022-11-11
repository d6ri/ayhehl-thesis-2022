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

export const returnReviewValuesByAttribute = (cid, attribute) => {
  const reviewsListByCompany = findReviewsByCompanyID(cid);
  const reviewValuesListByCompany = reviewsListByCompany.map((review) => {
    return review["formValues"];
  });
  const reviewValuesByAttribute = reviewValuesListByCompany.map((review) => {
    return parseInt(review[attribute]);
  });
  const average =
    reviewValuesByAttribute.reduce((a, b) => a + b, 0) / reviewValuesByAttribute.length;
  return average;
};
