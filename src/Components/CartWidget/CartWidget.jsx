import React from "react";
import { useContext } from "react";
import { cartContext } from "../context/cartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import * as iconList from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./CartWidget.css";

const CartWidget = () => {
  const context = useContext(cartContext);
  console.log(context);
  return (
    <Link to="/CartContainer" className="iconocarrito">
      {context.cart.length > 0 && (
        <>
          <span> {context.cart.length} </span>
          <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
        </>
      )}
    </Link>
  );
};

export default CartWidget;
