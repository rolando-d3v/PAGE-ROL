import React from "react";

export default function Main5() {
  return (
    <div className="bg-gray-100 ">
      <div className="w-11/12 mx-auto pt-28 pb-8">
        <h3 className="text-3xl xl:text-5xl font-bold text-center">
          ¿Por qué el iPhone es único?
        </h3>
      </div>
      <section className="">
        <div className=" md:flex md:items-center md:w-10/12 lg:w-9/12 xl:w-3/5 bg-white md:mx-auto md:px-4 ">
          <div className="w-11/12 md:w-6/12  mx-auto pt-28 md:pt-2  pb-8">
            <h3 className="text-xl font-bold text-center">iOS 14</h3>
            <h3 className="text-3xl 2xl:text-5xl font-bold text-center">Como nuevo.</h3>
            <h3 className="text-3xl 2xl:text-5xl font-bold text-center">Como siempre.</h3>
            <h3 className="text-blue-600 text-lg font-semibold text-center mt-4">
              Más información
            </h3>
          </div>
          <div className="hidden md:flex ">
            <div className="">
              <img className=" mx-auto" src="/web5/main5web.png" alt="movil" />
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center overflow-hidden md:hidden ">
        <div className=" ">
          <div className=" inline-flex" style={{ width: "1200px" }}>
            <img
              className=" mx-auto"
              style={{ width: "750px" }}
              src="/web5/main5.png"
              alt="movil"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
