import "./App.css";
import { BiEdit } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";
import React, { useState } from "react";
//import { editableInputTypes } from "@testing-library/user-event/dist/utils";
//import { v4 as uuidv4 } from "uuid";

let usuarios = [];

function App() {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [fechadenac, setFechadenac] = useState("");
  const [botonEdit, setBotonEdit] = useState(false);
  const [editedUser, setEditedUser] = useState('')

  /* const manejandoForm = (e) => {
    const { name, value } = e.target;
    if (name === "nombre") setNombre(value);
    else if (name === "edad") setEdad(value);
    else if (name === "fechadenac") setFechadenac(value);
  }; */

  const enviando = (e) => {
    e.preventDefault();
    const nuevoUsuario = [nombre, parseInt(edad), fechadenac];
    usuarios = [...usuarios, nuevoUsuario];
    setNombre("");
    setEdad("");
    setFechadenac("");
    console.log(nuevoUsuario);
  };

  const handleClick = (e) => {
    setBotonEdit(!botonEdit);
  };

  return (
    <>
      <div className="app-usuarios">
        <h1>Registro usuarios</h1>
        <div className="contenedor-principal">
          <form className="contenedor-formulario" onSubmit={enviando}>
            <input
              className="input"
              placeholder="Introduce tu nombre"
              name="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            ></input>
            <input
              className="input"
              placeholder="Introduce tu edad"
              name="edad"
              value={edad}
              onChange={(e) => setEdad(e.target.value)}
            ></input>
            <input
              className="input"
              placeholder="Introduce tu fecha de nacimiento"
              name="fechadenac"
              value={fechadenac}
              onChange={(e) => setFechadenac(e.target.value)}
            ></input>
            <div className="contenedor-boton">
              <button className="boton-agregar-usuario">
                {botonEdit ? "Gardar cambio" : "Agregar"}
              </button>
            </div>
          </form>
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Edad</th>
                <th>Fecha de Nacimiento</th>
                <th>Editar / Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario, index) => (
                <tr key={index}>
                  <td>{usuario[0]}</td>
                  <td>{usuario[1]}</td>
                  <td>{usuario[2]}</td>
                  <td className="editar-eliminar">
                    <button
                      className="boton-eliminar-editar"
                      onClick={handleClick}
                    >
                      <BiEdit />
                    </button>
                    <button className="boton-eliminar-editar">
                      <BiTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
