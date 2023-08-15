import { useState, useEffect } from "react";
import {
  getProductById,
  getProducts,
  getProductsByCategory,
} from "../Services/AsynMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { DotPulse } from "@uiball/loaders";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([false]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const asynFunc = categoryId ? getProductsByCategory : getProducts;

    asynFunc(categoryId)
      .then((response) => {
        setProducts(response);
        setIsLoading(false);
      })

      .catch((error) => {
        console.error(error);
      });
  }, [categoryId]);

  if (isLoading) {
    return <DotPulse size={40} speed={1.3} color="black" />;
  }

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
