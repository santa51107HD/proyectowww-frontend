import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Cuenta from './pages/Cuenta/Cuenta.jsx'
import Inicio from './pages/Inicio/Inicio.jsx'
import Contactos from './pages/Contactos/Contactos.jsx'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/cuenta" element={<Cuenta />} />
          <Route path="/" element={<Inicio />} />
          <Route path="/contactos" element={<Contactos />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
