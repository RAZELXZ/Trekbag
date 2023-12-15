import React from "react";
import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

const Sidebar = ({
  handleAddItem,
  handleDeleteAllItems,
  handleReset,
  handleMarkAllComplete,
  handleMarkAllIncomplete,
}) => {
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroup
        handleDeleteAllItems={handleDeleteAllItems}
        handleReset={handleReset}
        handleMarkAllComplete={handleMarkAllComplete}
        handleMarkAllIncomplete={handleMarkAllIncomplete}
      />
    </div>
  );
};

export default Sidebar;
