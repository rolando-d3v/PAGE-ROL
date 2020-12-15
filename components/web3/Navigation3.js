import React from "react";
import Link from "next/link";
import * as FaIcons from "react-icons/fa";
import { useGlobalContext } from "../../context/themeContext";

export default function Navigation3() {
  const { cambioDark, toggle } = useGlobalContext();

  return (
    <div className="w-11/12 mx-auto">
      <div>
        <Link href="/">
          <a> home </a>
        </Link>
        <Link href="/web3">
          <a> web3</a>
        </Link>
        <Link href="/web2">
          <a> web2</a>
        </Link>
      </div>

      <br />

      <div>
        <button className="py-2 px-4 bg-blue-200" onClick={() => cambioDark()}>
          cambio rol
        </button>
      </div>
      <br />

      {toggle ? (
        <div
          className="bg-blue-600 h-10 w-10  rounded-full flex items-center justify-center"
          onClick={() => cambioDark()}
        >
          <FaIcons.FaMoon />
        </div>
      ) : (
        <div
          className="bg-yellow-300 h-10 w-10  rounded-full flex items-center justify-center"
          onClick={() => cambioDark()}
        >
          <FaIcons.FaSun />
        </div>
      )}

      <br />

      <section className="w-28 relative flex items-center ">
        <FaIcons.FaSun className="dark:text-gray-400 text-yellow-400 absolute left-0" />
        <div
          className="w-14 h-7 bg-green-300  dark:bg-blue-500 rounded-2xl flex items-center mx-auto shadow-md "
          onClick={() => cambioDark()}
        >
          <div
            className={`${
              toggle ? "translate-x-8 " : ""
            } bg-gray-50  inline-block h-5 w-5 rounded-full transform  duration-300 shadow-lg`}
            style={{ margin: "0 0.15rem" }}
          ></div>
        </div>
        <FaIcons.FaMoon className="dark:text-blue-600 text-gray-400 absolute right-0" />
      </section>

      <section className="">
        <div
          className=" dark:bg-black  transform duration-1000  lg:flex bg-white rounded-lg p-4 m-2 border  border-gray-400 "
          style={{ width: "25rem" }}
        >
          <img
            className="mx-auto h-16 w-16 md:h-24 md:w-24  lg:mx-auto"
            src="https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg"
          />
          <div className="text-center  xl:text-left text-xs sm:text-base">
            <h2 className="text-lg">Erin Lindford</h2>
            <div className="text-purple-500">Product Engineer</div>
            <div className=" text-gray-600">lindford@gmail.com</div>
            <div className="text-gray-600">(555) 765-4321</div>
          </div>
        </div>
      </section>
    </div>
  );
}
