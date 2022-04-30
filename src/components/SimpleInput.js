import React, { useState } from "react";

const SimpleInput = () => {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [nameInputIsTouched, setNameInputIsTouched] = useState(false);
  const [emailInputIsTouched, setEmailInputIsTouched] = useState(false);

  let nameIsValid = nameInput.trim().length !== 0;
  const nameInputIsInvalid = !nameIsValid && nameInputIsTouched;
  let emailIsValid = emailInput.includes("@");
  const emailInputIsInvalid = !emailIsValid && emailInputIsTouched;
  const formIsValid = nameIsValid && emailIsValid;

  let nameClasses = "form-control";
  if (nameInputIsInvalid) nameClasses = "form-control invalid";
  let emailClasses = "form-control";
  if (emailInputIsInvalid) emailClasses = "form-control invalid";

  const nameInputHandler = (event) => {
    setNameInput(event.target.value);
  };

  const emailInputHandler = (event) => {
    setEmailInput(event.target.value);
  };

  const nameInputBlurHandler = () => {
    setNameInputIsTouched(true);
  };

  const emailInputBlurHandler = () => {
    setEmailInputIsTouched(true);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    console.log(nameInput, emailInput);
    setNameInputIsTouched(false);
    setEmailInputIsTouched(false);
    setEmailInput("");
    setNameInput("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={nameClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          value={nameInput}
          onChange={nameInputHandler}
          onBlur={nameInputBlurHandler}
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
          onBlur={emailInputBlurHandler}
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
