import React from 'react'
import imagen1 from '../img/img1.jpg'
import NavDash from './NavDash';



export default function DashBoard() {
  return (
    <>
      <div   className=""
      style={{
        backgroundImage: `url(${imagen1})`,
      }}>
        <NavDash></NavDash>
        <aside
          id="sidebar-multi-level-sidebar"
          className=""
          aria-label="Sidebar"
        >
          <div className="bg-slate-200 w-screen h-[80px] z-10 drop-shadlow-lg">
            <div className="px-2 flex justify-between items-center w-full h-full">
            <ul className="hidden md:flex">
            <h1 className="p-5 text-2xl">Clima en Mexico</h1> {/*No hacer caso a esto*/ }
            <h1 className="p-5 text-2xl">Informacion</h1>
            <h1 className="p-5 text-2xl">Sobre nosotros</h1>
            <h1 className="p-5 text-2xl">Privacidad y seguridad</h1>
            <h1 className="p-5 text-2xl">Informacion de contacto</h1>
              </ul>
                  {/* <box-icon name='bar-chart-square' type='solid' rotate='90' color='#0053A5' ></box-icon> */}
                  <div className="hidden md:flex pr-4">
                    <a href="">
                  <p className="bg-yellow-200 rounded-lg p-2">Ver mi perfil</p>
                  </a>
                  </div>
            </div>
          </div>
        </aside>
        <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl p-3 font-bold">Bienvenido de vuelta</h1>
        <p className="text-2xl bg-amber-200 text-white p-2 rounded-lg">
          <a href='/CondicionAtmosferica'>
            Haz click para ver el clima en mexico
            </a>
        </p>
        <h1 className="text-2xl  p-2">Si tienes algun problema no dudes en contactarnos</h1>
      </div>
    </div>
      
      </div>
      
    </>
  );
}
