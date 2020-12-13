import React from "react";
import Link from "next/link";


export default function Main2() {
  return (
    <section className="bg-gray-100 pt-14 ">
      <div className="w-10/12 mx-auto text-center ">
        <h3 className="text-gray-700 text-lg lg:text-2xl font-semibold">
          iPhone 12
        </h3>
        <h4 className="text-black  text-4xl lg:text-5xl font-bold font-poppins my-5">
          Súper. Mega. Rápido.
        </h4>
        <div className="w-3/4 md:w-3/5  lg:w-2/4 mx-auto xl:w-5/12  2xl:w-4/12 ">
          <p className="text-gray-700 font-poppins font-semibold xl:text-lg ">
            Chip A14 Bionic, un nuevo diseño, Ceramic Shield, pantalla OLED de
            borde a borde y modo Noche en todas las cámaras. Todo en dos tamaños
            perfectos, incluido el iPhone 12 mini.
          </p>
        </div>
        <h2 className="text-gray-500 font-semibold my-3">
        Consulta la disponibilidad más adelante
        </h2>
        <Link href="/">
          <a className="text-lightBlue-500 font-normal"> Más informacion </a>
        </Link>
      </div>
      <div className="py-4 w-4/5 mx-auto">
        <img className="mx-auto" src="/web5/main2.png" alt="movil" />
      </div>
    </section>
  );
}
