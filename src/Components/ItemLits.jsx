import React, { useMemo, useState } from "react";
import EmptyView from "./EmptyView";
import Select from "react-select";
import { useItemContext } from "../lib/hooks";
import { useItemsStore } from "../stores/itemsStore";

const sortingOptions = [
  {
    label: "Sort by default",
    value: "default",
  },
  {
    label: "Sort by packed",
    value: "packed",
  },
  {
    label: "Sort by unpacked",
    value: "unpacked",
  },
];

const ItemLits = () => {
  // const { iltst, handleDeleteItem, handleToggleItem } = useItemContext();
  const iltst = useItemsStore((state) => state.items);
  const handleDeleteItem = useItemsStore((state) => state.deleteItem);
  const handleToggleItem = useItemsStore((state) => state.toggleItem);
  const [sortby, setSortby] = useState("default");
  const sortedItems = useMemo(
    () =>
      [...iltst].sort((a, b) => {
        if (sortby === "packed") {
          return b.packed - a.packed;
        }
        if (sortby === "unpacked") {
          return a.packed - b.packed;
        }
        return;
      }),
    [sortby, iltst]
  );
  return (
    <ul className="item-list">
      {iltst.length === 0 && <EmptyView />}
      {iltst.length > 0 ? (
        <section className="sorting">
          <Select
            options={sortingOptions}
            defaultValue={sortingOptions[0]}
            onChange={(option) => setSortby(option.value)}
          />
        </section>
      ) : null}
      {sortedItems.map((item) => {
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
