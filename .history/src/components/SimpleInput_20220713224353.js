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
    if (enteredName.trim() === "") {
      return;
    }
    console.log(enteredName);
    //method 2 continue
    const enterValue = nameInputRef.current.value;
    console.log(enterValue);

    //nameInputRef.current.value='';=> NOT IDEAL,dont manipulate the dom
    //setEnteredName('');
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
          // two way bind
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
