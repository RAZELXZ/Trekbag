import React from "react";
import Button from "./Button";
import { secondaryText } from "../lib/constants";

const ButtonGroup = ({ handleDeleteAllItems }) => {
  return (
    <section className="button-group">
      {/*here we return a [] because it's a map(), but react is good for that*/}
      {secondaryText.map((text) => {
        return (
          <Button
            key={text}
            type="secondary"
            text={text}
            onDeleteAllItems={handleDeleteAllItems}
          />
        );
      })}
    </section>
  );
};

export default ButtonGroup;
