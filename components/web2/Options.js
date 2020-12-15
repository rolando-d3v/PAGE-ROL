import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";

export default function Options() {
  const [option, setOption] = useState(false);

  const openOption = () => {
    setOption(!option);
  };

  const listOptions = [
    { id: 1, name: "Productos", url: "/" },
    { id: 2, name: "Features", url: "/" },
    { id: 3, name: "Marketplace", url: "/" },
  ];

  return (
    <div>
      <div>
        <div className="mt-1 relative">
          <button
            type="button"
            className="relative flex items-center w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            onClick={() => openOption()}
          >
            <span className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
                className="flex-shrink-0 h-6 w-6 rounded-full"
              />
              <span className="ml-3 block truncate">Tom Cook</span>
            </span>
            <FaIcons.FaSort className="h-6 w-6 absolute  right-0 mr-3  text-gray-500" />
          </button>

          <div
            className={`${
              option
                ? "flex absolute mt-1 w-full rounded-md bg-white shadow-lg "
                : "hidden"
            }`}
          >
            <ul className="max-h-56 rounded-md  text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm w-full">
              {listOptions.map((opt) => (
                <li key={opt.id} className="text-gray-600  relative py-2 pl-3 pr-9 hover:bg-indigo-300 flex items-center hover:text-indigo-600">
                  <div className="flex items-center">
                    <img
                      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                      alt=""
                      className="flex-shrink-0 h-6 w-6 rounded-full"
                    />
                    <span className="ml-3 block font-normal truncate">
                      {opt.name}
                    </span>
                  </div>
                  <FaIcons.FaCheck className="h-3 w-3 absolute right-0 mr-4 text-gray-500  " />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
