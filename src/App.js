import './CSS/App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import CartContext from './Components/Context/CartContext';
import ItemListConteiner from './Components/PerrosAdopcion/ListaPerros/ItemListConteiner';
import ItemDetailsConteiner from './Components/PerrosAdopcion/DetallePerros/ItemDetailsConteiner';




function App() {
  return (
    <div className="App">
      <CartContext.Provider value={[]}>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<ItemListConteiner />} />
          <Route exact path='/item/:id' element={<ItemDetailsConteiner />} />
          <Route path='/categoria/:categoria' element={<ItemListConteiner />} />
          <Route exact path='/cart' element={<h1>Carrito</h1>} />
        </Routes>
      </CartContext.Provider>

    </div>
  );
}

export default App;
