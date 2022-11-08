import { POSLIST } from "./positions";

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

export const starRatingValues = {
  1: "Egyáltalán nem",
  2: "Kevésbé",
  3: "Bizonyos esetekben",
  4: "Nagyrészben igen",
  5: "Teljes mértékben",
};
