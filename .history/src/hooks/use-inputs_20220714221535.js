import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setEnteredIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const nameInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);

    //simplify code
    // if (enteredName.trim() === "") {
    //   setEnteredNameIsValid(false);
    // }
  };

  return {
    value: enteredValue,
    hasError,
  };
};

export default useInput;
