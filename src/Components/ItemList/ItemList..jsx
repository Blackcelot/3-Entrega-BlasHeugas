import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <div>
      {products.map((prod) => (
        <Item Key={prod.id} {...prod} />
      ))}
    </div>
  );
};

export default ItemList;
