import React from "react";
import EmptyView from "./EmptyView";

const ItemLits = ({ iltst, handleDeleteItem, handleToggleItem }) => {
  return (
    <ul className="item-list">
      {iltst.length === 0 ? <EmptyView /> : null}
      {iltst.map((item) => {
        return (
          <Item
            item={item}
            key={item.id}
            handleDeleteItem={handleDeleteItem}
            handleToggleItem={handleToggleItem}
          />
        );
      })}
    </ul>
  );
};

export default ItemLits;

const Item = ({ item, handleDeleteItem, handleToggleItem }) => {
  return (
    <li className="item">
      <label>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => handleToggleItem(item.id)}
        />
        {item.name}
      </label>
      <button onClick={() => handleDeleteItem(item.id)}>⚓</button>
    </li>
  );
};
