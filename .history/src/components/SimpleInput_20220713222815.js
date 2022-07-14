import { useRef, useState } from "react";

const SimpleInput = (props) => {
  //method 2 use ref
  const nameInputRef = useRef();

  // method 1 use State,only needs the value once
  const [enteredName, setEnteredName] = useState("");
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    console.log(enteredName);
    //method 2 continue
    const enterValue = nameInputRef.current.value;
    console.log(enterValue);
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
