import "./App.css";
import NavBar from "./Components/Navbar/NavBar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Inicio from "./Components/Paginas/Inicio";
import Conocenos from "./Components/Paginas/Conocenos";
import Locales from "./Components/Paginas/Locales";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="Conocenos" element={<Conocenos />} />
          <Route path="Locales" element={<Locales />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="Hamburguesas" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="*" element={<h1>Page not found: 404</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
