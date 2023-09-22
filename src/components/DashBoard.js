import React from 'react'

export default function DashBoard() {
  return (
    <>
      <div className="fixed container">
        <aside
          id="sidebar-multi-level-sidebar"
          className=""
          aria-label="Sidebar"
        >
          <div className="">
            <ul className="">
              <li>
                <a
                  href="/weather"
                  className=""
                >
                  <box-icon name='bar-chart-square' type='solid' rotate='90' color='#0053A5' ></box-icon>
                  <span className="">weather</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}
