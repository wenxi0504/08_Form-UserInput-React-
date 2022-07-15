import { useState } from "react";

const useInput = () => {
  const [enteredvalue, setEnteredvalue] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
};

export default useInput;
