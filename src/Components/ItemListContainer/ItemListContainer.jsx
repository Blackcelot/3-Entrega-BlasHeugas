import { useState, useEffect } from "react";
import {
  getProductById,
  getProducts,
  getProductsByCategory,
} from "../Services/AsynMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([false]);
  const { categoryId } = useParams();

  useEffect(() => {
    const asynFunc = categoryId ? getProductsByCategory : getProducts;

    asynFunc(categoryId)
      .then((response) => {
        setProducts(response);
      })

      .catch((error) => {
        console.error(error);
      });
  }, [categoryId]);

  return (
    <div>
      <h1>{greeting}</h1>
      <div>
        <ItemList products={products} />
      </div>
    </div>
  );
};
export default ItemListContainer;
