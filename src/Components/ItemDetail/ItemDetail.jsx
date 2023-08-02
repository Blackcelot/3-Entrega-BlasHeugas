import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ id, name, img, price, category }) => {
  return (
    <div className="card" style="width: 18rem;">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">
          Go somewhere
        </a>
        <footer>
          <ItemCount
            initial={1}
            stock={10}
            onAdd={(quantity) => console.log("cantidad agregada", quantity)}
          />
        </footer>
      </div>
    </div>
  );
};

export default ItemDetail;
