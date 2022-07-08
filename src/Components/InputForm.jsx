import React from "react";

function InputForm({ value, onChange, name, placeholder, type }) {
  return (
    <>
      <input
        type={type}
        className="form-control mb-3"
        placeholder={"Ingrese su " + placeholder}
        onChange={onChange}
        name={name}
        value={value}
      />
    </>
  );
}

export default InputForm;
