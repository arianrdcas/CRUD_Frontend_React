import './App.css';
import { BiEdit } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";


let usuarios = [
  ["Arian Rodriguez", 35, "06/12/1988"],
  ["Yeni Delgado", 38, "27/01/1985"],
  ["Arian Rodriguez", 35, "06/12/1988"],
  ["Arian Rodriguez", 35, "06/12/1988"],
];

function App() {

const enviando = (e) => {
  e.preventDefault();
  console.log("Enviando");
};

  return (
    <>
      <div className="app-usuarios">
        <h1>Registro usuarios</h1>
        <div className="contenedor-principal">
          <form className="contenedor-formulario">
            <input className="input" placeholder="Introduce tu nombre"></input>
            <input className="input" placeholder="Introduce tu edad"></input>
            <input
              className="input"
              placeholder="Introduce tu fecha de nacimiento"
            ></input>
            <div className="contenedor-boton">
              <button className="boton-agregar-usuario" onClick={enviando}>
                Agregar
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
                    <button className="boton-eliminar-editar">
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
