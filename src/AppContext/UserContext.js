import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = (props) => {

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
    setEditingUserId(null);
  };

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
    <UserContext.Provider
      value={{
        nombre,
        edad,
        fechadenac,
        editingUserId,
        usuarios,
        setNombre,
        setEdad,
        setFechadenac,
        setEditingUserId,
        enviando,
        editarUsuario,
        eliminarUsuario,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
