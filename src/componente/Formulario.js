import React, { useContext } from "react";
import "../estilos-componentes/Formulario.css";
import { UserContext } from "../AppContext/UserContext.js";

const Formulario = () => {
  const {
    enviando,
    nombre,
    edad,
    fechadenac,
    setNombre,
    setEdad,
    setFechadenac,
    editingUserId,
  } = useContext(UserContext);

  return (
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

      <button className="boton-agregar-usuario">
        {editingUserId !== null ? "Actualizar" : "Agregar"}
      </button>
    </form>
  );
};

export default Formulario;
