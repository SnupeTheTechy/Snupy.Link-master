import React from "react";
import "./Button.css";

function Button({ text }) {
  return (
    <div className="button-container">
      <button>{text}</button>
    </div>
  );
}

export default Button;
