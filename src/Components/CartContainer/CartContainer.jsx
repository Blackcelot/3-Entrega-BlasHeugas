import React from "react";
import { useContext } from "react";
import { cartContext } from "../context/cartContext";
import { Link } from "react-router-dom";

function CartContainer() {
  const { cart, removeItem } = useContext(cartContext);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <h1>Carrito</h1>
      {cart.map((item) => (
        <div key={item.id} style={{ textAlign: "center" }}>
          <h3>{item.title}</h3>
          <p>Precio unitario: ${item.price}</p>
          <p>Cantidad a comprar: {item.count}</p>
          <p>Precio total ${item.count * item.price}</p>
          <button onClick={() => removeItem(item.id)} className="btn btn-dark">
            Eliminar
          </button>
          <Link to="/Checkout" className="btn btn-dark">
            Comprar
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CartContainer;
