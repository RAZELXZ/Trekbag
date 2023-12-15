import React from "react";
import Button from "./Button";
import { secondaryText } from "../lib/constants";

const ButtonGroup = ({
  handleDeleteAllItems,
  handleReset,
  handleMarkAllComplete,
  handleMarkAllIncomplete,
}) => {
  const buttonprops = [
    {
      text: "Mark all as complete",
      func: handleMarkAllComplete,
    },
    {
      text: "Mark all as incomplete",
      func: handleMarkAllIncomplete,
    },
    {
      text: "Reset to initial",
      func: handleReset,
    },
    {
      text: "Remove all items",
      func: handleDeleteAllItems,
    },
  ];
  return (
    <section className="button-group">
      {/*here we return a [] because it's a map(), but react is good for that*/}
      {buttonprops.map(({ text, func }) => {
        return (
          <Button key={text} type="secondary" text={text} onClick={func} />
        );
      })}
    </section>
  );
};

export default ButtonGroup;
