import React from "react";

function EmptyRowBasket() {
  return (
    <>
      <div className="transition duration-300 ease-in-out flex items-center justify-center my-6">
        <div className="md:w-1/2 drop-shadow-md bg-white rounded-lg border-gray-100 text-center px-8 py-10 flex flex-col items-center justify-center gap-6">
          <span className="text-18 font-bold text-gray-700">
            Your basket is looking a little empty! 🛒
          </span>
          <span className="text-16 font-medium text-gray-500">
            Why not explore our latest collections and find something you’ll
            love? Click here to start shopping!
          </span>
          <a
            href="/products"
            className="text-white bg-main px-6 py-3 outline-none hover:scale-105 hover:border hover:shadow-md hover:border-main hover:bg-white hover:text-main mt-4 rounded-full text-16 font-semibold hover:bg-blue-700 transition duration-300 ease-in-out">
            Click here to start shopping!
          </a>
        </div>
      </div>
    </>
  );
}

export default EmptyRowBasket;
