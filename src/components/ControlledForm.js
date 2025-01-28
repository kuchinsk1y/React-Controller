import React, { useState } from "react";
import "./ControlledForm.css";

function ControlledForm() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`You submitted: ${inputValue}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter something:
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledForm;
