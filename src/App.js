import "./App.css";
import NavBar from "./Components/Navbar/NavBar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Inicio from "./Components/Paginas/Inicio";
import Conocenos from "./Components/Paginas/Conocenos";
import Locales from "./Components/Paginas/Locales";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import { createContext } from "react";
import { CartContextProvider } from "./Components/context/cartContext";
import CartContainer from "./Components/CartContainer/CartContainer";
import Checkout from "./Components/Checkout/Checkout";
import OrderConfirm from "./Components/OrderConfirm/OrderConfirm";

function App() {
  return (
    <>
      <CartContextProvider value={{ cart: [] }}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="Hamburguesas" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="Conocenos" element={<Conocenos />} />
            <Route path="Locales" element={<Locales />} />
            <Route path="/CartContainer" element={<CartContainer />}></Route>
            <Route path="Checkout" element={<Checkout />} />
            <Route path="/order-confirmation/:id" element={<OrderConfirm />} />
            <Route path="*" element={<h1>Page not found: 404</h1>} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;
