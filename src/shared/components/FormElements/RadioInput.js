import React from "react";

const RadioInput = ({ inputs, legend, name }) => {
  return (
    <fieldset>
      <legend>{legend}</legend>
      {inputs.map((input, i) => {
        const id = `${name}-${input.toLowerCase()}`;
        return (
          <div key={`${name}-${i}`}>
            <input type="radio" value={input} name={name} id={id} required />
            <label htmlFor={id}>{input}</label>
          </div>
        );
      })}
    </fieldset>
  );
};

export default RadioInput;
