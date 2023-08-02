import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ id, title, img, price, description }) => {
  return (
    <div className="item-card">
      <div className="item-card_img">
        <img src={img} alt="imagen"></img>
      </div>
      <div className="item-card_header">
        <h2>{title}</h2>
      </div>
      <div className="item-card_detail">
        <h4>$ {price}</h4>
        <small>{description}</small>
      </div>
      <Link to={`/item/${id}`}>Ver Detalle</Link>
    </div>
  );
};

export default Item;
