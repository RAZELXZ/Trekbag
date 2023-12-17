import { useContext } from "react";
import { Itemscontext } from "../Contexts/ItemComtextProvider";

export function useItemContext() {
  const context = useContext(Itemscontext);

  if (!context) {
    throw new Error(
      "useItemContext must be used within an ItemsContextProvider"
    );
  }

  return context;
}
