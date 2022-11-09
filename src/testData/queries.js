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
  const positions = POSLIST.filter((position) => position.cid === cid);
  return positions;
};

export const starRatingValues = {
  1: "Egyáltalán nem",
  2: "Kevésbé",
  3: "Bizonyos esetekben",
  4: "Nagyrészben igen",
  5: "Teljes mértékben",
};
