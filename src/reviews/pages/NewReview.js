import React, { useCallback, useReducer } from 'react';

import Button from '../../shared/components/FormElements/Button';
import Input from '../../shared/components/FormElements/Input';
import Select from '../../shared/components/FormElements/Select';
import StarRating from '../../shared/components/FormElements/StarRating';
import RadioInput from '../../shared/components/FormElements/RadioInput';
import { VALIDATOR_EMPTY, VALIDATOR_MINLEN } from '../../shared/validators';
import {
  departmentOptions as departmentsQuery,
  companiesOptions as companiesQuery,
} from '../../shared/queries';
import { reviewFormInitialInputs, starRatingValues } from '../../shared/constants';
import './NewReview.css';
import Card from '../../shared/components/UI/Card';

const formReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE': {
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
    case 'SUBMITTED': {
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
    inputs: reviewFormInitialInputs,
    isFormValid: false,
    isSubmitted: false,
  });

  //#region Handler methods
  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({ type: 'INPUT_CHANGE', inputId: id, value: value, isValid: isValid });
  }, []);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    dispatch({ type: 'SUBMITTED' });
    if (formState.isFormValid) {
      document.getElementById('addNewReviewForm').reset();
      window.alert('??rt??kel??s sikeresen r??gz??tve!');
      window.location.reload();
    }
  };
  //#endregion

  return (
    <div>
      <h2 className='pageTitle'>??j ??rt??kel??s</h2>
      <Card className='addNewReviewForm'>
        <form onSubmit={formSubmitHandler} id='addNewReviewForm'>
          <Select
            id='companyId'
            label='Melyik c??gn??l t??lt??tted a szakmai gyakorlatod? *'
            options={companiesOptions}
            defaultOption='V??laszd ki a c??get'
            validators={[VALIDATOR_EMPTY()]}
            onInput={inputHandler}
            isFormSubmitted={formState.isSubmitted}
            required={true}
          />
          <Input
            id='position'
            elementType='input'
            type='text'
            label='Milyen poz??ci??t t??lt??tt??l be a szakmai gyakorlatod sor??n? *'
            placeholder='Poz??ci?? megnevez??se'
            validators={[VALIDATOR_EMPTY(), VALIDATOR_MINLEN(3)]}
            onInput={inputHandler}
            isFormSubmitted={formState.isSubmitted}
          />
          <Select
            id='department'
            label='Milyen ter??leten dolgozt??l? *'
            options={departmentOptions}
            defaultOption='V??lassz egy ter??letet'
            validators={[VALIDATOR_EMPTY()]}
            onInput={inputHandler}
            isFormSubmitted={formState.isSubmitted}
            required={true}
          />
          <Input
            id='tasks'
            elementType='textarea'
            type='text'
            label='Milyen feladatokat kellett elv??gezned?'
            validators={[]}
            onInput={inputHandler}
            isFormSubmitted={formState.isSubmitted}
          />
          {
            // #region Star rating fields
          }
          <StarRating
            id='theoreticalKnowledge'
            label='Mennyire tudtad alkalmazni a tanulm??nyaid sor??n szerzett elm??leti tud??st a szakmai gyakorlatod sor??n?  *'
            inputs={starRatingValues}
            onInput={inputHandler}
            isFormSubmitted={formState.isSubmitted}
            required={true}
          />
          <StarRating
            id='foreignLanguage'
            label='Mennyire volt sz??ks??g a munk??d elv??gz??s??hez idegennyelv-ismeretekre?'
            inputs={starRatingValues}
            onInput={inputHandler}
            isFormSubmitted={formState.isSubmitted}
            required={true}
          />
          <StarRating
            id='flexibleSchedule'
            label='Biztos??tott a tanulm??nyokhoz igazod??, rugalmas munkaid?? beoszt??st a szakmai gyakorlati c??g?'
            inputs={starRatingValues}
            onInput={inputHandler}
            isFormSubmitted={formState.isSubmitted}
            required={true}
          />
          <StarRating
            id='neededEquipments'
            label='Minden sz??ks??ges eszk??zt biztos??tott a c??g a munkav??gz??sedhez?'
            inputs={starRatingValues}
            onInput={inputHandler}
            isFormSubmitted={formState.isSubmitted}
            required={true}
          />
          <StarRating
            id='mentoring'
            label='Ny??jtott a c??g mentori seg??ts??get a gyakorlat alatt? '
            inputs={starRatingValues}
            onInput={inputHandler}
            isFormSubmitted={formState.isSubmitted}
            required={true}
          />
          <StarRating
            id='specificKnowledge'
            label='A gyakorlati id?? alatt volt lehet??s??ged differenci??lt szakmai ismeretekre vagy v??llalatspecifikus technol??giai tud??sra szert tenni? '
            inputs={starRatingValues}
            onInput={inputHandler}
            isFormSubmitted={formState.isSubmitted}
            required={true}
          />
          <StarRating
            id='workplaceEnvironment'
            label='Pozit??vnak ??rt??keln??d a munkahelyi l??gk??rt, munkat??rsakat? '
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
            legend='Kapt??l a c??gt??l szakdolgozati t??majavaslatot vagy k??ls?? konzulensi t??mogat??st? *'
            inputs={['Igen', 'Nem']}
            onInput={inputHandler}
            isFormSubmitted={formState.isSubmitted}
            required={true}
          />
          <RadioInput
            id='jobOffer'
            name='jobOffer'
            legend='Aj??nlott a c??g lehet??s??get a szakmai gyakorlat elv??gz??se ut??n valamely (junior) poz??ci??n
		val?? elhelyezked??shez? *'
            inputs={['Igen', 'Nem']}
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
            label='Fogalmazd meg javaslataidat, ??szrev??teleid, v??lem??nyed az elt??lt??tt szakmai gyakorlattal kapcsolatban! '
            validators={[]}
            onInput={inputHandler}
            isFormSubmitted={formState.isSubmitted}
          />
          <Button type='submit'>??rt??kel??s elk??ld??se</Button>
        </form>
      </Card>
    </div>
  );
};

export default NewReview;
