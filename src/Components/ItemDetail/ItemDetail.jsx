import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ id, name, img, price, category, description }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title"> {name} </h5>
        <p className="card-text"> ${price} </p>
        <p className="card-text"> {description} </p>
        <p className="card-text"> {category} </p>

        <div className="Itemcount-container">
          <ItemCount
            className="itemcount"
            initial={1}
            stock={10}
            onAdd={(quantity) => console.log("cantidad agregada", quantity)}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
