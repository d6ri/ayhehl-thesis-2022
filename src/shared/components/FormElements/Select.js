import React, { useReducer, useEffect } from 'react';

import { validate } from '../../validators';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      const validation = validate(action.value, action.validators);
      return {
        ...state,
        value: action.value,
        isValid: validation.isValid,
        errorText: validation.errorText,
      };
    case 'TOUCH':
      return { ...state, isTouched: true };
    default:
      return state;
  }
};

const Select = ({
  id,
  label,
  options,
  defaultOption,
  validators,
  onInput,
  isFormSubmitted,
  required,
}) => {
  const isRequired = required ? true : false;
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: '',
    isValid: !isRequired,
    isTouched: false,
    errorText: '',
  });

  const changeHandler = (event) => {
    dispatch({
      type: 'CHANGE',
      value: event.target.value,
      validators: validators,
    });
  };

  const touchHandler = (event) => {
    dispatch({
      type: 'TOUCH',
    });
    dispatch({
      type: 'CHANGE',
      value: event.target.value,
      validators: validators,
    });
  };

  const { value, isValid } = inputState;
  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  return (
    <div
      className={`form-control ${
        !inputState.isValid && inputState.isTouched && 'form-control--invalid'
      }`}
    >
      <label htmlFor={id}>{label}</label>
      <select
        name={id}
        id={id}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      >
        <option value='' disabled>
          {defaultOption}
        </option>
        {options.map((e) => {
          if (typeof e === 'object') {
            return (
              <option value={e['id']} key={e['id']}>
                {e['value']}
              </option>
            );
          } else if (typeof e === 'string') {
            return (
              <option value={e} key={e}>
                {e}
              </option>
            );
          } else return null;
        })}
      </select>
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
          {(!inputState.isValid && inputState.isTouched && inputState.errorText) ||
            (!inputState.isValid &&
              !inputState.isTouched &&
              isFormSubmitted &&
              'Kötelezően kitöltendő mező, ne hagyd üresen!')}
        </span>
      </div>
    </div>
  );
};

export default Select;
