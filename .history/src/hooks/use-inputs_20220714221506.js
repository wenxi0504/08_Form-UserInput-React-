import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setEnteredIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);

    //simplify code
    // if (event.target.value.trim() !== "") {
    //   setEnteredNameIsValid(true);
    // }
  };

  return {
    value: enteredValue,
    hasError,
  };
};

export default useInput;
