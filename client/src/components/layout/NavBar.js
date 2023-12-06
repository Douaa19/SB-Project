import React from "react";
import { useState } from "react";
import Basket from "../../assets/icons/basket.png";
import Search from "../../assets/icons/loupe.png";
import Logo from "../../assets/icons/logo_noir.png";
import Input from "../atoms/Input";

function NavBar() {
  return (
    <div className="flex items-center justify-around gap-4 w-full h-16 pt-6 font-normal">
      <div className="logo flex justify-center items-center">
        <img
          src={Logo}
          alt="logo"
          className="border rounded-full border-main text-main w-20 text-center text-white bg-main-color p-2 text-18 hover:cursor-pointer"
        />
      </div>
      <div className="menu text-18 w-640 flex justify-center">
        <ul className="flex justify-around w-full capitalize">
          <li className="costum-list list">home</li>
          <li className="costum-list list">best selling</li>
          <li className="costum-list list">our products</li>
          <li className="costum-list list">about us</li>
          <li className="costum-list list">contact us</li>
        </ul>
      </div>
      <div className="btns flex justify-end items-center">
        <Input
          className="border rounded-5 border-main text-14 px-3 py-2 outline-none relative"
          placeHolder="search..."
          rightIcon={Search}
          classIcon="w-5 hover:cursor-pointer relative right-7"
        />
        <img
          src={Basket}
          alt="basket"
          className="w-6 hover:cursor-pointer"
          onClick={() => (window.location = "/basket")}
        />
      </div>
    </div>
  );
}

export default NavBar;
