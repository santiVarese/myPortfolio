import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Paginaprincipal from "./Componentes/Paginaprincipal/paginaPrincipal";
import Contacto from "./Componentes/Contacto/Contacto";
import Proyectos from "./Componentes/Proyectos/Proyectos";
import About from "./Componentes/About/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Paginaprincipal />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Proyectos" element={<Proyectos />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
