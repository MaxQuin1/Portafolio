import React from "react";
import { useState } from "react";
import { useEffect } from "react";

// import FacebookLogin from 'react-facebook-login'

// export default function Login(){
//     return(
//         <>
//             <h1>Iniciar sesion</h1>
//             <FacebookLogin
//             appId='120711571132624'
//             autoLoad={false}
//             fields='name, email'
//             />
//         </>
//     );
// };

export default function Login() {
  const [datos, setDatos] = useState({
    usuario: "",
    contrasena: "",
    autentificado: false,
  });

  const iniciarSesion = (e) => {
    e.preventDefault();
    console.log("Iniciando sesion........");
    // alamcenamos el usuario ingresando en el localstorage
    localStorage.setItem("user", datos.usuario);
    localStorage.setItem("logueado", true);
    setDatos({ ...datos, autentificado: true });
  };

  const cerrarSesion = () => {
    localStorage.clear();
    setDatos({...datos,autentificado:false});
  }

  return datos.autentificado ? (
    <>
      <button onClickCapture={cerrarSesion}>Salir</button>
    </>
  ) : (
    <>
      <form onSubmit={iniciarSesion}>
        <input
          type="text "
          placeholder="usuario"
          onChange={(e) => {
            setDatos({ ...datos, usuario: e.target.value });
          }}
        />
        {datos.usuario}
        <input
          type="password"
          placeholder="contraseña"
          onChange={(e) => {
            setDatos({ ...datos, contrasena: e.target.value });
          }}
        />
        {datos.contrasena}
        <button type="submit">iniciar sesion</button>
      </form>
    </>
  );
}
