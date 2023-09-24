import React from 'react'

export default function DashBoard() {
  return (
    <>
      <div>
        <aside
          id="sidebar-multi-level-sidebar"
          className=""
          aria-label="Sidebar"
        >
          <div className="bg-slate-200 w-screen h-[80px] z-10 drop-shadlow-lg">
            <div className="px-2 flex justify-between items-center w-full h-full">
            <ul className="hidden md:flex p-10 font-bold">
              <li>
             
                  {/* <box-icon name='bar-chart-square' type='solid' rotate='90' color='#0053A5' ></box-icon> */}
                  <a href="/weather">
                   <span className="p-5 text-2xl">Clima en Mexico</span>
                  </a>
              
              </li>
            </ul>
            </div>
          </div>
        </aside>
      </div>
      
    </>
  );
}
