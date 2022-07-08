import React from "react";
import InputTabla from "./InputTabla";

function TablaMain({ personas }) {
  return (
    <table className="table table-dark table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Telefono</th>
        </tr>
      </thead>
      {/* Valores de los inputs */}
      <tbody>
        {personas.map((personas) => {
          return (
            <InputTabla
              key={personas.id}
              id={personas.id}
              nombre={personas.nombre}
              apellido={personas.apellido}
              telefono={personas.telefono}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default TablaMain;
