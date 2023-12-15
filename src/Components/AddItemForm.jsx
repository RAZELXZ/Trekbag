import React, { useRef, useState } from "react";
import Button from "./Button";

const AddItemForm = ({ setIlist }) => {
  const inputRef = useRef();
  const [value, setValue] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      alert("Item can't be empty");
      inputRef.current.focus();
      return;
    }

    const newItem = {
      id: new Date().getTime(),
      name: value,
      packed: false,
    };
    setIlist((prev) => [...prev, newItem]);
    setValue("");
  };
  return (
    <form onSubmit={handelSubmit}>
      <h2>Add an item</h2>
      <input
        value={value}
        placeholder="Toothbrush..."
        onChange={(e) => {
          setValue(e.target.value);
        }}
        autoFocus
      />
      <Button text={"Add to list"} />
    </form>
  );
};

export default AddItemForm;
