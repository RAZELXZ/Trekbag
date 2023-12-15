import React from "react";

const Button = ({ type, text }) => {
  return (
    <button className={`btn ${type === "secondary" ? "btn--secondary" : ""}`}>
      {" "}
      {text}{" "}
    </button>
  );
};

export default Button;
