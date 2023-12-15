import React from "react";

const ItemLits = ({ iltst }) => {
  return (
    <ul>
      {iltst.map((item) => {
        return <Item item={item} key={item.id} />;
      })}
    </ul>
  );
};

export default ItemLits;

const Item = ({ item }) => {
  return (
    <li className="item">
      <label>
        <input type="checkbox" checked={item.packed} />
        {item.name}
      </label>
      <button>⚓</button>
    </li>
  );
};
