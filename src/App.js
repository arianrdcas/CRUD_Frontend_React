import "./App.css";
import { BiEdit } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";
import React, { useState } from "react";

function App() {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [fechadenac, setFechadenac] = useState('');
  const [usuarios, setUsuarios] = useState([]);

  const enviando = (e) => {
    e.preventDefault();
    const nuevoUsuario = {
      nombre,
      edad,
      fechadenac,
      id: usuarios.length
    };
    setUsuarios([...usuarios, nuevoUsuario]);

    setNombre("");
    setEdad("");
    setFechadenac("");
  };
  
  function eliminarUsuario(id){
    const nuevosUsuario = usuarios.filter((usuario) => usuario.id !== id);
    setUsuarios(nuevosUsuario);
  }



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
                Agregar
                {/* {botonEdit ? "Gardar cambio" : "Agregar"} */}
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
              {usuarios.map((usuario, id) => (
                <tr key={id}>
                  <td>{usuario.nombre}</td>
                  <td>{usuario.edad}</td>
                  <td>{usuario.fechadenac}</td>
                  <td className="editar-eliminar">
                    <button className="boton-eliminar-editar">
                      <BiEdit />
                    </button>
                    <button
                      className="boton-eliminar-editar"
                      onClick={() => eliminarUsuario(usuario.id)}
                    >
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
