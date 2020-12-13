import React, { useState } from "react";
import Link from "next/link";
import * as FaIcons from "react-icons/fa";
import { ListToggle, ListIphones, List12pro, List12 } from "./data";
import Carousel from "./Carousel";
import Main2 from "./Main2";
import Main3 from "./Main3";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  console.log(toggle);

  const openToggle = () => {
    setToggle(true);
  };

  const closeToggle = () => {
    setToggle(false);
  };

  return (
    <div className="">
      {/* NAV DESKTOP */}
      <div className="z-40 bg-black sticky top-0 hidden md:flex ">
        <section className="text-white md:w-11/12 lg:w-9/12 xl:w-4/6 2xl:w-3/5 mx-auto ">
          <header className=" py-3 flex items-center justify-between mx-4  ">
            <button>
              <FaIcons.FaApple className="w-6 h-6" />
            </button>
            <div className="flex items-center space-x-8 lg:space-x-10 xl:space-x-14">
              {ListToggle.map((tog) => (
                <Link key={tog.id} href="/">
                  <a className="text-gray-300 text-sm  ">
                    {" "}
                    {tog.name}{" "}
                  </a>
                </Link>
              ))}
            </div>
            <button>
              <FaIcons.FaSearch className="text-gray-400 w-5 h-5 " />
            </button>
          </header>
        </section>
      </div>

      {/* NAV MOVIL */}
      <div className="z-40 bg-black sticky top-0 md:hidden ">
        <section className="text-white">
          <header className="  py-3 flex items-center justify-between mx-4  ">
            <div>
              {toggle ? (
                <button
                  className="flex items-center focus:outline-none"
                  onClick={() => closeToggle()}
                >
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      //   stroke-linecap="round"
                      //   stroke-linejoin="round"
                      //   stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              ) : (
                <button
                  className="flex items-center focus:outline-none"
                  onClick={() => openToggle()}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      //   stroke-linecap="round"
                      //   stroke-linejoin="round"
                      //   stroke-width="2"
                      d="M4 8h16M4 16h16"
                    ></path>
                  </svg>
                </button>
              )}
            </div>

            <button>
              <FaIcons.FaApple className="w-6 h-6" />
            </button>

            <div></div>
          </header>
        </section>
      </div>

      {/* TOGGLE MOVIL */}
      <section
        className={`${
          toggle
            ? " translate-y-0 duration-1000 "
            : " -translate-y-full  duration-700 opacity-20 "
        }  h-screen   transform bg-black fixed  w-full `}
      >
        <div className="w-full">
          <div className="mx-3 relative">
            <FaIcons.FaSearch className="text-gray-600 absolute left-2 bottom-2.5  " />
            <input
              className="w-full bg-gray-900 border-transparent rounded-xl pl-8 text-white leading-tight"
              type="text"
              placeholder="Buscar en apple.com"
            />
          </div>
          <hr className="border border-gray-700 my-4" />
          <div className="flex flex-col mx-10">
            {ListToggle.map((tog) => (
              <Link key={tog.id} href="/">
                <a className="text-gray-300 text-lg py-2 border-b border-gray-700">
                  {" "}
                  {tog.name}{" "}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Carousel ListIphones={ListIphones} />

      <main>
        <section className="bg-black pt-36 ">
          <div className="w-10/12 mx-auto text-center ">
            <h3 className="text-gray-100 text-lg lg:text-2xl font-semibold">
              iPhone 12 Pro
            </h3>
            <h4 className="text-white  text-5xl font-bold font-poppins my-5">
              Un salto al siguiente nivel.
            </h4>
            <div className="w-3/4 md:w-3/5  lg:w-2/4 mx-auto xl:w-5/12  2xl:w-4/12 ">
              <p className="text-gray-200 font-poppins font-semibold xl:text-lg ">
                Chip A14 Bionic, un nuevo diseño, Ceramic Shield, escáner LiDAR
                y un sistema de cámaras Pro optimizado para tomar fotos con poca
                luz, que alcanza su máxima expresión en el iPhone 12 Pro Max.
              </p>
            </div>
            <h2 className="text-gray-500 font-semibold my-3">
              Consulta la disponibilidad más adelante
            </h2>
            <Link href="/">
              <a className="text-lightBlue-500 font-normal">
                {" "}
                Más información >
              </a>
            </Link>
          </div>
          <div className="py-4 w-full">
            <img
              className="mx-auto md:hidden"
              src="/web5/movil.png"
              alt="movil"
            />
            <img
              className="mx-auto hidden md:flex "
              src="/web5/iphone.png"
              alt="movil"
            />
          </div>
        </section>
        <Main2/>
        <Main3 List12pro={List12pro} List12={List12} />
      </main>
    </div>
  );
}
