import React, { useReducer, useEffect } from 'react';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.value,
        isValid: true,
        isTouched: true,
      };
    default:
      return state;
  }
};

const RadioInput = ({
  id,
  inputs,
  legend,
  name,
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
  });

  const changeHandler = (event) => {
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

  return (
    <div
      className={`form-control ${
        (!inputState.isValid && inputState.isTouched && 'form-control--invalid') ||
        (!inputState.isValid && !inputState.isTouched && isFormSubmitted && 'form-control--invalid')
      }`}
    >
      <fieldset className='radioinput'>
        <legend>{legend}</legend>
        {inputs.map((input, i) => {
          const radioId = `${name}-${input.toLowerCase()}`;
          return (
            <div key={`${name}-${i}`}>
              <input type='radio' value={input} name={name} id={radioId} onChange={changeHandler} />
              <label htmlFor={radioId}>{input}</label>
            </div>
          );
        })}
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

export default RadioInput;
