import { useState } from "react";
import Swal from "sweetalert2";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const sumar = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const restar = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    onAdd(quantity);

    Swal.fire({
      icon: "success",
      title: "¡Agregado al carrito!",
      text: "¡Excelente eleccion!, tu hamburguesa se agrego al carrito.",
    });
  };

  return (
    <div className="item-count-controls">
      <h2> Cantidad: {quantity} </h2>
      <div className="buttons-container">
        <button
          className="btn btn-dark"
          onClick={handleAddToCart}
          disabled={!stock}
        >
          Agregar a carrito
        </button>
        <button className="btn btn-dark" onClick={sumar}>
          {" "}
          +{" "}
        </button>
        <button className="btn btn-dark" onClick={() => setQuantity(0)}>
          Reset
        </button>
        <button className="btn btn-dark" onClick={restar}>
          {" "}
          -{" "}
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
