import React from "react";

const Counter = ({ bag, in_bag }) => {
  return (
    <p>
      {" "}
      <b>{in_bag}</b> / {bag} Items packed
    </p>
  );
};

export default Counter;
