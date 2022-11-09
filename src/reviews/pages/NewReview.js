import React, { useCallback, useReducer } from "react";

import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import Select from "../../shared/components/FormElements/Select";
import StarRating from "../../shared/components/FormElements/StarRating";
import RadioInput from "../../shared/components/FormElements/RadioInput";
import { VALIDATOR_EMPTY, VALIDATOR_MINLEN } from "../../shared/validators";
import {
  departmentOptions as departmentsQuery,
  starRatingValues,
  companiesOptions as companiesQuery,
} from "../../testData/queries";

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE": {
      // set the overall form validity
      let isFormValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          isFormValid = isFormValid && action.isValid;
        } else {
          isFormValid = isFormValid && state.inputs[inputId].isValid;
        }
      }

      // update the inputs due to the current change
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isFormValid: isFormValid,
      };
    }
    case "SUBMITTED": {
      return {
        ...state,
        isSubmitted: true,
      };
    }
    default:
      return state;
  }
};

const NewReview = () => {
  const departmentOptions = departmentsQuery();
  const companiesOptions = companiesQuery();

  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      companyName: { value: "", isValid: false },
      position: { value: "", isValid: false },
      department: { value: "", isValid: false },
      tasks: { value: "", isValid: false },
      theoreticalKnowledge: { value: "", isValid: false },
      foreignLanguage: { value: "", isValid: false },
      flexibleSchedule: { value: "", isValid: false },
      neededEquipments: { value: "", isValid: false },
      mentoring: { value: "", isValid: false },
      specificKnowledge: { value: "", isValid: false },
      workplaceEnvironment: { value: "", isValid: false },
      thesis: { value: "", isValid: false },
      jobOffer: { value: "", isValid: false },
      suggestions: { value: "", isValid: false },
    },
    isFormValid: false,
    isSubmitted: false,
  });

  //#region Handler methods
  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({ type: "INPUT_CHANGE", inputId: id, value: value, isValid: isValid });
  }, []);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    dispatch({ type: "SUBMITTED" });
    if (formState.isFormValid) {
      document.getElementById("addNewReviewForm").reset();
      window.alert("Értékelés sikeresen rögzítve!");
      window.location.reload();
    }
  };
  //#endregion

  return (
    <form onSubmit={formSubmitHandler} id='addNewReviewForm'>
      <Select
        id='companyName'
        label='Melyik cégnél töltötted a szakmai gyakorlatod? *'
        options={companiesOptions}
        defaultOption='Válaszd ki a céget'
        validators={[VALIDATOR_EMPTY()]}
        onInput={inputHandler}
        isFormSubmitted={formState.isSubmitted}
        required={true}
      />
      <Input
        id='position'
        elementType='input'
        type='text'
        label='Milyen pozíciót töltöttél be a szakmai gyakorlatod során? *'
        placeholder='Pozíció megnevezése'
        validators={[VALIDATOR_EMPTY(), VALIDATOR_MINLEN(3)]}
        onInput={inputHandler}
        isFormSubmitted={formState.isSubmitted}
      />
      <Select
        id='department'
        label='Milyen területen dolgoztál? *'
        options={departmentOptions}
        defaultOption='Válassz egy területet'
        validators={[VALIDATOR_EMPTY()]}
        onInput={inputHandler}
        isFormSubmitted={formState.isSubmitted}
        required={true}
      />
      <Input
        id='tasks'
        elementType='textarea'
        type='text'
        label='Milyen feladatokat kellett elvégezned?'
        validators={[]}
        onInput={inputHandler}
        isFormSubmitted={formState.isSubmitted}
      />
      {
        // #region Star rating fields
      }
      <StarRating
        id='theoreticalKnowledge'
        label='Mennyire tudtad alkalmazni a tanulmányaid során szerzett elméleti tudást a szakmai gyakorlatod során?  *'
        inputs={starRatingValues}
        onInput={inputHandler}
        isFormSubmitted={formState.isSubmitted}
        required={true}
      />
      <StarRating
        id='foreignLanguage'
        label='Mennyire volt szükség a munkád elvégzéséhez idegennyelv-ismeretekre?'
        inputs={starRatingValues}
        onInput={inputHandler}
        isFormSubmitted={formState.isSubmitted}
        required={true}
      />
      <StarRating
        id='flexibleSchedule'
        label='Biztosított a tanulmányokhoz igazodó, rugalmas munkaidő beosztást a szakmai gyakorlati cég?'
        inputs={starRatingValues}
        onInput={inputHandler}
        isFormSubmitted={formState.isSubmitted}
        required={true}
      />
      <StarRating
        id='neededEquipments'
        label='Minden szükséges eszközt biztosított a cég a munkavégzésedhez?'
        inputs={starRatingValues}
        onInput={inputHandler}
        isFormSubmitted={formState.isSubmitted}
        required={true}
      />
      <StarRating
        id='mentoring'
        label='Nyújtott a cég mentori segítséget a gyakorlat alatt? '
        inputs={starRatingValues}
        onInput={inputHandler}
        isFormSubmitted={formState.isSubmitted}
        required={true}
      />
      <StarRating
        id='specificKnowledge'
        label='A gyakorlati idő alatt volt lehetőséged differenciált szakmai ismeretekre vagy vállalatspecifikus technológiai tudásra szert tenni? '
        inputs={starRatingValues}
        onInput={inputHandler}
        isFormSubmitted={formState.isSubmitted}
        required={true}
      />
      <StarRating
        id='workplaceEnvironment'
        label='Pozitívnak értékelnéd a munkahelyi légkört, munkatársakat? '
        inputs={starRatingValues}
        onInput={inputHandler}
        isFormSubmitted={formState.isSubmitted}
        required={true}
      />
      {
        // #endregion
      }
      {
        //#region Radion button input fields
      }
      <RadioInput
        id='thesis'
        name='thesis'
        legend='Kaptál a cégtől szakdolgozati témajavaslatot vagy külső konzulensi támogatást? *'
        inputs={["Igen", "Nem"]}
        onInput={inputHandler}
        isFormSubmitted={formState.isSubmitted}
        required={true}
      />
      <RadioInput
        id='jobOffer'
        name='jobOffer'
        legend='Ajánlott a cég lehetőséget a szakmai gyakorlat elvégzése után valamely (junior) pozíción
		való elhelyezkedéshez? *'
        inputs={["Igen", "Nem"]}
        onInput={inputHandler}
        isFormSubmitted={formState.isSubmitted}
        required={true}
      />
      {
        //#endregion
      }
      <Input
        id='suggestions'
        elementType='textarea'
        type='text'
        label='Fogalmazd meg javaslataidat, észrevételeid, véleményed az eltöltött szakmai gyakorlattal kapcsolatban! '
        validators={[]}
        onInput={inputHandler}
        isFormSubmitted={formState.isSubmitted}
      />
      <Button type='submit'>Értékelés elküldése</Button>
    </form>
  );
};

export default NewReview;
