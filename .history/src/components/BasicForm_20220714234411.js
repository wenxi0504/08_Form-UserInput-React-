import useInput from "../hooks/use-inputs"


const isNotEmpty = value => value.trim() !== '';
const isEmail = value => value.includes('@';)


const BasicForm = (props) => {
  const { value: firstNameValue,
    isValid: firstNameIsValid,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName } = useInput(isNotEmpty);
  
  const { value: lastNameValue,
    isValid: lastNameIsValid,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName } = useInput(isNotEmpty);
  
  const { value: emailValue,
    isValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail } = useInput(isEmail);
  
  return (
    <form>
      <div className='control-group'>
        <div className='form-control'>
          <label htmlFor='name' value={firstNameValue} onChange={firstNameChangeHandler} onBlur={ firstNameBlurHandler}>First Name</label>
          <input type='text' id='name' />
        </div>
        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' />
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' />
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;