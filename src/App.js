import './CSS/App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import ItemListConteiner from './Components/ContenedorProductos/ListaProductos/ItemListConteiner';
import ItemDetailsConteiner from './Components/ContenedorProductos/DetalleProducto/ItemDetailsConteiner';
import CartContext from './Context/CartContext';


function App() {
  return (
    <div className="App">
      <NavBar />
      <CartContext.Provider value={[]}>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<ItemListConteiner />} />
          <Route exact path='/prod/:id' element={<ItemDetailsConteiner />} />
          <Route path='/categoria/:categoria' element={<ItemListConteiner />} />
        </Routes>
      </CartContext.Provider>
    </div >
  );
}

export default App;
