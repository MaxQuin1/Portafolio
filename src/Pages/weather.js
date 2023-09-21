import React, { useState, useEffect } from "react";

function CondicionAtmosferica() {
  const url = "https://api.datos.gob.mx/v1/condiciones-atmosfericas";
  const estadosMx = [
    { id: 1, name: "Aguascalientes" },
    { id: 1, name: "Aguascalientes" },
    { id: 1, name: "Aguascalientes" },
    { id: 1, name: "Aguascalientes" },
    { id: 1, name: "Aguascalientes" },
    { id: 1, name: "Aguascalientes" },
    { id: 1, name: "Aguascalientes" },
    { id: 1, name: "Aguascalientes" },
    { id: 1, name: "Aguascalientes" },
    { id: 1, name: "Aguascalientes" },
    { id: 1, name: "Aguascalientes" },
    { id: 1, name: "Aguascalientes" },
    { id: 1, name: "Aguascalientes" },
    { id: 1, name: "Aguascalientes" },
    { id: 1, name: "Aguascalientes" },
    { id: 1, name: "Aguascalientes" },
    { id: 1, name: "Aguascalientes" },
    { id: 1, name: "Aguascalientes" },
    { id: 1, name: "Aguascalientes" },
    { id: 1, name: "Aguascalientes" },
    { id: 1, name: "Aguascalientes" },
    { id: 1, name: "Aguascalientes" },
    { id: 1, name: "Aguascalientes" },
    { id: 1, name: "Aguascalientes" },
    { id: 1, name: "Aguascalientes" },
    { id: 1, name: "Aguascalientes" },
    { id: 1, name: "Aguascalientes" },
    { id: 1, name: "Aguascalientes" },
    { id: 1, name: "Aguascalientes" },
    { id: 1, name: "Aguascalientes" },
    { id: 1, name: "Aguascalientes" },
    { id: 1, name: "Aguascalientes" },
  ];

  const [datos, setDatos] = useState([]);
  const [estadoActual, setEstadoActual] = useState("Quintana Roo");

  const consultarDatos = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((condicionAtm) => setDatos(condicionAtm.results));
  };

  useEffect(() => {
    consultarDatos();
  }, []);

  return (
    <>
      <select onChange={(e) => setEstadoActual(e.target.value)}>
        <option value=""> Seleccion una opción</option>
        {estadosMx.map((opcion) => (
          <option key={opcion.id} value={opcion.name}>
            {opcion.name}
          </option>
        ))}
      </select>
      {estadoActual}
      <h1> Estado del tiempo</h1>
      {datos.map((ciudad, index) => {
        return (
          <div>
            <p>
              {ciudad.name} - <i>{ciudad.skydescriptionlong}</i>
            </p>
          </div>
        );
      })}
    </>
  );
}

export default CondicionAtmosferica;