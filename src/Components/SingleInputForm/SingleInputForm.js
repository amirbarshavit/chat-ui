import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./SingleInputForm.css";

const SingleInputForm = ({ onSubmit, buttonText }) => {
  const [inputValue, setInputValue] = useState("");
  const onClick = () => {
    onSubmit(inputValue);
    setInputValue("");
  };
  const onChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="container">
      <TextField
        id="filled-basic"
        onChange={onChange}
        value={inputValue}
        variant="filled"
        fullWidth={true}
      />
      <Button
        variant="outlined"
        color="primary"
        onClick={onClick}
        disabled={!inputValue}
      >
        {buttonText || "Send"}
      </Button>
    </div>
  );
};
export default SingleInputForm;
