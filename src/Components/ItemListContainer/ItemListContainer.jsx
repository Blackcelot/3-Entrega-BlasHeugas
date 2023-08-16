import React, { useState, useEffect } from "react";
import { getData, getCategoryData } from "../Services/firebase";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { DotPulse } from "@uiball/loaders";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const response = await getData();
        setProducts(response);

        if (categoryId) {
          const categoryResponse = await getCategoryData(categoryId);
          setCategoryProducts(categoryResponse);
        }

        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [categoryId]);

  if (isLoading) {
    return <DotPulse size={40} speed={1.3} color="black" />;
  }

  return (
    <div>
      <h1>{greeting}</h1>
      <div>
        {categoryId ? (
          <ItemList products={categoryProducts} />
        ) : (
          <ItemList products={products} />
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;
