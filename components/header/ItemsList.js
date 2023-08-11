import Item from "./Item";
import React from "react";

const ItemsList = ({ items }) => {
  
  return (
    <div className="overflow-y-auto scrollbar-thin">
      {items?.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemsList;
