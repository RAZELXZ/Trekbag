import React from "react";
import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

const Sidebar = ({ handleAddItem, handleDeleteAllItems }) => {
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroup handleDeleteAllItems={handleDeleteAllItems} />
    </div>
  );
};

export default Sidebar;
