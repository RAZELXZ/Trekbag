import React from "react";
import Logo from "./Logo";
import Counter from "./Counter";
import { useItemContext } from "../lib/hooks";
import { useItemsStore } from "../stores/itemsStore";

const Header = () => {
  // const { iltst } = useItemContext();
  const iltst = useItemsStore((state) => state.items);
  const bag = iltst.length;
  const in_bag = iltst.filter((item) => item.packed).length;
  return (
    <header>
      <Logo />
      <Counter bag={bag} in_bag={in_bag} />
    </header>
  );
};

export default Header;
