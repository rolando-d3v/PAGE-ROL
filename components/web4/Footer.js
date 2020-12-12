import React from "react";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";

export default function Footer() {
  const help = [
    { id: 1, name: "1-888-963-8944" },
    { id: 2, name: "1-814-251-9966 (Text)" },
    { id: 3, name: "help@allbirds.com" },
    { id: 4, name: "Returns/Exchanges" },
    { id: 5, name: "FAQ/Contact Us" },
  ];

  const shop = [
    { id: 1, name: "Men's Shoes" },
    { id: 2, name: "Women's Shoes" },
    { id: 3, name: "Men's Apparel" },
    { id: 4, name: "Women's Apparel" },
    { id: 5, name: "Socks" },
    { id: 6, name: "Gift Cards" },
    { id: 7, name: "Download the Allbirds App" },
  ];

  const company = [
    { id: 1, name: "Our Stores" },
    { id: 2, name: "Our Story" },
    { id: 3, name: "Our Materials" },
    { id: 4, name: "Sustainability" },
    { id: 5, name: "Partnerships" },
    { id: 6, name: "Affiliates" },
    { id: 7, name: "Press" },
    { id: 8, name: "California Transparency Act" },
  ];

  return (
    <div
      className="md:h-full py-10 font-poppins  "
      style={{ backgroundColor: "#212a2f" }}
    >
    <div className='2xl:w-3/4 mx-auto'  > 
    <div className="text-white  mx-auto 2xl:w-3/4" style={{ width: "98%" }}>
        <form className="px-4 md:flex w-full lg:w-2/5 md:space-x-4 items-center ">

          <div className="my-4 relative w-full md:w-2/3 ">
            <label className="font-semibold text-sm absolute -top-6 ">
              Enter your email to stay in touch!{" "}
            </label>
            <input
              type="text"
              className="w-full bg-trueGray-500 focus:border-2 focus:border-white focus:ring-0 py-2.5  "
              placeholder="ingrese Email"
            />
            <div
              className="absolute inset-0 border-b-2 border-white pointer-events-none"
              aria-hidden
            ></div>
          </div>

         <div className='w-full  md:w-1/3' >
         <button
            className="bg-trueGray-600 w-full py-3 font-bold rounded focus:bg-white focus:text-gray-900"
            type="submit"
          >
            SIGN UP
          </button>
         </div>
        </form>
      </div>

     <div className='lg:flex lg:space-x-28 lg:mx-10' >
     <section className="mt-10">
        <h2 className="text-white font-bold text-center lg:text-left mb-5"> HELP</h2>
        <div className="text-white flex flex-col  text-center lg:text-left space-y-3 text-xs">
          {help.map((he) => (
            <a key={he.id}> {he.name} </a>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-white font-bold text-center lg:text-left mb-5"> SHOP</h2>
        <div className="text-white flex flex-col  text-center lg:text-left space-y-3 text-xs">
          {shop.map((he) => (
            <a key={he.id}> {he.name} </a>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-white font-bold text-center lg:text-left mb-5"> COMPANY</h2>
        <div className="text-white flex flex-col  text-center lg:text-left space-y-3 text-xs">
          {company.map((he) => (
            <a key={he.id}> {he.name} </a>
          ))}
        </div>
      </section>
     </div>

      <section className="text-white text-center mt-10 lg:mt-16 w-11/12 mx-auto lg:flex  lg:items-start lg:space-x-20 ">

        <div className='lg:w-1/4' >
          <h3 className="font-bold lg:text-left ">FOLLOW THE FLOCK</h3>
          <p className="mt-4 text-xs lg:text-left ">
            Exclusive offers, a heads up on new things, and sightings of
            Allbirds in the wild. Oh, we have cute sheep, too. #weareallbirds
          </p>
          <div className="mt-4 flex justify-center lg:justify-start space-x-3">
            <FaIcons.FaInstagram className="w-5 h-5" />
            <FaIcons.FaTwitter className="w-5 h-5" />
            <FaIcons.FaFacebookF className="w-5 h-5" />
            <FaIcons.FaPinterest className="w-5 h-5" />
          </div>
        </div>

        <div className="flex justify-center py-12 lg:py-0 ">
          <img
            className="w-20"
            src="https://cdn.allbirds.com/image/upload/q_auto/v1/production/footer/en-US/images/1X4EOQF1JJOjMbo48vDUzB/1"
            alt="r"
          />
        </div>
        <div className='flex space-x-3 lg:space-x-4 justify-center' >
          <img className='w-9 h-9' src="https://cdn.allbirds.com/image/upload/q_auto/production/anchorLink/en-US/images/6FnrOphj9NsjD38uREtsBn/1" alt="bandera"/>
          <img className='w-9 h-9' src="https://cdn.allbirds.com/image/upload/q_auto/production/anchorLink/en-US/images/6FnrOphj9NsjD38uREtsBn/1" alt="bandera"/>
          <img className='w-9 h-9' src="https://cdn.allbirds.com/image/upload/q_auto/production/anchorLink/en-US/images/6FnrOphj9NsjD38uREtsBn/1" alt="bandera"/>
          <img className='w-9 h-9' src="https://cdn.allbirds.com/image/upload/q_auto/production/anchorLink/en-US/images/6FnrOphj9NsjD38uREtsBn/1" alt="bandera"/>
          <img className='w-9 h-9' src="https://cdn.allbirds.com/image/upload/q_auto/production/anchorLink/en-US/images/6FnrOphj9NsjD38uREtsBn/1" alt="bandera"/>
          <img className='w-9 h-9' src="https://cdn.allbirds.com/image/upload/q_auto/production/anchorLink/en-US/images/6FnrOphj9NsjD38uREtsBn/1" alt="bandera"/>
          <img className='w-9 h-9' src="https://cdn.allbirds.com/image/upload/q_auto/production/anchorLink/en-US/images/6FnrOphj9NsjD38uREtsBn/1" alt="bandera"/>
          <img className='w-9 h-9' src="https://cdn.allbirds.com/image/upload/q_auto/production/anchorLink/en-US/images/6FnrOphj9NsjD38uREtsBn/1" alt="bandera"/>
        </div>
      </section>

      <div className='w-full py-12 text-center' >
        <h3 className='text-white text-xs' >© 2020 Allbirds, Inc. All Rights Reserved. Terms, Privacy & Accessibility</h3>
        <button className='fixed bottom-3 right-4 z-10 bg-black w-16 h-16 rounded-full border' >
         <MdIcons.MdMessage className='text-white w-8 h-8 mx-auto' />
        </button>
      </div>
    </div>
    </div>
  );
}
