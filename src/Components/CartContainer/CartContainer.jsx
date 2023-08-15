import React from "react";
import { useContext } from "react";
import { cartContext } from "../context/cartContext";

function CartContainer() {
  const { cart } = useContext(cartContext);

  return (
    <div>
      <h1>CartContainer</h1>
      {cart.map((item) => (
        <div>
          <h2>{item.title}</h2>
          <p>Precio unitario: ${item.price}</p>
          <p>Cantidad a comprar: {item.count}</p>
          <p>Precio total {item.count * item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default CartContainer;
