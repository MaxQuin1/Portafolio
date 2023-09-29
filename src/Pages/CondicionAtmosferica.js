import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavDash from "../components/NavDash";

function CondicionAtmosferica() {
  const url =
    "https://api.datos.gob.mx/v1/condiciones-atmosfericas?pageSize=10000";

  const estadosMx = [
    { id: 1, name: "Aguascalientes" },
    { id: 2, name: "Baja California" },
    { id: 3, name: "Chihuahua" },
    { id: 4, name: "Campeche" },
    { id: 5, name: "Coahuila" },
    { id: 6, name: "Colima" },
    { id: 7, name: "Chiapas" },
    { id: 8, name: "Durango" },
    { id: 9, name: "Baja California Sur" },
    { id: 10, name: "Ciudad de Mexico" },
    { id: 11, name: "Guanajuato" },
    { id: 12, name: "Guerrero" },
    { id: 13, name: "Hidalgo" },
    { id: 14, name: "Jalisco" },
    { id: 15, name: "Estado de Mexico" },
    { id: 16, name: "Michoacan" },
    { id: 17, name: "Nayarit" },
    { id: 18, name: "Nuevo Leon" },
    { id: 19, name: "Oaxaca" },
    { id: 20, name: "Puebla" },
    { id: 21, name: "Queretaro" },
    { id: 22, name: "Quintana Roo" },
    { id: 23, name: "San Luis Potosi" },
    { id: 24, name: "Sinaloa" },
    { id: 25, name: "Sonora" },
    { id: 26, name: "Tabasco" },
    { id: 27, name: "Tlaxcala" },
    { id: 28, name: "Veracruz" },
    { id: 29, name: "Yucatan" },
    { id: 30, name: "Zacatecas" },
  ];

  const [datos, setDatos] = useState([]);
  const [estadoActual, setEstadoActual] = useState();
  const [ciudadesFiltradas, setCiudadesFiltradas] = useState([]);

  const consultarDatos = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((condicionAtm) => setDatos(condicionAtm.results));
  };

  useEffect(() => {
    consultarDatos();
  }, []);

  useEffect(() => {
    const ciudadesUnicas = {};
    const ciudadesFiltradas = datos.filter((ciudad) => {
      if (ciudadesUnicas[ciudad.name]) {
        return false;
      }
      ciudadesUnicas[ciudad.name] = true;
      return ciudad.state === estadoActual;
    });
    setCiudadesFiltradas(ciudadesFiltradas);
  }, [estadoActual, datos]);

  let c = 1;

  return (
    <>
    <div className="bg-red-100 h-[100%] w-[100%]">
      <NavDash></NavDash>
        <div className=" text-center sticky left-[20%] pt-10 right-[20%] h-[50%] w-[80%] l-[50%]">
          <h1 className="font-bold text-center text-4xl ">
            {" "}
            Estado del tiempo
          </h1>
          <select
            className="form-select left-[10%] h-[20%] w-[20%]"
            onChange={(e) => setEstadoActual(e.target.value)}
          >
            <option value=""> Seleccion una opción</option>
            {estadosMx.map((opcion) => (
              <option key={opcion.id} value={opcion.name}>
                {opcion.name}
              </option>
            ))}
          </select>
          <h1 className="text-2xl">Estado seleccionado: {estadoActual}</h1>
          <div className=" lg:w-4/1 mx-5">
            <table className="table table-bordered" width="100%">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Ciudad</th>
                  <th>Tiempo</th>
                </tr>
              </thead>
              <tbody>
                {ciudadesFiltradas.map((ciudad, index) => (
                  <tr key={index}>
                    <td>{c++}</td>
                    <td>{ciudad.name}</td>
                    <td>{ciudad.skydescriptionlong}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    </div>
    </>
  );
}

export default CondicionAtmosferica;
