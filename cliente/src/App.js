import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './NavBar';
import Tarea from "./Tarea";
import CrearTarea from "./CrearTarea";
import ActualizarTarea from "./ActualizarTarea";
import Calendario from "./Calendario";
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Tarea />}/>
          <Route path="/crear" element={<CrearTarea />}/>
          <Route path="/actualizar/:id" element={<ActualizarTarea />}/>
          <Route path="/calendario" element={<Calendario />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;