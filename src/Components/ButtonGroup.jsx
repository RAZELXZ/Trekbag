import React from "react";
import Button from "./Button";

const secondaryText = [
  "Mark all as complete",
  "Mark all as incomplete",
  "Reset to initial",
  "Remove all items",
];

const ButtonGroup = () => {
  return (
    <section className="button-group">
      {/*here we return a [] because it's a map(), but react is good for that*/}
      {secondaryText.map((text) => {
        return <Button key={text} type="secondary" text={text} />;
      })}
    </section>
  );
};

export default ButtonGroup;
