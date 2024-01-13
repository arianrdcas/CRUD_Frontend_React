import "./App.css";
import React from "react";
import Formulario from "./componente/Formulario";
import ListaUsuario from "./componente/ListaUsuario";

function App() {
  return (
    <>
      <div className="app-usuarios">
        <h1>Registro usuarios</h1>
        <div className="contenedor-principal">
          <Formulario />
          <ListaUsuario />
        </div>
      </div>
    </>
  );
}

export default App;
