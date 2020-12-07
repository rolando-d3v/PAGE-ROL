import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import Link from "next/link";



export default function Navigation() {
  const [drop, setDrop] = useState(false);

  const openDrop = () => {
    setDrop(!drop);
  };

  const listItems = [
    { id: 1, name: "Productos", url: "/" },
    { id: 2, name: "Features", url: "/" },
    { id: 3, name: "Marketplace", url: "/" },
    { id: 4, name: "Company", url: "/" },
  ];

  return (
    <div className='w-full'  >
        
      <div className="relative overflow-hidden ">
        <div className="mx-auto "  >

          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-3xl lg:w-full lg:pb-28 ">
              
            {/* corte de la foto con un svg */}
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-3/5  xl:w-full text-white transform translate-x-1/2 "
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav
                className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                aria-label="Global"
              >
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="#">
                      <span className="sr-only">Workflow</span>
                      <img
                        className="h-8 w-auto sm:h-10"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      />
                    </a>
                  </div>
                </div>
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                  {listItems.map((list) => (
                    <Link key={list.id} href={list.url} >
                      <a className="font-medium text-gray-500 hover:text-gray-900">
                        {list.name}
                      </a>
                    </Link>
                  ))}
                  <a
                    href="#"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Log in
                  </a>
                </div>
              </nav>
            </div>

            {/* Mobile  */}

            <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden ">
              <div className="rounded-lg shadow-md bg-white  overflow-hidden border-2 border-indigo-400">
                <div className="px-5 py-4 flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      alt=""
                    />
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      className="bg-white rounded-md p-2  text-gray-400 hover:text-indigo-500 hover:bg-gray-100 focus:outline-none  focus:text-indigo-500"
                      onClick={() => openDrop()}
                    >
                      <span className="sr-only">Close main menu</span>
                      {/* <!-- Heroicon name: x --> */}
                      {drop ? (
                        <FaIcons.FaTimes className="h-6 w-6" />
                      ) : (
                        <FaIcons.FaBars className="h-6 w-6" />
                      )}
                    </button>
                  </div>
                </div>
                <div
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="main-menu"
                  className={`${drop ? "flex" : "hidden"}`}
                >
                  <div className="px-2 pt-2 pb-3 space-y-1 w-full" >
                    {listItems.map((list) => (
                      <Link key={list.id} href="#">
                        <a className="block px-3 py-2 w-full rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-indigo-400">
                          {list.name}
                        </a>
                      </Link>
                    ))}

                    <a
                      href="#"
                      className="block w-full px-5 py-3 text-center bg-blue-500  rounded-md font-medium  hover:bg-indigo-600 text-white focus:ring-2"
                      role="menuitem"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </div>



            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Data to enrich your</span>
                  <span className="block text-indigo-600 xl:inline">
                    online business
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    >
                      Get started
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                    >
                      Live demo
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>

        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-8/12">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt=""
          />
        </div>

      </div>
    </div>
  );
}
