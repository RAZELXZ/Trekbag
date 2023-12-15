import React from "react";
import Button from "./Button";

const AddItemForm = () => {
  return (
    <form>
      <h2>Add an item</h2>
      <input placeholder="Toothbrush..." />
      <Button text={"Add to list"} />
    </form>
  );
};

export default AddItemForm;
