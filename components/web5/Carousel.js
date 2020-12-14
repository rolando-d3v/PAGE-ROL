import React, { useState } from "react";
import * as MdIcons from "react-icons/md";

export default function Carousel({ ListIphones }) {
  const [derecha, setDerecha] = useState(0);

  console.log(derecha);
  // console.log(isquierda);

  const onDerecha = () => {
    setDerecha(derecha)
    setDerecha(derecha + 40);
  };

  const onIzquierda = () => {
    setDerecha(derecha - 40);
  };

  

  return (
    <div className="relative" style={{ backgroundColor: "#111113" }}>
      <div className=" w-4/5  sm:w-11/12 mx-auto">
        <div className="flex justify-center  py-2.5 ">
          <div className="overflow-hidden sm:overflow-x-auto detscroll-hidden  ">
            <section
              className={`-translate-x-${derecha} transform  duration-500 inline-flex items-start py-2 space-x-1 sm:translate-x-0`}
            >
              {ListIphones.map((photo) => (
                <div className="w-20 " key={photo.id} >
                  <img
                    className="w-14 h-16 mx-auto"
                    src={photo.image}
                    alt="iphone"
                  />
                  <div className="">
                    <h3 className="text-white text-xs text-center">
                      {photo.name}{" "}
                    </h3>
                    <h3 className="text-orange-500 text-xs text-center">
                      {photo.new}{" "}
                    </h3>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
      <button
        className={`${
          derecha === 0 ? "hidden" : "absolute text-white border-r border-gray-700 h-24 top-6 focus:outline-none sm:hidden"
        }`}
        onClick={() => onIzquierda()}
      >
        <MdIcons.MdKeyboardArrowLeft className="text-gray-300 h-8 w-8" />
      </button>

      <button
        className={`${
          derecha === 80 ? "hidden" : "absolute text-white border-l border-gray-700  h-24 top-6 right-0  focus:outline-none sm:hidden"
        }`}
        onClick={() => onDerecha()}
      >
        <MdIcons.MdChevronRight className="text-gray-300 h-8 w-8 "  />
      </button>
    </div>
  );
}
