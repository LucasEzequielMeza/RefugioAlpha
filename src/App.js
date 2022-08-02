import './CSS/App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
