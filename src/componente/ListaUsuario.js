import React from "react";
import "../estilos-componentes/ListaUsuario.css";
import { BiEdit } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";

const ListaUsuario = ({
  usuarios,
  setUsuarios,
  setNombre,
  setEdad,
  setFechadenac,
  setEditingUserId,
}) => {
  const editarUsuario = (id) => {
    const toEditUsuario = usuarios.find((user) => user.id === id);
    if (toEditUsuario) {
      setNombre(toEditUsuario.nombre);
      setEdad(toEditUsuario.edad);
      setFechadenac(toEditUsuario.fechadenac);
      setEditingUserId(id);
    }
  };

  function eliminarUsuario(id) {
    const nuevosUsuario = usuarios.filter((usuario) => usuario.id !== id);
    setUsuarios(nuevosUsuario);
    setNombre("");
    setEdad("");
    setFechadenac("");
    setEditingUserId(null);
  }

  return (
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
              <button
                className="boton-eliminar-editar"
                onClick={() => editarUsuario(usuario.id)}
              >
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
  );
};

export default ListaUsuario;
