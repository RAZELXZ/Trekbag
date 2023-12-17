import React, { useContext } from "react";
import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";
import { useItemContext } from "../lib/hooks";
import { useItemsStore } from "../stores/itemsStore";

const Sidebar = () => {
  {
    /*const {
    handleAddItem,
    handleDeleteAllItems,
    handleReset,
    handleMarkAllComplete,
    handleMarkAllIncomplete,
  } = useItemContext();*/
  }
  const handleAddItem = useItemsStore((state) => state.addItem);
  const handleDeleteAllItems = useItemsStore((state) => state.deleteAllItems);
  const handleReset = useItemsStore((state) => state.resetToInitial);
  const handleMarkAllComplete = useItemsStore(
    (state) => state.markAllAsComplete
  );
  const handleMarkAllIncomplete = useItemsStore(
    (state) => state.markAllIncomplete
  );
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
