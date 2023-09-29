import React from "react";
import imagen1 from "../img/img1.jpg";
import NavDash from "./NavDash";
import { Image } from "react-bootstrap";

export default function DashBoard() {
  return (
    <>
      <div
        className=""
        style={{
          backgroundImage: `url(${imagen1})`,
        }}
      >
        <NavDash></NavDash>
        <aside
          id="sidebar-multi-level-sidebar"
          className=""
          aria-label="Sidebar"
        ></aside>
        <div className="flex h-screen items-center justify-center ">
          <div className="text-center w-[40%]">
            <h1 className="text-5xl p-3 font-bold">Bienvenido de vuelta</h1>
            <table className="flex-row flex gap-4 ">
              <div
                className="bg-white flex-row flex flex-col items-center rounded-3xl border border-indigo-900 p-2 h-50"
                src="/"
              >
                <a href="/CondicionAtmosferica">
                  <div className="h-40 w-40">
                    <a href="/CondicionAtmosferica">
                      <Image src="https://i.gifer.com/CtmQ.gif"></Image>
                    </a>
                  </div>
                  <h1 className="items-center text-3xl p-5 text-black">
                    {"Clima"}
                  </h1>
                </a>
              </div>
              <div
                className="bg-white flex-row flex flex-col items-center rounded-3xl border border-indigo-900 p-2 h-50"
                src="/"
              >
                <a href="/CondicionAtmosferica">
                  <div className="h-40 w-40">
                    <Image src="data:image/png;base64,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"></Image>
                  </div>
                  <h1 className="items-center text-3xl p-5 text-black">
                    {"Clima"}
                  </h1>
                </a>
              </div>
              <div
                className="bg-white flex-row flex flex-col items-center rounded-3xl border border-indigo-900 p-2 h-50"
                src="/"
              >
                <a href="/CondicionAtmosferica">
                  <div className="h-40 w-40">
                    <Image src="data:image/jpeg;base64,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"></Image>
                  </div>
                  <h1 className="items-center text-3xl p-5 text-black">
                    {"Clima"}
                  </h1>
                </a>
              </div>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
