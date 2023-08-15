import React, { useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { cartContext } from "../context/cartContext";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const ItemDetail = ({ id, name, img, price, category, description }) => {
  const { addToCart } = useContext(cartContext);
  const [isAddedToCart, setIsAddedToCart] = useState("");

  const onAdd = (quantity) => {
    addToCart({ id, name, price }, quantity);
    setIsAddedToCart(true);
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top item-image" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">${price}</p>
        <p className="card-text">{description}</p>
        <p className="card-text">{category}</p>
        <div className="Itemcount-container">
          {isAddedToCart === "" ? (
            <ItemCount
              className="itemcount"
              initial={1}
              stock={10}
              onAdd={onAdd}
            />
          ) : (
            <Link to="/CartContainer" className="btn btn-dark">
              Ir al carrito
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
