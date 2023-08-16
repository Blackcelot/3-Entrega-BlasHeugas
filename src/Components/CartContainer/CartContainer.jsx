import React from "react";
import { useContext } from "react";
import { cartContext } from "../context/cartContext";
import { createOrder } from "../Services/firebase";
import Swal from "sweetalert2";

function CartContainer() {
  const { cart, removeItem } = useContext(cartContext);

  async function handleCheckout() {
    const orderData = {
      items: cart,
      buyer: {
        name: "Blas",
        email: "blaasmdp@mail.com",
        phone: "123456789",
      },
      date: new Date(),
      total: 9000,
    };
    try {
      const idOrder = await createOrder(orderData);

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Gracias por tu compra. Tu número de orden es ${idOrder}`,
        showConfirmButton: false,
        timer: 3000,
      });
    } catch (error) {
      console.error("Error al crear la orden:", error);
    }
  }

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
      <h1>CartContainer</h1>
      {cart.map((item) => (
        <div key={item.id} style={{ textAlign: "center" }}>
          <h3>{item.title}</h3>
          <p>Precio unitario: ${item.price}</p>
          <p>Cantidad a comprar: {item.count}</p>
          <p>Precio total ${item.count * item.price}</p>
          <button onClick={() => removeItem(item.id)} className="btn btn-dark">
            Eliminar
          </button>
          <button onClick={handleCheckout} className="btn btn-dark">
            Comprar
          </button>
        </div>
      ))}
    </div>
  );
}

export default CartContainer;
