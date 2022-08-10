import './CSS/App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
<<<<<<< main
import ItemListConteiner from './Components/ContenedorProductos/ListaProductos/ItemListConteiner';
import ItemDetailsConteiner from './Components/ContenedorProductos/DetalleProducto/ItemDetailsConteiner';
=======
import ItemListConteiner from './Components/PerrosAdopcion/ListaPerros/ItemListConteiner';
import ItemDetailsConteiner from './Components/PerrosAdopcion/DetallePerros/ItemDetailsConteiner';
import CartContext from './Context/CartContext';

>>>>>>> local

function App() {
  return (
    <div className="App">
<<<<<<< main
      <NavBar />
      <Routes>
        <Route exact path='/' element={<ItemListConteiner />} />
        <Route exact path='/item/:id' element={<ItemDetailsConteiner />} />
        <Route path='/categoria/:categoria' element={<ItemListConteiner />} />
      </Routes>
=======
      <CartContext.Provider value={[]}>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<ItemListConteiner />} />
          <Route exact path='/prod/:id' element={<ItemDetailsConteiner />} />
          <Route path='/categoria/:categoria' element={<ItemListConteiner />} />
        </Routes>
      </CartContext.Provider>
>>>>>>> local
    </div>
  );
}

export default App;
