import React from "react";

export default function Main5() {
  return (
    <div className="bg-gray-100 font-poppins ">
      <div className="w-11/12 mx-auto pt-28 pb-8">
        <h3 className="text-3xl xl:text-5xl font-bold text-center">
          ¿Por qué el iPhone es único?
        </h3>
      </div>
      <section className="">
        <div className=" md:flex md:items-center md:w-10/12   bg-white md:mx-auto ">
          <div className="w-11/12 md:w-6/12  mx-auto pt-28 md:pt-2  pb-1 xl:pb-0 ">
            <h3 className="text-xl font-bold text-center">iOS 14</h3>
            <h3 className="text-3xl 2xl:text-5xl font-bold text-center">
              Como nuevo.
            </h3>
            <h3 className="text-3xl 2xl:text-5xl font-bold text-center">
              Como siempre.
            </h3>
          </div>
          <div className="hidden md:flex lg:hidden ">
            <div className="">
              <img className=" mx-auto" src="/web5/main5web.png" alt="movil" />
            </div>
          </div>
          <div className="hidden lg:flex ">
            <div className="">
              <img className=" mx-auto" src="/web5/main5web2.png" alt="movil" />
            </div>
          </div>
        </div>
      </section>

    
        <div className="flex justify-center  md:hidden ">
          <div className=" inline-flex" style={{ width: "1200px" }}>
            <img
              className=" mx-auto object-cover h-80 "
              style={{ width: "750px" }}
              src="/web5/main5.png"
              alt="movil"
            />
          </div>
        </div>
      

      <section className="md:flex md:w-10/12 mx-auto md:space-x-4 mt-2">

        <section className="bg-white  pt-14 md:pt-8   lg:w-9/12 xl:w-3/5 mx-auto mt-2">
          <div className="w-5/6 sm:w-3/4  md:w-11/12 mx-auto ">
            <div className="w-5/6 md:w-4/5 mx-auto text-center space-y-3 mb-4  ">
              <h3 className="text-3xl font-bold">Cámbiate a iPhone</h3>
              <p className="font-semibold text-gray-600">
                Hay muchas razones para cambiarse a iPhone. Y es tan fácil que
                no podrás creerlo.
              </p>
              <h3 className="text-blue-600 text-lg font-semibold">
                Más información
              </h3>
            </div>

            <div className="w-11/12 sm:w-8/12 mx-auto">
              <img className="mx-auto" src="/web5/main5flex1.png" alt="r" />
            </div>
          </div>
        </section>

        <section className="bg-white  md:w-10/12 lg:w-9/12 xl:w-3/5 mx-auto mt-2 flex items-center ">
          <div className="w-5/6 mx-auto py-36  md:py-0 ">
            <div className="w-11/12 sm:w-8/12 mx-auto">
              <img
                className="mx-auto w-28  "
                src="/web5/main5flex2.png"
                alt="r"
              />
            </div>
            <div className="w-3/4 md:w-7/12 mx-auto text-center space-y-2  ">
              <h3 className="text-3xl font-bold">Privacidad</h3>
              <p className="font-semibold text-gray-600">
                Tú decides lo que compartes.
              </p>
              <h3 className="text-blue-600 text-lg font-semibold">
                Más información
              </h3>
            </div>
          </div>
        </section>

      </section>
    </div>
  );
}
