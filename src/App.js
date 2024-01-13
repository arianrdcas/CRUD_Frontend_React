import "./App.css";
import React, { useState } from "react";
import Formulario from "./componente/Formulario";
import ListaUsuario from "./componente/ListaUsuario";

function App() {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [fechadenac, setFechadenac] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);

  const enviando = (e) => {
    e.preventDefault();
    if (editingUserId !== null) {
      const updatedUsers = usuarios.map((user) =>
        user.id === editingUserId ? { ...user, nombre, edad, fechadenac } : user
      );
      setUsuarios(updatedUsers);
      setEditingUserId(null);
    } else {
      const nuevoUsuario = {
        nombre,
        edad,
        fechadenac,
        id: usuarios.length,
      };
      setUsuarios([...usuarios, nuevoUsuario]);
    }
    setNombre("");
    setEdad("");
    setFechadenac("");
    setEditingUserId(null)
  };

 
  return (
    <>
      <div className="app-usuarios">
        <h1>Registro usuarios</h1>
        <div className="contenedor-principal">
          <Formulario
            enviando={enviando}
            nombre={nombre}
            edad={edad}
            fechadenac={fechadenac}
            editingUserId={editingUserId}
            setNombre={setNombre}
            setEdad={setEdad}
            setFechadenac={setFechadenac}
          />
          <ListaUsuario
            setNombre={setNombre}
            setEdad={setEdad}
            setFechadenac={setFechadenac}
            setEditingUserId={setEditingUserId}
            usuarios={usuarios}
            setUsuarios={setUsuarios}
          />
        </div>
      </div>
    </>
  );
}

export default App;
