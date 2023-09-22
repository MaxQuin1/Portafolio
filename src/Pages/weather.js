import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


function CondicionAtmosferica() {
  const url = ''/*https://api.datos.gob.mx/v1/condiciones-atmosfericas*/;
  const estadosMx = [
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
      <select className="form-select"  onChange={(e) => setEstadoActual(e.target.value)}>
        <option value=""> Seleccion una opción</option>
        {estadosMx.map((opcion) => (
          <option key={opcion.id} value={opcion.name}>
            {opcion.name}
          </option>
        ))}
      </select>
      {estadoActual}
      <h1> Estado del tiempo</h1>
      
      <table className="table table-bordered" width="100%">
          <thead>
            <tr >
              <th >Ciudad</th>
              <th >Tiempo</th>
            </tr>
          </thead>
      <tbody>

      
      {datos.map((ciudad, index) => ( 
          
            <tr >
            <td>{ciudad.name}</td>
            <td>{ciudad.skydescriptionlong}</td>
          
          </tr>
        
      ))}
      </tbody>
      </table>
    </>
  );
}

export default CondicionAtmosferica;
