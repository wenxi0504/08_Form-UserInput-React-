import { useEffect, useRef, useState } from "react";

const SimpleInput = (props) => {
  //method 2 use ref
  const nameInputRef = useRef();

  // method 1 use State,only needs the value once
  const [enteredName, setEnteredName] = useState("");
  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  // const [formIsValid, setFormIsValid] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== " ";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  //method2: check form valid
  let formIsValid = false;
  if (enteredNameIsValid) {
    formIsValid = true;
  } else {
    formIsValid = false;
  }

  // method1: check form valid
  // useEffect(() => {
  //   if (enteredNameIsValid) {
  //     setFormIsValid(true);
  //   } else {
  //     setFormIsValid(false);
  //   }
  // }, [enteredNameIsValid]);

  // useEffect(() => {
  //   if (enteredNameIsValid) {
  //     console.log("Name Input is valid!");
  //   }
  // }, [enteredNameIsValid]);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);

    //simplify code
    // if (event.target.value.trim() !== "") {
    //   setEnteredNameIsValid(true);
    // }
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);

    //simplify code
    // if (enteredName.trim() === "") {
    //   setEnteredNameIsValid(false);
    // }
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);

    // if (enteredName.trim() === "") {
    //   setEnteredNameIsValid(false);
    //   return;
    // }

    //Replace above to blow
    if (!enteredNameIsValid) {
      return;
    }

    // setEnteredNameIsValid(true);
    // console.log(enteredName);

    //method 2 continue
    // const enterValue = nameInputRef.current.value;
    // console.log(enterValue);

    //nameInputRef.current.value='';=> NOT IDEAL,dont manipulate the dom
    setEnteredName("");
    setEnteredNameTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control ";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          // two way bind
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
