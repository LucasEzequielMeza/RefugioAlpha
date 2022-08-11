import './CSS/App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';

import ProovedorCarrito from './Components/Context/CartContext';
import ItemListConteiner from './Components/Contenedores/ItemListConteiner';
import ItemDetailsConteiner from './Components/Contenedores/ItemDetailsConteiner';




function App() {
  return (
    <div className="App">
      <ProovedorCarrito>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<ItemListConteiner />} />
          <Route exact path='/item/:id' element={<ItemDetailsConteiner />} />
          <Route path='/categoria/:categoria' element={<ItemListConteiner />} />
          <Route exact path='/cart' element={<h1>Carrito</h1>} />
        </Routes>
      </ProovedorCarrito>

    </div>
  );
}

export default App;
