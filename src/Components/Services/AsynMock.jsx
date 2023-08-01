const productos = [
  {
    title: "Hamburguesa Clásica",
    id: 1,
    limit: 5,
    description:
      "Una hamburguesa al estilo tradicional con carne jugosa, queso derretido, lechuga fresca, rodajas de tomate, cebolla y una sabrosa salsa especial. Servida en un pan suave y esponjoso.",
    img: "https://i.pinimg.com/564x/c4/e6/11/c4e611dad9d151787d4a319410757ec9.jpg",
    price: 8,
    category: "Clásicos de la Casa",
  },
  {
    title: " BBQ Ranchera",
    id: 2,
    stock: 10,
    description:
      "Una deliciosa hamburguesa con carne a la parrilla, cubierta con queso cheddar ahumado, cebolla caramelizada, tocino crujiente y una generosa cantidad de salsa barbacoa y aderezo ranchero. ¡Una combinación irresistible!",
    img: "https://i.pinimg.com/564x/be/e6/07/bee6071bd4fe86a76c9b759b0475c7b8.jpg",
    price: 10,
    category: "Especiales BBQ",
  },
  {
    title: "Picante Mexicana",
    id: 3,
    stock: 5,
    description:
      "Una hamburguesa con un toque mexicano, con carne sazonada, jalapeños en rodajas, guacamole cremoso, pico de gallo fresco y queso pepper jack derretido. ¡El sabor picante y los sabores audaces te harán pedir más!",
    img: "https://i.pinimg.com/564x/5f/6f/ac/5f6fac45235c87e8f440132c391b358c.jpg",
    price: 10,
    category: "Especiales Picantes",
  },
  {
    title: "Mediterránea de Pollo",
    id: 4,
    stock: 2,
    description:
      "Una hamburguesa saludable y llena de sabor con pechuga de pollo a la parrilla, espinacas tiernas, aceitunas kalamata, tomates secados al sol y una refrescante salsa de yogur griego. Ideal para los amantes de la cocina mediterránea.",
    img: "https://i.pinimg.com/564x/cf/e5/54/cfe554079b93ca2da42ab6d7a991188d.jpg",
    price: 10,
    category: "Especiales de Pollo",
  },
  {
    title: "BBQ de Costillas",
    id: 5,
    limit: 5,
    description:
      "Una hamburguesa épica con carne de costillas de cerdo desmenuzadas en una mezcla de salsa barbacoa ahumada y especias. Completada con aros de cebolla crujientes y un toque final de encurtidos de pepinillos.",
    img: "https://i.pinimg.com/564x/f6/2c/71/f62c71b2f6d5fa2d508bbda967e3f752.jpg",
    price: 12,
    category: "Especiales de Costillas",
  },
  {
    title: "Vegana de Portobello",
    id: 6,
    stock: 8,
    description:
      "Una opción vegana sabrosa y nutritiva que presenta un gran portobello a la parrilla como base. Acompañado de espinacas frescas, tomates asados, cebolla roja y una mezcla de mayonesa vegana y mostaza.",
    img: "https://i.pinimg.com/564x/b7/8b/f6/b78bf625d0d074b8770b31c9e9bf791b.jpg",
    price: 12,
    category: "Opciones Veganas",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((product) => product.id === productId));
    }, 1000);
  });
};

export const getProductsByCategory = (productCategory) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        products.filter((product) => product.category === productCategory)
      );
    }, 1000);
  });
};
