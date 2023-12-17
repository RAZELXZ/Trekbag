import React, { useContext } from "react";
import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";
import { useItemContext } from "../lib/hooks";

const Sidebar = () => {
  const {
    handleAddItem,
    handleDeleteAllItems,
    handleReset,
    handleMarkAllComplete,
    handleMarkAllIncomplete,
  } = useItemContext();
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
