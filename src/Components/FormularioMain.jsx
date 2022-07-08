import { React, useState } from "react";
import InputForm from "./InputForm";
import BotonForm from "./BotonForm";
import AlertaError from "./AlertaError";

function FormularioMain(props) {
  const [persona, setPersona] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
  });

  const [error, setError] = useState(false);

  // Almacenando el valor de cambio del input

  const changeInput = (e) => {
    setPersona({
      ...persona,
      [e.target.name]: e.target.value,
    });
  };

  // Validando que los campos no esten vacios, para luego enviarlos y limpiar los campos

  const validacionInputs = (nuevaPersona) => {
    if (
      persona.nombre.trim() === "" ||
      persona.apellido.trim() === "" ||
      persona.telefono.trim() === ""
    ) {
      setError(true);
    } else {
      setError(false);
      props.onSubmit(nuevaPersona);
      limpiarFormulario();
    }
  };

  const limpiarFormulario = () => {
    setPersona({
      nombre: "",
      apellido: "",
      telefono: "",
    });
  };

  //Enviando datos a través del onSubmit despues de validarlos

  const submitForm = (e) => {
    e.preventDefault();
    const nuevaPersona = {
      id: parseInt(Math.random() * 100),
      nombre: persona.nombre,
      apellido: persona.apellido,
      telefono: persona.telefono,
    };
    validacionInputs(nuevaPersona);
  };

  return (
    <form className="container-formulario" onSubmit={submitForm}>
      <InputForm
        value={persona.nombre}
        name="nombre"
        onChange={changeInput}
        placeholder="nombre"
        type="text"
      />
      <InputForm
        value={persona.apellido}
        name="apellido"
        onChange={changeInput}
        placeholder="apellido"
        type="text"
      />
      <InputForm
        value={persona.telefono}
        name="telefono"
        onChange={changeInput}
        placeholder="telefono"
        type="number"
      />
      <BotonForm />

      {/* Se muestra el mensaje de error si es true */}

      {error ? <AlertaError /> : null}
    </form>
  );
}

export default FormularioMain;
