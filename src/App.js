import './CSS/App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import ProovedorCarrito from './Components/Context/CartContext';
import ItemListConteiner from './Components/Contenedores/ItemListConteiner';
import ItemDetailsConteiner from './Components/Contenedores/ItemDetailsConteiner';
import Cart from './Components/Contenedores/Cart';
import ItemContainerProductos from './Components/Contenedores/ItemContainerProductos';
import Contacto from './Components/Componentes/Contacto';
import Nosotros from './Components/Componentes/Nosotros';
import ForularioCompra from './Components/Componentes/FormularioCompra';
import FormularioAdopcion from './Components/Componentes/FormularioAdopcion';




function App() {
  return (
    <div className="App">
      <ProovedorCarrito>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<ItemListConteiner />} />
          <Route exact path='/categoria/:categoria' element={<ItemListConteiner />} />
          <Route exact path='/productos' element={<ItemContainerProductos />} />
          <Route exact path='/productos' element={<ItemContainerProductos />} />
          <Route exact path='/item/:id' element={<ItemDetailsConteiner />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/contacto' element={<Contacto />} />
          <Route exact path='/nosotros' element={<Nosotros />} />
          <Route exact path='/formulario-compra' element={<ForularioCompra />} />
          <Route exact path='item/:id/formulario-adopcion' element={<FormularioAdopcion />} />
        </Routes>
      </ProovedorCarrito>

    </div>
  );
}

export default App;
