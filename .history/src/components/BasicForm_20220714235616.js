import useInput from "../hooks/use-inputs";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const BasicForm = (props) => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);

  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(isNotEmpty);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  let formIsValid = false;
  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const firstNameClasses = firstNameHasError
    ? "form-control valid"
    : "form-control";
  const lastNameClasses = lastNameHasError
    ? "form-control valid"
    : "form-control";
  const emailClasses = emailHasError ? "form-control valid" : "form-control";
  return (
    <form>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label
            htmlFor="name"
            value={firstNameValue}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          >
            First Name
          </label>
          <input type="text" id="name" />
          {firstNameHasError && <p>Please enter a first name.</p>}
        </div>
        <div className={lastNameClasses}>
          <label
            htmlFor="name"
            value={lastNameValue}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          >
            Last Name
          </label>
          <input type="text" id="name" />
          {lastNameHasError && <p>Please enter a last name.</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label
          htmlFor="name"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        >
          E-Mail Address
        </label>
        <input type="text" id="name" />
        {emailHasError && <p>Please enter an Email.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
