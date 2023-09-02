import { cartContext } from "../context/cartContext";
import { createOrder } from "../Services/firebase";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Checkout() {
  const { cart, getTotalPriceInCart } = useContext(cartContext);
  const [buyer, setBuyer] = useState({
    firstname: "",
    lastname: "",
    age: "",
  });

  const navigate = useNavigate();

  function onInputChange(evt) {
    const value = evt.target.value;
    const field = evt.target.name;
    const newState = { ...buyer };
    newState[field] = value;
    setBuyer(newState);
  }

  async function handleCheckout(evt) {
    evt.preventDefault();
    const orderData = {
      items: cart,
      buyer: buyer,
      date: new Date(),
      total: getTotalPriceInCart(),
    };

    try {
      const idOrder = await createOrder(orderData);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Gracias por tu compra, tu número de orden es ${idOrder}`,
        showConfirmButton: false,
        timer: 2500,
      });
      navigate(`/order-confirmation/${idOrder}`);
    } catch (error) {
      alert(`No se pudo realizar la compra ${error.message}`);
    }
  }
  function resetForm(e) {
    e.preventDefault();
    setBuyer({
      firstname: "",
      lastname: "",
      age: "",
    });
  }

  return (
    <form>
      <h2>Completa tus datos para completar la compra🛍</h2>

      <div style={{ display: "flex", marginBottom: 8 }}>
        <label htmlFor="lastname" style={{ width: "100px", marginRight: 4 }}>
          Nombre
        </label>
        <input
          value={buyer.firstname}
          name="firstname"
          type="text"
          onChange={onInputChange}
        />
      </div>

      <div style={{ display: "flex", marginBottom: 8 }}>
        <label htmlFor="lastname" style={{ width: "100px", marginRight: 4 }}>
          Apellido
        </label>
        <input
          value={buyer.lastname}
          name="lastname"
          type="text"
          onChange={onInputChange}
        />
      </div>

      <div style={{ display: "flex", marginBottom: 8 }}>
        <label style={{ width: "100px", marginRight: 4 }}>Edad</label>
        <input
          value={buyer.age}
          name="age"
          type="number"
          onChange={onInputChange}
        />
      </div>

      <button
        className="btn btn-dark"
        disabled={
          !(buyer.firstname !== "" && buyer.lastname !== "" && buyer.age !== "")
        }
        onClick={handleCheckout}
      >
        Confirmar Compra
      </button>
      <button className="btn btn-dark" onClick={resetForm}>
        Cancelar
      </button>
    </form>
  );
}

export default Checkout;
