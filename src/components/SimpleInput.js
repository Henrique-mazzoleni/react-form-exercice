import React from "react";

import useInput from "../Hooks/use-input";

const SimpleInput = () => {
  const {
    value: nameInput,
    isValid: nameIsValid,
    inputIsInvalid: nameInputIsInvalid,
    classes: nameClasses,
    inputHandler: nameInputHandler,
    blurHandler: nameBlurHandler,
    reset: nameReset
  } = useInput(value => value.trim().length !== 0)

  const {
    value: emailInput,
    isValid: emailIsValid,
    inputIsInvalid: emailInputIsInvalid,
    classes: emailClasses,
    inputHandler: emailInputHandler,
    blurHandler: emailBlurHandler,
    reset: emailReset
  } = useInput(value => value.includes('@'));

  const formIsValid = nameIsValid && emailIsValid;

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(nameInput, emailInput);
    
    nameReset();
    emailReset();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={nameClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          value={nameInput}
          onChange={nameInputHandler}
          onBlur={nameBlurHandler}
          id="name"
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name field cannot be empty!</p>
        )}
      </div>
      <div className={emailClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          value={emailInput}
          onChange={emailInputHandler}
          onBlur={emailBlurHandler}
          id="email"
        />
        {emailInputIsInvalid && (
          <p className="error-text">Please enter a valid email!</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
