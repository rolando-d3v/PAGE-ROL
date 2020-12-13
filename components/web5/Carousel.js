import React, { useState } from "react";
import * as MdIcons from "react-icons/md";

export default function Carousel({ ListIphones }) {
  const [derecha, setDerecha] = useState(40);
  // const [isquierda, setIsquierda] = useState(20)

  console.log(derecha);
  // console.log(isquierda);

  const onDerecha = () => {
    setDerecha(derecha + 20);
  };

  const onIzquierda = () => {
    setDerecha(derecha - 20);
    // console.log('isquierda');
  };

  return (
    <div className="relative" style={{ backgroundColor: "#111113" }}>
      <div className=" w-9/12  md:w-11/12 mx-auto">
        <div className="flex justify-center  py-2 ">
          <div className="overflow-x-auto detscroll-hidden  ">
            <section
              className={`-translate-x-${derecha}   inline-flex items-start py-2 space-x-1 duration-500 transform sm:translate-x-0`}
            >
              {ListIphones.map((photo) => (
                <div className="w-20 " key={photo.id}>
                  <img
                    className="w-14 h-14 mx-auto"
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
          derecha === 0 ? "hidden" : "absolute bg-white h-24 top-3"
        }`}
        onClick={() => onIzquierda()}
      >
        <MdIcons.MdKeyboardArrowLeft className="text-gray-300 h-7 w-7" />
      </button>

      <button
        className={`${
          derecha === 80 ? "hidden" : "absolute bg-white h-24 top-3 right-0"
        }`}
        onClick={() => onDerecha()}
      >
        <MdIcons.MdChevronRight className="text-gray-300 h-7 w-7" />
      </button>
    </div>
  );
}
