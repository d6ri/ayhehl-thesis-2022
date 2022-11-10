import React, { useReducer, useCallback } from "react";

import Input from "../components/FormElements/Input";
import Button from "../components/FormElements/Button";
import { VALIDATOR_EMPTY, VALIDATOR_MINLEN } from "../validators";
import Card from "../components/UI/Card";
import "./Auth.css";

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

const Auth = () => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: { username: "", password: "" },
    isFormValid: false,
    isSubmitted: false,
  });

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({ type: "INPUT_CHANGE", inputId: id, value: value, isValid: isValid });
  }, []);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    dispatch({ type: "SUBMITTED" });
    if (!formState.isFormValid) {
      console.log("hiba!!!");
    }
    // if (formState.isFormValid) {
    //   document.getElementById("loginForm").reset();
    //   window.alert("Értékelés sikeresen rögzítve!");
    //   window.location.reload();
    // }
  };
  return (
    <Card className='auth-card'>
      <h2>Bejelentkezés</h2>
      <form onSubmit={formSubmitHandler} id='loginForm'>
        <Input
          id='username'
          elementType='input'
          type='text'
          label='Felhasználónév'
          placeholder='Felhasználónév'
          validators={[VALIDATOR_EMPTY(), VALIDATOR_MINLEN(6)]}
          onInput={inputHandler}
          isFormSubmitted={formState.isSubmitted}
        />
        <Input
          id='password'
          elementType='input'
          type='password'
          label='Jelszó'
          validators={[VALIDATOR_EMPTY()]}
          onInput={inputHandler}
          isFormSubmitted={formState.isSubmitted}
        />
        <Button type='submit'>Bejelentkezés</Button>
      </form>
    </Card>
  );
};

export default Auth;
