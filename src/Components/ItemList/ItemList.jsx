import React from "react";
import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        {products.map((prod) => (
          <div key={prod.id} className="col-md-4">
            <Item {...prod} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
