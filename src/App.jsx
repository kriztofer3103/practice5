import "./App.css";
import { useState } from "react";
import FormularioMain from "./Components/FormularioMain";
import BusquedaMain from "./Components/BusquedaMain";
import TablaMain from "./Components/TablaMain";

function App() {
  const [personas, setPersonas] = useState([]);
  const [busqueda, setBusqueda] = useState([]);

  // Almacenando los valores del objeto persona desde el componente FormularioMain a través de onSubmit

  const agregarPersona = (persona) => {
    const personaActualizada = [persona, ...personas];
    setPersonas(personaActualizada);
    setBusqueda(personaActualizada);
  };

  const onchangeBusqueda = (e) => {
    let inputBusqueda = e.target.value;
    filtrarBusqueda(inputBusqueda);
  };

  // Filtrando los inputs de busqueda y almacenando valores filtrados en personas

  const filtrarBusqueda = (inputBusqueda) => {
    const busquedaFiltrada = busqueda.filter((persona) => {
      if (
        persona.nombre
          .toString()
          .toLowerCase()
          .includes(inputBusqueda.toLowerCase()) ||
        persona.apellido
          .toString()
          .toLowerCase()
          .includes(inputBusqueda.toLowerCase()) ||
        persona.telefono
          .toString()
          .toLowerCase()
          .includes(inputBusqueda.toLowerCase())
      ) {
        return personas;
      }
    });
    setPersonas(busquedaFiltrada);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Practica 5 con React en Vite</h1>
        <br />
        <div className="container-sm app-main">
          <FormularioMain onSubmit={agregarPersona} />
          <BusquedaMain onChange={onchangeBusqueda} />
          <TablaMain personas={personas} />
        </div>
      </header>
    </div>
  );
}

export default App;
