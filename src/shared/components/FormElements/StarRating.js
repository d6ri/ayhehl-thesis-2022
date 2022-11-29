import React, { useReducer, useEffect } from 'react';

import { FaStar } from 'react-icons/fa';

import './StarRating.css';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      return {
        ...state,
        value: action.value,
        valueText: action.valueText,
        isTouched: true,
        isValid: true,
      };
    default:
      return state;
  }
};

const StarRating = ({ id, label, onInput, isFormSubmitted, required, inputs }) => {
  const isRequired = required ? true : false;
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: 0,
    valueText: '',
    isValid: !isRequired,
    isTouched: false,
  });

  function clickHandler(number, valueText) {
    dispatch({ type: 'INPUT_CHANGE', value: number, valueText: valueText });
  }

  useEffect(() => {
    onInput(id, inputState.value, inputState.isValid);
  }, [inputState.value, inputState.isValid, id, onInput]);

  return (
    <div
      className={`form-control ${
        (!inputState.isValid && inputState.isTouched && 'form-control--invalid') ||
        (!inputState.isValid && !inputState.isTouched && isFormSubmitted && 'form-control--invalid')
      }`}
    >
      <fieldset id={id} className='star-container'>
        <legend>{label}</legend>
        {Object.keys(inputs).map((number) => {
          return (
            <button
              id={`${id}-${number}`}
              key={`${id}-${number}`}
              number={number}
              onClick={() => clickHandler(number, inputs[number])}
              type='button'
              className='star-btn'
            >
              <FaStar size='30' color={number <= inputState.value ? '#FFDB33' : '#d8d8d8'} />
            </button>
          );
        })}
        <span className='star-value-text'>{inputState.valueText}</span>
        <div>
          <span
            className={`form-errorMsg ${
              (!inputState.isValid && inputState.isTouched && 'form-errorMsg--invalid') ||
              (!inputState.isValid &&
                !inputState.isTouched &&
                isFormSubmitted &&
                'form-errorMsg--invalid')
            }`}
          >
            {!inputState.isValid &&
              !inputState.isTouched &&
              isFormSubmitted &&
              'Kötelezően kitöltendő mező!'}
          </span>
        </div>
      </fieldset>
    </div>
  );
};

export default StarRating;
