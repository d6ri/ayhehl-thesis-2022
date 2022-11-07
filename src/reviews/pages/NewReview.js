import React from "react";

import Input from "../../shared/components/FormElements/Input";
import Select from "../../shared/components/FormElements/Select";
import StarRating from "../../shared/components/FormElements/StarRating";
import RadioInput from "../../shared/components/FormElements/RadioInput";
import { VALIDATOR_EMPTY, VALIDATOR_MINLEN } from "../../shared/validators";
import { POSLIST } from "../../testData/positions.js";

const NewReview = () => {
  const departmentOptions = [];
  POSLIST.forEach((e) => {
    if (!departmentOptions.includes(e.department)) {
      departmentOptions.push(e.department);
      departmentOptions.sort();
    }
  });

  return (
    <form>
      <Input
        element="input"
        type="text"
        id="position"
        label="Milyen pozíciót töltöttél be a szakmai gyakorlatod során? *"
        placeholder="Pozíció megnevezése"
        validators={[VALIDATOR_EMPTY(), VALIDATOR_MINLEN(3)]}
      />
      <Select
        id="department"
        label="Milyen területen dolgoztál? *"
        options={departmentOptions}
        validators={[VALIDATOR_EMPTY()]}
      />

      <Input
        element="textarea"
        type="text"
        id="tasks"
        label="Milyen feladatokat kellett elvégezned?"
        validators={[]}
      />
      <StarRating id="theoreticalKnowledge" label="Tanulmányok és munka közötti átfedés" />
      <StarRating
        id="foreignLanguage"
        label="Mennyire volt szükség a munkád elvégzéséhez idegennyelv-ismeretekre?"
      />
      <RadioInput
        inputs={["Igen", "Nem"]}
        legend="Kaptál a cégtől szakdolgozati témajavaslatot vagy külső konzulensi támogatást? *"
        name="thesis"
      />
      <RadioInput
        inputs={["Igen", "Nem"]}
        legend="Ajánlott a cég lehetőséget a szakmai gyakorlat elvégzése után valamely (junior) pozíción
		való elhelyezkedéshez? *"
        name="jobOffer"
      />
      <Input
        element="textarea"
        type="text"
        id="suggestions"
        label="Fogalmazd meg javaslataidat, észrevételeid, véleményed az eltöltött szakmai gyakorlattal kapcsolatban! "
        validators={[]}
      />
    </form>
  );
};

export default NewReview;
