import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Cuenta from './pages/Cuenta/Cuenta.jsx'
import Inicio from './pages/Inicio/Inicio.jsx'
import Contactos from './pages/Contactos/Contactos.jsx'
import Registro from './pages/Registro/Registro.jsx'
import Registro_Avatar from "./pages/Registro/Registro_Avatar.jsx";
import Login from "./pages/Login/Login.jsx";
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/cuenta" element={<Cuenta />} />
          <Route path="/" element={<Inicio />} />
          <Route path="/contactos" element={<Contactos />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/registro_avatar" element={<Registro_Avatar />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
