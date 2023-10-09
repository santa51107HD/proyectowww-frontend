import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Cuenta from './pages/Cuenta/Cuenta.jsx'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/cuenta" element={<Cuenta />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
