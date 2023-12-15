import React from "react";

const Button = ({ type, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`btn ${type === "secondary" ? "btn--secondary" : ""}`}
    >
      {" "}
      {text}{" "}
    </button>
  );
};

export default Button;
