import React from "react";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import * as GoIcons from "react-icons/go";
import Sidebar from "./Sidebar";
import { products, categories } from "./data";

export default function Header() {
  return (
    <div className="font-poppins">
      <header></header>

      {/* Header Movil */}
      <header className=" sticky top-0 z-10 flex items-center justify-between px-4 py-3.5 shadow-lg bg-white">
        <button className="focus:outline-none">
          <FaIcons.FaBars className="w-6 h-6" />
        </button>
        <img
          className="h-8"
          src="https://cdn.allbirds.com/image/upload/v1571355713/icons/allbirds-logo.svg"
          alt="rc"
        />
        <button className="focus:outline-none">
          <FiIcons.FiShoppingCart className="w-6 h-6" />
        </button>
      </header>

      <main>
        <section className="flex items-center justify-between px-4 py-2.5">
          <div>
            <div className="space-x-1">
              <a className="font-semibold text-xs text-gray-500 underline ">
                Home
              </a>
              <span>/</span>
            </div>
            <h3 className="font-bold text-lg">Women Shoes</h3>
          </div>
          <button className="focus:outline-none transform rotate-90">
            <GoIcons.GoSettings className="w-5 h-5" />
          </button>
        </section>

        {/* Sidebar Movil */}
        {/* <Sidebar categories={categories} /> */}
        <section className="bg-gray-100 py-3 overflow-x-auto scrollbars-hidden ">
          <div className="px-6 inline-flex space-x-4 ">
            {categories.map((cat, index) => (
              <a key={cat.index} className="whitespace-nowrap">
                {cat}
              </a>
            ))}
          </div>
        </section>
        <section className="py-6 space-y-14 px-8">
          {products.map((pro) => (
            <div className="mb-4">
              <div>
                <h3 className="text-lg font-semibold"> {pro.name} </h3>
                <p className="text-sm text-gray-800 leading-tight">
                  {pro.description}{" "}
                </p>
              </div>
              <div className="shadow-xl mt-4">
                <div className="shadow-lg">
                  <a>
                    <div>
                      <img src={pro.styles[0].image} alt="ls" />
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
                  <div className="px-4 flex space-x-4 pb-4">
                    {pro.styles.slice(0, 7).map((sty, index) => (
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
                  </div>
                  <div className="border-t ">
                    <button className=" flex justify-between items-center w-full  px-5 py-2 focus:ring-2 focus:ring-fuchsia-400 focus:outline-none ">
                      <span className="font-semibold">Quick Add</span>
                      <FaIcons.FaPlus />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
