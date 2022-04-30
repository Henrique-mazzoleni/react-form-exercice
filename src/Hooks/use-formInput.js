import { useState } from 'react';

const useFormInput = (validationFunction) => {
    const [value, setValue] = useState("");
    const [touched, setTouched] = useState(false);
  
    let isValid = validationFunction(value);
    const hasError = !isValid && touched;
    let classes = 'form-control';
    if (hasError) classes += ' invalid';
  
    const inputHandler = (event) => {
      setValue(event.target.value);
    };
  
    const blurHandler = () => {
      setTouched(true);
    };

    const reset = () => {
        setValue('');
        setTouched(false);
    }

    return {
        value,
        isValid,
        hasError,
        classes,
        inputHandler,
        blurHandler,
        reset
    }
}

export default useFormInput;