import React, { useContext } from "react";
import "../estilos-componentes/ListaUsuario.css";
import { BiEdit } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";
import { UserContext } from "../AppContext/UserContext";

const ListaUsuario = () => {
 const {
   usuarios,
   editarUsuario,
   eliminarUsuario,
 } = useContext(UserContext);

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
          <tr key={usuario.id}>
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
