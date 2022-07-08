import React from "react";

function InputTabla({ id, nombre, apellido, telefono }) {
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{nombre}</td>
        <td>{apellido}</td>
        <td>{telefono}</td>
      </tr>
    </>
  );
}

export default InputTabla;
