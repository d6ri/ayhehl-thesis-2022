import React from "react";

const RadioInput = (props) => {
  return (
    <fieldset>
      <legend>{props.legend}</legend>
      {props.inputs.map((input, i) => {
        return (
          <div key={`${props.name}-${i}`}>
            <input
              type="radio"
              value={input}
              name={props.name}
              id={`${props.name}-${input.toLowerCase()}`}
              required
            />
            <label htmlFor={`${props.name}-${input.toLowerCase()}`}>{input}</label>
          </div>
        );
      })}
    </fieldset>
  );
};

export default RadioInput;
