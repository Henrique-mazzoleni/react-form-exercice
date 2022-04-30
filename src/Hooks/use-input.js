import { useState } from "react";

const useInput = (validationFunction) => {
  const [inputValue, setInputValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  let isValid = validationFunction(inputValue)
  const inputIsInvalid = !isValid && isTouched;

  let classes = "form-control";
  if (inputIsInvalid) classes = "form-control invalid";

  const inputHandler = (event) => {
    setInputValue(event.target.value);
  };

  const blurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setIsTouched(false);
    setInputValue("");
  }

  return {
    value: inputValue,
    isValid,
    inputIsInvalid,
    classes,
    inputHandler,
    blurHandler,
    reset
  }
};

export default useInput;
