import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import * as iconList from "@fortawesome/free-solid-svg-icons";

const CartWidget = () => {
  return (
    <>
      <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
      <span>5</span>
    </>
  );
};

export default CartWidget;
