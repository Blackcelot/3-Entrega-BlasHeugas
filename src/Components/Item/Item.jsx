import { Link } from "react-router-dom";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import "./Item.css";

function Item(props) {
  const { id, title, img, price, description } = props;

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
      <Link to={`/item/${id}`}>
        <ButtonComponent colorFondo=" #cac531">Ver Burger</ButtonComponent>
      </Link>
    </div>
  );
}

export default Item;
