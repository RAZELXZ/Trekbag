import React from "react";
import Button from "./Button";

const ButtonGroup = () => {
  const secondaryText = [
    "Mark all as complete",
    "Mark all as incomplete",
    "Reset to initial",
    "Remove all items",
  ];
  return (
    <section className="button-group">
      {secondaryText.map((text) => {
        return <Button type="secondary" text={text} />;
      })}
    </section>
  );
};

export default ButtonGroup;
