import React, { useState } from "react";

const UserTable = ({ users, onEditClick }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Edad</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{user.nombre}</td>
            <td>{user.edad}</td>
            <td>
              <button onClick={() => onEditClick(user)}>Editar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const UserForm = ({ editedUser, onInputChange, onSaveClick }) => {
  return (
    <form>
      <label>
        Nombre:
        <input
          type="text"
          name="nombre"
          value={editedUser.nombre}
          onChange={onInputChange}
        />
      </label>
      <label>
        Edad:
        <input
          type="number"
          name="edad"
          value={editedUser.edad}
          onChange={onInputChange}
        />
      </label>
      <button onClick={onSaveClick}>Guardar</button>
    </form>
  );
};

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, nombre: "Juan", edad: 25 },
    { id: 2, nombre: "Ana", edad: 30 },
    // ... más usuarios
  ]);

  const [editedUser, setEditedUser] = useState({
    id: null,
    nombre: "",
    edad: "",
  });

  const handleEditClick = (user) => {
    setEditedUser({ id: user.id, nombre: user.nombre, edad: user.edad });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({
      ...editedUser,
      [name]: value,
    });
  };

  const handleSaveClick = () => {
    // Aquí debes implementar la lógica para guardar los cambios del usuario editado.
    // En este ejemplo, simplemente actualizamos la lista de usuarios en el estado.
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === editedUser.id ? { ...user, ...editedUser } : user
      )
    );

    // Limpiamos el estado editedUser después de guardar los cambios
    setEditedUser({ id: null, nombre: "", edad: "" });
  };

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <UserTable users={users} onEditClick={handleEditClick} />
      <h2>Editar Usuario</h2>
      <UserForm
        editedUser={editedUser}
        onInputChange={handleInputChange}
        onSaveClick={handleSaveClick}
      />
    </div>
  );
};

export default App;
