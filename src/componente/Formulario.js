import React from "react";
import "../estilos-componentes/Formulario.css";

const Formulario = ({
  enviando,
  nombre,
  edad,
  fechadenac,
  setNombre,
  setEdad,
  setFechadenac,
  editingUserId,
}) => {
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
      <div className="contenedor-boton">
        <button className="boton-agregar-usuario">
          {editingUserId !== null ? "Actualizar" : "Agregar"}
        </button>
      </div>
    </form>
  );
};

export default Formulario;
