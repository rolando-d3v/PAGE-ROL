import React from "react";
import Link from 'next/link'
import * as FaIcons from "react-icons/fa";
import { useGlobalContext } from "../../context/themeContext";


export default function Navigation3() {

  const { cambioDark } = useGlobalContext();

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

      <button className="py-2 px-4 bg-blue-200" onClick={() => cambioDark()}>
        cambio rol
      </button>


     
      <FaIcons.FaRegMoon />

      <div className="bg-blue-600 h-10 w-10  rounded-full flex items-center justify-center">
        <FaIcons.FaMoon />
      </div>
      <div className="bg-yellow-300 h-10 w-10  rounded-full flex items-center justify-center">
        <FaIcons.FaSun />
      </div>

      <section>
        <div
          className="w-auto  dark:bg-black  xl:flex bg-white rounded-lg p-4 m-2 border  border-gray-400"
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
