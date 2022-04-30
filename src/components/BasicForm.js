import React from "react";
import useFormInput from "../Hooks/use-formInput";

const BasicForm = () => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    classes: firstNameClasses,
    inputHandler: firstNameInputHandler,
    blurHandler: firstNameBlurHandler,
    reset: firstNameReset,
  } = useFormInput((value) => value.trim().length !== 0);

  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    classes: lastNameClasses,
    inputHandler: lastNameInputHandler,
    blurHandler: lastNameBlurHandler,
    reset: lastNameReset,
  } = useFormInput((value) => value.trim().length !== 0);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    classes: emailClasses,
    inputHandler: emailInputHandler,
    blurHandler: emailBlurHandler,
    reset: emailReset,
  } = useFormInput((value) => value.includes("@"));

  const formIsValid = firstNameIsValid && lastNameIsValid && emailIsValid;

  const submitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      if (!firstNameIsValid) 
      
      return;
    };

    console.log(firstNameValue, lastNameValue, emailValue);

    firstNameReset();
    lastNameReset();
    emailReset();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstNameValue}
            onChange={firstNameInputHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && (
            <p className="error-text">Field must not be Empty!</p>
          )}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastNameValue}
            onChange={lastNameInputHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasError && (
            <p className="error-text">Field must not be Empty!</p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={emailValue}
          onChange={emailInputHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && <p className="error-text">Please enter a valid email!</p>}
      </div>
      <div className="form-actions">
        <button type="submit" disabled={!formIsValid} >Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
