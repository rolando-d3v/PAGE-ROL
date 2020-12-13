import React from "react";
import Link from "next/link";

export default function Main3({ List12pro, List12 }) {
  return (
    <div className="bg-white py-32">
      <div className="text-center">
        <h3 className="text-4xl xl:text-5xl font-semibold">
          Encuentra el iPhone perfecto para ti.
        </h3>
        <h3 className="text-lightBlue-500 font-semibold mt-3 xl:text-2xl ">
          Comparar los modelos de iPhone
        </h3>
      </div>
      <section className="w-11/12 sm:w-2/3 lg:w-5/6 xl:w-3/4 2xl:w-4/6 mx-auto">
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="col-span-1 px-4  ">
            <img src="/web5/12promain3.png" alt="" />
            <h3 className="font-semibold text-lg my-4">iPhone 12 Pro</h3>
            <div className="space-y-3 mb-2">
              {List12pro.map((pro) => (
                <h3 key={pro.id}  className="text-sm xl:text-base text-gray-600">
                  {pro.name}{" "}
                </h3>
              ))}
            </div>
            <Link href="/">
              <a className="text-lightBlue-600 font-medium mt-4">
                Más informacion{" "}
              </a>
            </Link>
          </div>
          <div className="col-span-1 px-4">
            <img src="/web5/12main3.png" alt="e" />
            <h3 className="font-semibold text-lg my-4">iPhone 12</h3>
            <div className="space-y-3 mb-2">
              {List12.map((pro) => (
                <h3 key={pro.id}  className="text-sm  xl:text-base text-gray-600">
                  {pro.name}{" "}
                </h3>
              ))}
            </div>
              <Link href="/">
                <a className="text-lightBlue-600 font-medium mt-4 ">
                  Más informacion{" "}
                </a>
              </Link>
          </div>
          <div className="col-span-1 px-4">
            <img src="/web5/12promain3.png" alt="" />
            <h3 className="font-semibold text-lg my-4">iPhone 12 Pro</h3>
            <div className="space-y-3 mb-2">
              {List12pro.map((pro) => (
                <h3 key={pro.id}  className="text-sm  xl:text-base text-gray-600">
                  {pro.name}{" "}
                </h3>
              ))}
            </div>
              <Link href="/">
                <a className="text-lightBlue-600 font-medium mt-4">
                  Más informacion{" "}
                </a>
              </Link>
          </div>
          <div className="col-span-1 px-4">
            <img src="/web5/12main3.png" alt="" />
            <h3 className="font-semibold text-lg my-4">iPhone 12 Pro</h3>
            <div className="space-y-3 mb-2">
              {List12.map((pro) => (
                <h3 key={pro.id}  className="text-sm  xl:text-base text-gray-600">
                  {pro.name}{" "}
                </h3>
              ))}
            </div>
              <Link href="/">
                <a className="text-lightBlue-600 font-medium my-4">
                  Más informacion{" "}
                </a>
              </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
