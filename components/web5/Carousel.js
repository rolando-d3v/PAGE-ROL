import React from "react";

export default function Carousel({ ListIphones }) {
  return (
    <div style={{ backgroundColor: "#111113" }}>
      <div className=" w-9/12  md:w-11/12 mx-auto" >
        <div className="flex justify-center  py-2">
          <div className="overflow-x-auto detscroll-hidden  ">
            <section className="inline-flex items-start py-2 space-x-1  ">
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
    </div>
  );
}
