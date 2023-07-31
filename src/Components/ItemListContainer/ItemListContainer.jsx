import { useState, useEffect } from "react";
import getData, { getCategoryData } from "../Services/AsynMock";
import Item from "../Item/Item";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  async function requestProducts() {
    let respuesta = categoryId
      ? await getCategoryData(categoryId)
      : await getData();
    setProducts(respuesta);
  }

  useEffect(() => {
    requestProducts();
  }, []);

  return (
    <div>
      <h1 className="h1 Hamburguesa">¡Hamburguesas!</h1>
      <div className="flex-container">
        {products.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
