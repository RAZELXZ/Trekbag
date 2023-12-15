import React from "react";
import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

const Sidebar = ({ setIlist }) => {
  return (
    <div className="sidebar">
      <AddItemForm setIlist={setIlist} />
      <ButtonGroup />
    </div>
  );
};

export default Sidebar;
