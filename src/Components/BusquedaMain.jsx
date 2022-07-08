import React from "react";
<script src="https://unpkg.com/boxicons@2.1.2/dist/boxicons.js"></script>;

function BusquedaMain({ onChange }) {
  return (
    <div className="input-group mt-5 mb-3">
      <div className="input-group flex-nowrap">
        <span className="input-group-text bx bx-search" id="addon-wrapping">
          <box-icon name="search"></box-icon>
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Ingrese su busqueda"
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default BusquedaMain;
