import React, { useReducer, useEffect } from 'react';

import { validate } from '../../validators';

import './Input.css';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      let validation = validate(action.value, action.validators);
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

const Input = ({
  id,
  elementType,
  type,
  label,
  validators,
  placeholder,
  rows,
  onInput,
  isFormSubmitted,
}) => {
  const hasValidator = validators.length > 0 ? true : false;
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: '',
    isValid: !hasValidator,
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
  }, [value, isValid, id, onInput]);

  const element =
    elementType === 'input' ? (
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={inputState.value}
        onChange={changeHandler}
        onBlur={touchHandler}
        className={`form-input ${
          !inputState.isValid && inputState.isTouched && 'form-input--invalid'
        }`}
      />
    ) : (
      <textarea
        id={id}
        rows={rows || 5}
        value={inputState.value}
        onChange={changeHandler}
        onBlur={touchHandler}
        className={`form-textarea ${
          !inputState.isValid && inputState.isTouched && 'form-textarea--invalid'
        }`}
      />
    );
  return (
    <div
      className={`form-control ${
        !inputState.isValid && inputState.isTouched && 'form-control--invalid'
      }`}
    >
      <label htmlFor={id}>{label}</label>
      {element}
      <div>
        <span
          className={`form-errorMsg ${
            !inputState.isValid && inputState.isTouched && 'form-errorMsg--invalid'
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

export default Input;
