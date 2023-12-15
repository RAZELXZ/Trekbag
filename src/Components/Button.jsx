import React from "react";

const Button = ({ type, text, onDeleteAllItems }) => {
  return (
    <button
      onClick={onDeleteAllItems}
      className={`btn ${type === "secondary" ? "btn--secondary" : ""}`}
    >
      {" "}
      {text}{" "}
    </button>
  );
};

export default Button;
