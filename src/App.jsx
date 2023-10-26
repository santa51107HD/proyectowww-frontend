import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Cuenta from './pages/Cuenta/Cuenta.jsx'
import Inicio from './pages/Inicio/Inicio.jsx'
import Contactos from './pages/Contactos/Contactos.jsx'
import Registro from './pages/Registro/Registro.jsx'
import Login from "./pages/Login/Login.jsx";
import Eventos from "./pages/Eventos/Eventos.jsx";
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/cuenta" element={<Cuenta />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/contactos" element={<Contactos />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/" element={<Login />} />
          <Route path="/eventos" element={<Eventos />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
