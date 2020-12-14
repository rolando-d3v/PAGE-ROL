import React from "react";

export default function Main4() {
  return (
    <div className="bg-gray-100 w-full">
      <div className="w-11/12 mx-auto pt-28 pb-8">
        <h3 className="text-3xl xl:text-5xl font-bold text-center">
          Accesorios destacados
        </h3>
      </div>

      <section className="bg-white py-14 md:w-10/12 lg:w-9/12 xl:w-3/5 mx-auto">
        <div className="w-8/12 mx-auto md:flex md:space-x-8 lg:space-x-16 xl:space-x-28 md:items-center">
          <div className="w-11/12 sm:w-3/5 md:w-10/12  mx-auto text-center space-y-6">
            <h2 className="text-orange-600  text-xs py-0.5 px-2 border border-orange-600 rounded-xl">
              Consulta la dispnibilidad mas adelante{" "}
            </h2>
            <h3 className="text-2xl font-bold">MagSafe</h3>
            <p>
              Súmale una cartera o una funda magnética. O las dos. Y disfruta
              también de una carga inalámbrica más rápida.
            </p>
          </div>

          <div className="w-11/12 sm:w-8/12 mx-auto">
            <img className="mx-auto" src="/web5/main4_1.png" alt="r" />
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:w-10/12 lg:w-9/12 xl:w-3/5 mx-auto mt-2">
        <div className="w-8/12 mx-auto md:flex md:flex-row-reverse md:items-center">

          <div className="w-8/12 md:w-7/12 mx-auto text-center space-y-6 md:ml-4">
            <h3 className="text-2xl font-bold">AirPods</h3>
            <p>
              Los AirPods se conectan fácilmente y te siguen el ritmo todo el
              día.
            </p>
            <h3 className="text-blue-600 text-lg font-semibold">
              Más información
            </h3>
          </div>

          <div className="w-11/12 sm:w-8/12 mx-auto">
            <img className="mx-auto" src="/web5/main4_2.png" alt="r" />
          </div>
        </div>
      </section>
    </div>
  );
}
