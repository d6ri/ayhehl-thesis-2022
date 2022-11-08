import React, { useReducer, useEffect } from "react";

import { validate } from "../../validators";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      let validation = validate(action.value, action.validators);
      return {
        ...state,
        value: action.value,
        isValid: validation.isValid,
        errorText: validation.errorText,
      };
    case "TOUCH":
      return { ...state, isTouched: true };
    default:
      return state;
  }
};

const RadioInput = ({ id, inputs, legend, name, validators, onInput }) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
    isTouched: false,
    errorText: "",
  });

  const changeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      value: event.target.value,
      validators: validators,
    });
  };

  const touchHandler = (event) => {
    dispatch({
      type: "TOUCH",
    });
    dispatch({
      type: "CHANGE",
      value: event.target.value,
      validators: validators,
    });
  };

  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [value, isValid, id, onInput]);

  return (
    <fieldset>
      <legend>{legend}</legend>
      {inputs.map((input, i) => {
        const radioId = `${name}-${input.toLowerCase()}`;
        return (
          <div key={`${name}-${i}`}>
            <input
              type="radio"
              value={input}
              name={name}
              id={radioId}
              onChange={changeHandler}
              onBlur={touchHandler}
            />
            <label htmlFor={radioId}>{input}</label>
          </div>
        );
      })}
      <p>{!inputState.isValid && inputState.errorText}</p>
    </fieldset>
  );
};

export default RadioInput;
