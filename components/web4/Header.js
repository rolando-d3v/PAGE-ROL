import React, { useState } from "react";
import Link from "next/link";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import * as GoIcons from "react-icons/go";
import { products, categories } from "./data";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function Header() {
  const [sidebar, setSidebar] = useState(false);
  const [toggle, setToggle] = useState(false);

  const openSidebar = () => {
    setSidebar(true);
  };

  const closeSidebar = () => {
    setSidebar(false);
  };

  const openToggle = () => {
    if (toggle) {
      document.querySelector("body").classList.remove("removeScrollBody");
      setToggle(false);
    } else {
      document.querySelector("body").classList.add("removeScrollBody");
      setToggle(true);
    }
  };

  console.log(toggle);

  return (
    <div className="font-poppins ">
      {/* Sidebar Movil */}
      <Sidebar
        categories={categories}
        closeSidebar={closeSidebar}
        sidebar={sidebar}
      />

     {!toggle && ( <div className='bg-gray-500 py-1.5 md:py-3' >
        <h3 className='text-white text-xs text-center font-semibold' >
          Giving light can still be your thing. Order before 12/19 for holiday
          delivery. 
        </h3>
      </div>) }

      {/* HEADER DESKTOP */}
      <header className=" sticky top-0 z-30 hidden lg:flex items-center justify-between px-8 py-3 shadow-lg bg-white  ">
        <div className="flex items-center text-sm">
          <a className="font-bold py-2 hover:bg-gray-50  pr-3 " href="/web4">
            MEN{" "}
          </a>
          <a className="font-bold py-2 hover:bg-gray-50  pr-3 " href="/web4">
            WOMEN{" "}
          </a>
          <a className="font-bold py-2 hover:bg-gray-50  pr-3 " href="/web4">
            KISD{" "}
          </a>
          <a className="font-bold py-2 hover:bg-gray-50  pr-3 " href="/web4">
            STORES{" "}
          </a>
          <a className="font-bold py-2 hover:bg-gray-50  pr-3 " href="/web4">
            Account{" "}
          </a>
        </div>
        <img
          className="h-9"
          src="https://cdn.allbirds.com/image/upload/v1571355713/icons/allbirds-logo.svg"
          alt="rc"
        />
        <div className="space-x-6 flex items-center">
          <a
            className="font-bold py-2 hover:bg-gray-50  pr-3  text-sm "
            href="/web4"
          >
            STORES{" "}
          </a>
          <a
            className="font-bold py-2 hover:bg-gray-50  pr-3  text-sm"
            href="/web4"
          >
            Account{" "}
          </a>
          <button className="focus:outline-none">
            <FaIcons.FaRegUser className="w-6 h-6" />
          </button>
          <button className="focus:outline-none">
            <FaIcons.FaRegQuestionCircle className="w-6 h-6" />
          </button>
          <button className="focus:outline-none">
            <FiIcons.FiShoppingCart className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Header Movil */}
      <header className=" sticky top-0 z-10 flex items-center justify-between px-4 py-3.5 shadow-lg bg-white lg:hidden  ">
        {toggle ? (
          <button className="focus:outline-none" onClick={() => openToggle()}>
            <FaIcons.FaTimes className="w-6 h-6" />
          </button>
        ) : (
          <button className="focus:outline-none" onClick={() => openToggle()}>
            <FaIcons.FaBars className="w-6 h-6" />
          </button>
        )}
        <img
          className="h-8"
          src="https://cdn.allbirds.com/image/upload/v1571355713/icons/allbirds-logo.svg"
          alt="rc"
        />
        <button className="focus:outline-none">
          <FiIcons.FiShoppingCart className="w-6 h-6" />
        </button>
      </header>
      <nav
        className={`${
          toggle ? "flex " : "hidden"
        } bg-white w-full z-40 h-screen  fixed`}
      >
        <div className="flex flex-col  w-full text-sm">
          <a
            className="font-bold py-4 hover:bg-gray-50 border px-8 w-full"
            href="/web4"
          >
            MEN{" "}
          </a>
          <a
            className="font-bold py-4 hover:bg-gray-50 border px-8 w-full"
            href="/web4"
          >
            WOMEN{" "}
          </a>
          <a
            className="font-bold py-4 hover:bg-gray-50 border px-8 w-full"
            href="/web4"
          >
            KISD{" "}
          </a>
          <a
            className="font-bold py-4 hover:bg-gray-50 border px-8 w-full"
            href="/web4"
          >
            STORES{" "}
          </a>
          <a
            className="font-bold py-4 hover:bg-gray-50 border px-8 w-full"
            href="/web4"
          >
            Account{" "}
          </a>
        </div>
      </nav>

      <main>
        <section className="flex items-center justify-between px-8 py-2.5 lg:hidden ">
          <div>
            <div className="space-x-1">
              <a className="font-semibold text-xs text-gray-500 underline ">
                Home
              </a>
              <span>/</span>
            </div>
            <h3 className="font-bold text-lg">Women Shoes</h3>
          </div>
          <button
            className="focus:outline-none transform rotate-90"
            onClick={() => openSidebar()}
          >
            <GoIcons.GoSettings className="w-5 h-5" />
          </button>
        </section>

        <section className="bg-gray-100 py-3 overflow-x-auto scrollbars-hidden lg:hidden  ">
          <div className="px-6 inline-flex space-x-4 ">
            {categories.map((cat, index) => (
              <a key={index} className="whitespace-nowrap">
                {cat}
              </a>
            ))}
          </div>
        </section>

        <section className="flex  lg:mt-16 w-full xl:w-10/12 2xl:w-9/12  mx-auto">
          {/* SIDEBAR DESKTOP */}
          <section className="mx-4 hidden lg:flex">
            <aside className="w-full">
              <div className="px-2 w-64">
                <div>
                  <div className="space-x-1">
                    <a className="font-semibold text-xs  text-gray-500 underline ">
                      Home
                    </a>
                    <span>/</span>
                  </div>
                  <h3 className="font-bold text-lg lg:text-2xl">
                    Men's Running Shoes
                  </h3>
                </div>
                <nav className="flex flex-col mb-4 space-y-2 mt-2 ">
                  {categories.map((cat, index) => (
                    <Link href="#" key={index}>
                      <a className="text-sm ">
                        <span>{cat}</span>
                      </a>
                    </Link>
                  ))}
                </nav>
                <div className="py-4">
                  <h3 className="font-semibold">Filter By:</h3>
                </div>
                <hr />
                <div className="py-4">
                  <h3 className="font-semibold tracking-widest">MATERIAL</h3>
                </div>
                <nav className="flex flex-col mb-4 ">
                  {categories.map((cat, index) => (
                    <Link href="/web4" key={index}>
                      <a className="space-x-2">
                        <input
                          type="checkbox"
                          name=""
                          id=""
                          className="mr-1 bg-white shadow"
                        />
                        <span>{cat}</span>
                      </a>
                    </Link>
                  ))}
                </nav>
                <hr />
                <div className="my-2">
                  <h3 className="font-semibold">HUE</h3>
                  <div className="mt-1 space-y-1">
                    <a className="flex items-center space-x-3">
                      <span className="inline-block bg-white h-5 w-5 rounded-full border border-gray-600"></span>
                      <span>White</span>
                    </a>
                    <a className="flex items-center space-x-3">
                      <span className="inline-block bg-blueGray-600 h-5 w-5 rounded-full border border-gray-600"></span>
                      <span>Blue</span>
                    </a>
                    <a className="flex items-center space-x-3">
                      <span className="inline-block bg-red-400 h-5 w-5 rounded-full border border-gray-600"></span>
                      <span>Red</span>
                    </a>
                    <a className="flex items-center space-x-3">
                      <span className="inline-block bg-green-300 h-5 w-5 rounded-full border border-gray-600"></span>
                      <span>Green</span>
                    </a>
                    <a className="flex items-center space-x-3">
                      <span className="inline-block bg-gray-300 h-5 w-5 rounded-full border border-gray-600"></span>
                      <span>Gray</span>
                    </a>
                    <a className="flex items-center space-x-3">
                      <span className="inline-block bg-black h-5 w-5 rounded-full border border-gray-600"></span>
                      <span>Black</span>
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          </section>

          <section className="py-6 space-y-14 px-8 w-full">
            {products.map((pro, index) => (
              <div key={index}>
                <div className="w-full mb-4">
                  <h3 className="text-lg font-bold md:font-bold md:text-2xl">
                    {" "}
                    {pro.name}{" "}
                  </h3>
                  <p className="text-sm text-gray-800 leading-tight">
                    {pro.description}{" "}
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-x-6  ">
                  <section className="w-full  col-span-1">
                    <div className="shadow-xl ">
                      <div className="shadow-lg">
                        <a>
                          <div>
                            <img
                              className="w-full"
                              src={pro.styles[0].image}
                              alt="ls"
                            />
                          </div>
                          <div className="px-4 py-2">
                            <h3 className="font-semibold">{pro.name} </h3>
                            <p className="text-sm text-gray-700">
                              {pro.styles[0].name}{" "}
                            </p>
                            <p className="text-sm text-gray-700">
                              {pro.styles[0].price}{" "}
                            </p>
                          </div>
                        </a>
                        {/* COLORES  VER MOVIL */}
                        <div className="px-4 flex items-center space-x-4 pb-4 md:hidden">
                          {pro.styles.slice(0, 6).map((sty, index) => (
                            <button
                              key={index}
                              className=" flex flex-col h-6 w-6 rounded-full overflow-hidden focus:ring-2 focus:ring-black
                                         transform -rotate-45 focus:outline-none ring-2 ring-offset-2 ring-gray-400 "
                            >
                              <span className="sr-only">{sty.name} </span>
                              <span
                                className="inline-block h-3 w-6 "
                                style={{ backgroundColor: sty.colors[0] }}
                              ></span>
                              <span
                                className="inline-block h-3 w-6"
                                style={{ backgroundColor: sty.colors[1] }}
                              ></span>
                            </button>
                          ))}
                          <button className="rounded-full border h-8 w-8 mx-auto">
                            <FaIcons.FaAngleRight className="mx-auto" />
                          </button>
                        </div>
                        {/* COLORES VERSION MAS DE MD  768PX */}
                        <div className="px-4 items-center space-x-4 pb-4 hidden md:flex">
                          {pro.styles.slice(0, 6).map((sty, index) => (
                            <button
                              key={index}
                              className="h-full w-full focus:ring-2 focus:ring-black focus:outline-none ring-2 ring-offset-2 ring-gray-400 "
                            >
                              <img
                                className="w-full"
                                src={sty.image}
                                alt="red"
                              />
                            </button>
                          ))}
                          <button className=" border rounded-full w-16 flex items-center text-gray-600 focus:ring-2 focus:ring-black focus:outline-none p-1 ">
                            <FaIcons.FaAngleRight className=" h-8 w-8 mx-auto" />
                          </button>
                        </div>

                        <div className="border-t ">
                          <button className=" flex justify-between items-center w-full  px-5 py-2 focus:ring-2 focus:ring-fuchsia-400 focus:outline-none ">
                            <span className="font-semibold">Quick Add</span>
                            <FaIcons.FaPlus />
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section className="hidden md:block relative col-span-1">
                    <img className="w-full" src={pro.previewImage} alt="c" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black opacity-75 top-1/3"></div>
                    <h2 className="absolute | ml-4 | bottom-5 text-white font-bold ">
                      {" "}
                      {pro.previewText}{" "}
                    </h2>
                  </section>
                </div>
              </div>
            ))}
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
}
