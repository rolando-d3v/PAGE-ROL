import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";

export default function Footer({
  descubrir,
  servicios,
  valores,
  acerca,
  cuenta,
  empresa,
}) {
  const [drop1, setDrop1] = useState(false);
  const [drop2, setDrop2] = useState(false);
  const [drop3, setDrop3] = useState(false);
  const [drop4, setDrop4] = useState(false);
  const [drop5, setDrop5] = useState(false);
  const [drop6, setDrop6] = useState(false);

  const openDrop1 = () => {
    setDrop1(!drop1);
  };
  const openDrop2 = () => {
    setDrop2(!drop2);
  };
  const openDrop3 = () => {
    setDrop3(!drop3);
  };
  const openDrop4 = () => {
    setDrop4(!drop4);
  };
  const openDrop5 = () => {
    setDrop5(!drop5);
  };
  const openDrop6 = () => {
    setDrop6(!drop6);
  };

  return (
    <div className="bg-gray-100 font-poppins pt-5 ">
      <div className="lg:w-10/12 xl:w-9/12  2xl:w-3/5 lg:mx-auto">
        <div className="flex items-center mx-6 py-3 border-t">
          <button>
            <FaIcons.FaApple className="w-4 h-4 text-gray-600" />
          </button>
          <MdIcons.MdChevronRight className="text-gray-300 h-7 w-7 " />
          <span className="text-xs">iPhone</span>
        </div>

        {/* FOOTER LINKS MOVIL */}
        <section className="mx-6 relative md:hidden ">
          {/* DESCUBRIR */}
          <button
            className="flex items-center justify-between w-full border-t py-2 focus:outline-none   "
            onClick={() => openDrop1()}
          >
            <span className="text-xs font-medium">Descibrir</span>
            <FaIcons.FaPlus className="w-2 h-2 text-gray-600 mr-1" />
          </button>
          <div className={`${drop1 ? "block" : "hidden "}   bg-gray-100 `}>
            <div className="flex flex-col  px-3 my-2.5">
              {descubrir.map((ev) => (
                <a
                  key={ev.id}
                  className="text-xs w-full font-medium text-gray-500 py-1.5"
                >
                  {ev.name}
                </a>
              ))}
            </div>
          </div>
          {/* SERVICIOS */}
          <button
            className="flex items-center justify-between w-full border-t py-2 focus:outline-none "
            onClick={() => openDrop2()}
          >
            <span className="text-xs font-medium">Servicios</span>
            <FaIcons.FaPlus className="w-2 h-2 text-gray-600 mr-1" />
          </button>

          <div className={`${drop2 ? "block" : "hidden"}`}>
            <div className="flex flex-col  px-3 my-2.5">
              {servicios.map((ev) => (
                <a
                  key={ev.id}
                  className="text-xs w-full font-medium text-gray-500 py-1.5"
                >
                  {ev.name}
                </a>
              ))}
            </div>
          </div>
          {/* CUENTA */}
          <button
            className="flex items-center justify-between w-full border-t py-2 focus:outline-none "
            onClick={() => openDrop3()}
          >
            <span className="text-xs font-medium">Cuenta</span>
            <FaIcons.FaPlus className="w-2 h-2 text-gray-600 mr-1" />
          </button>

          <div className={`${drop3 ? "block " : "hidden"}`}>
            <div className="flex flex-col  px-3 my-2.5">
              {cuenta.map((ev) => (
                <a
                  key={ev.id}
                  className="text-xs w-full font-medium text-gray-500 py-1.5"
                >
                  {ev.name}
                </a>
              ))}
            </div>
          </div>
          {/* PARA LA EMPRESA */}
          <button
            className="flex items-center justify-between w-full border-t py-2 focus:outline-none "
            onClick={() => openDrop4()}
          >
            <span className="text-xs font-medium  ">Para la empresa</span>
            <FaIcons.FaPlus className="w-2 h-2 text-gray-600 mr-1" />
          </button>

          <div className={`${drop4 ? "block " : "hidden"}`}>
            <div className="flex flex-col  px-3 my-2.5">
              {empresa.map((ev) => (
                <a
                  key={ev.id}
                  className="text-xs w-full font-medium text-gray-500 py-1.5"
                >
                  {ev.name}
                </a>
              ))}
            </div>
          </div>
          {/* VALORES APPLE */}
          <button
            className="flex items-center justify-between w-full border-t py-2 focus:outline-none "
            onClick={() => openDrop5()}
          >
            <span className="text-xs font-medium">Valores de Apple</span>
            <FaIcons.FaPlus className="w-2 h-2 text-gray-600 mr-1" />
          </button>

          <div className={`${drop5 ? "block " : "hidden"}`}>
            <div className="flex flex-col  px-3 my-2.5">
              {valores.map((ev) => (
                <a
                  key={ev.id}
                  className="text-xs w-full font-medium text-gray-500 py-1.5"
                >
                  {ev.name}
                </a>
              ))}
            </div>
          </div>
          {/* ACERCA DE APPLE */}
          <button
            className="flex items-center justify-between w-full border-t border-b py-2 focus:outline-none "
            onClick={() => openDrop6()}
          >
            <span className="text-xs font-medium">Acerca de Apple</span>
            <FaIcons.FaPlus className="w-2 h-2 text-gray-600 mr-1" />
          </button>

          <div className={`${drop6 ? "block " : "hidden"}`}>
            <div className="flex flex-col  px-3 my-2.5">
              {acerca.map((ev) => (
                <a
                  key={ev.id}
                  className="text-xs w-full font-medium text-gray-500 py-1.5"
                >
                  {ev.name}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER LINKS TABLET Y DESKTOP */}
        <section className="hidden md:flex mx-4 ">
          <section className="flex w-full justify-between ">
            <div>
              <div className="flex flex-col  px-3 my-2.5">
                <h3 className="font-bold text-xs text-gray-700 ">Descubrir</h3>
                {descubrir.map((ev) => (
                  <a
                    key={ev.id}
                    className="text-xs w-full font-medium text-gray-500 py-1.5"
                  >
                    {ev.name}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="flex flex-col  px-3 my-2.5">
                <h3 className="font-bold text-xs text-gray-700 ">Servicios</h3>
                {servicios.map((ev) => (
                  <a
                    key={ev.id}
                    className="text-xs w-full font-medium text-gray-500 py-1.5"
                  >
                    {ev.name}
                  </a>
                ))}
              </div>
              <div className="flex flex-col  px-3 mt-5">
                <h3 className="font-bold text-xs text-gray-700 ">Cuenta</h3>
                {cuenta.map((ev) => (
                  <a
                    key={ev.id}
                    className="text-xs w-full font-medium text-gray-500 py-1.5"
                  >
                    {ev.name}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="flex flex-col  px-3 my-2.5">
                <h3 className="font-bold text-xs text-gray-700 ">
                  Para la empresa
                </h3>
                {empresa.map((ev) => (
                  <a
                    key={ev.id}
                    className="text-xs w-full font-medium text-gray-500 py-1.5"
                  >
                    {ev.name}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="flex flex-col  px-3 my-2.5">
                <h3 className="font-bold text-xs text-gray-700 ">
                  Valores de apple
                </h3>
                {valores.map((ev) => (
                  <a
                    key={ev.id}
                    className="text-xs w-full font-medium text-gray-500 py-1.5"
                  >
                    {ev.name}
                  </a>
                ))}
              </div>
              <div className="flex flex-col  px-3 mt-5">
                <h3 className="font-bold text-xs text-gray-700 ">
                  Acerca de apple
                </h3>
                {acerca.map((ev) => (
                  <a
                    key={ev.id}
                    className="text-xs w-full font-medium text-gray-500 py-1.5"
                  >
                    {ev.name}
                  </a>
                ))}
              </div>
            </div>
          </section>
        </section>

        {/* FOOTER BOTTON */}
        <section className="space-y-3 pt-4  pb-7 ">
          <div className="mx-6">
            <h3 className="text-lightBlue-500 text-xs font-medium">
              Busca un distribuidor{" "}
              <span className="text-xs text-gray-500 font-medium">
                cerca de ti.
              </span>{" "}
            </h3>
          </div>
          <hr className="mx-6 hidden md:flex " />
          <div className="mx-6 md:hidden">
            <h3 className="text-gray-500 text-xs font-medium">
              América Latina y el Caribe{" "}
              <span className="mx-2 text-xs text-gray-400"> | </span>
              <span className="text-xs text-gray-500 font-medium">
                English
              </span>{" "}
            </h3>
          </div>
          <section className="flex w-full justify-between">
            <div className="mx-6  lg:mx-4  ">
              <h3 className="text-gray-400 text-xs font-medium">
                Copyright © 2020 Apple Inc. Todos los derechos reservados
              </h3>
              <div className="lg:hidden">
                <h3 className="text-gray-500 text-xs font-medium">
                  Política de privacidad{" "}
                  <span className="mx-1 text-xs text-gray-400"> | </span>
                  <span className="text-xs text-gray-500 font-medium">
                    Aviso legal
                  </span>{" "}
                  <span className="mx-1 text-xs text-gray-400"> | </span>
                  <span className="text-xs text-gray-500 font-medium">
                    Mapa del sitio
                  </span>
                </h3>
              </div>
            </div>
            <div className='hidden lg:flex'  >
              <h3 className="text-gray-500 text-xs font-medium">
                Política de privacidad{" "}
                <span className="mx-1 text-xs text-gray-400"> | </span>
                <span className="text-xs text-gray-500 font-medium">
                  Aviso legal
                </span>{" "}
                <span className="mx-1 text-xs text-gray-400"> | </span>
                <span className="text-xs text-gray-500 font-medium">
                  Mapa del sitio
                </span>
              </h3>
            </div>
            <div className="mx-6 lg:mx-0 hidden md:flex  ">
              <h3 className="text-gray-500 text-xs font-medium">
                América Latina y el Caribe{" "}
                <span className="mx-1 text-xs text-gray-400"> | </span>
                <span className="text-xs text-gray-500 font-medium">
                  English
                </span>{" "}
              </h3>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}
