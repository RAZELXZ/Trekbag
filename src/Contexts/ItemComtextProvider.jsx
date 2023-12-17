import React, { createContext, useEffect, useState } from "react";

export const Itemscontext = createContext();

const ItemComtextProvider = ({ children }) => {
  const localstorageitems = JSON.parse(localStorage.getItem("iltst"));
  const [iltst, setIlist] = useState(localstorageitems || itemList);

  const handleAddItem = (text) => {
    const newItem = {
      id: new Date().getTime(),
      name: text,
      packed: false,
    };
    setIlist((prev) => [...prev, newItem]);
  };
  const handleDeleteAllItems = () => {
    setIlist([]);
  };
  const handleReset = () => {
    setIlist(itemList);
  };
  const handleMarkAllComplete = () => {
    const newList = iltst.map((item) => {
      return { ...item, packed: true };
    });
    setIlist(newList);
  };
  const handleMarkAllIncomplete = () => {
    const newList = iltst.map((item) => {
      return { ...item, packed: false };
    });
    setIlist(newList);
  };

  const handleDeleteItem = (id) => {
    const newList = iltst.filter((item) => item.id !== id);
    setIlist(newList);
  };

  const handleToggleItem = (id) => {
    const newList = iltst.map((item) => {
      if (item.id === id) {
        return { ...item, packed: !item.packed };
      }
      return item;
    });
    setIlist(newList);
  };

  useEffect(() => {
    localStorage.setItem("iltst", JSON.stringify(iltst));
  }, [iltst]);

  return (
    <Itemscontext.Provider
      value={{
        iltst,
        handleAddItem,
        handleDeleteAllItems,
        handleDeleteItem,
        handleMarkAllComplete,
        handleMarkAllIncomplete,
        handleReset,
        handleToggleItem,
      }}
    >
      {children}
    </Itemscontext.Provider>
  );
};

export default ItemComtextProvider;
