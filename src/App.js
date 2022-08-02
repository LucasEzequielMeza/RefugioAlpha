import './CSS/App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import ItemListConteiner from './Components/ContenedorProductos/ListaProductos/ItemListConteiner';
import ItemDetailsConteiner from './Components/ContenedorProductos/DetalleProducto/ItemDetailsConteiner';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path='/' element={<ItemListConteiner />} />
        <Route exact path='/item/:id' element={<ItemDetailsConteiner />} />
      </Routes>
    </div>
  );
}

export default App;
