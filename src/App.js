import './CSS/App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import ItemListConteiner from './Components/ContenedorProductos/ListaProductos/ItemListConteiner';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path='/' element={<ItemListConteiner />} />
      </Routes>
    </div>
  );
}

export default App;
