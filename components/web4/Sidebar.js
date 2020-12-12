import React from "react";
import Link from "next/link";
import * as FaIcons from "react-icons/fa";

export default function Sidebar(props) {
  const { categories, closeSidebar, sidebar } = props;

  return (
    <div>
      <div
        className={`${
          sidebar ? "bg-gradient-to-t from-black   inset-0 fixed z-20 " : ""
        } `}
        onClick={() => closeSidebar()}
      ></div>
      <div
        className={`${
          sidebar ? "translate-x-0" : "translate-x-full"
        } bg-white w-64 transform  duration-500 fixed right-0 z-30 h-screen`}
      >
        <aside className="">
          <div className="py-4 px-4 border-b border-gray-300">
            <button className="" onClick={() => closeSidebar()}>
              <FaIcons.FaArrowRight className="w-5 h-5" />
            </button>
          </div>
          <div className="px-6">
            <div className="py-4">
              <h3 className="font-semibold">Filter By:</h3>
            </div>
            <hr />
            <div className="py-4">
              <h3 className="font-semibold tracking-widest">MATERIAL</h3>
            </div>
            <nav className="flex flex-col mb-4 ">
              {categories.map((cat, index) => (
                <Link href="/web4" key={index}>
                  <a className="space-x-2">
                    <input type="checkbox" name="" id="" className="mr-1 bg-white shadow"/>
                    <span>{cat}</span>
                  </a>
                </Link>
              ))}
            </nav>
            <hr />
            <div className="my-2">
              <h3 className="font-semibold">HUE</h3>
              <div className="mt-1 space-y-1">
                <a className="flex items-center space-x-3">
                  <span className="inline-block bg-white h-5 w-5 rounded-full border border-gray-600"></span>
                  <span>White</span>
                </a>
                <a className="flex items-center space-x-3">
                  <span className="inline-block bg-blueGray-600 h-5 w-5 rounded-full border border-gray-600"></span>
                  <span>White</span>
                </a>
                <a className="flex items-center space-x-3">
                  <span className="inline-block bg-red-400 h-5 w-5 rounded-full border border-gray-600"></span>
                  <span>White</span>
                </a>
                <a className="flex items-center space-x-3">
                  <span className="inline-block bg-green-300 h-5 w-5 rounded-full border border-gray-600"></span>
                  <span>White</span>
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
