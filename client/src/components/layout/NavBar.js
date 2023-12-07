import React from "react";
import { useState } from "react";
import Basket from "../../assets/icons/basket.png";
import Search from "../../assets/icons/loupe.png";
import Logo from "../../assets/icons/Logo_White.png";
import Menu from "../../assets/icons/menu.png";
import Input from "../atoms/Input";

function NavBar() {
  return (
    <div className="h-max flex items-center justify-around gap-4 w-full pt-6 font-normal md:gap-1 ssm:flex ssm:justify-between ssm:px-6">
      <div className="humberger md:hidden ssm:block ssm:w-14">
        <img src={Menu} alt="menu" className="" />
      </div>
      <div className="logo flex justify-center items-center">
        <img
          src={Logo}
          alt="logo"
          className="text-main lg:w-20 text-center p-2 text-18 hover:cursor-pointer md:w-16 ssm:w-14"
        />
      </div>
      <div className="menu lg:block lg:text-18 lg:w-640 flex justify-center md:block md:text-14 md:w-500 ssm:hidden">
        <ul className="flex justify-around w-full capitalize">
          <li className="costum-list list">home</li>
          <li className="costum-list list">best selling</li>
          <li className="costum-list list">our products</li>
          <li className="costum-list list">about us</li>
          <li className="costum-list list">contact us</li>
        </ul>
      </div>
      <div className="btns flex justify-between items-center md:gap-2 md:w-max ssm:w-14 ssm:gap-2">
        <Input
          className="border rounded-5 border-main lg:text-14 lg:block px-3 py-2 outline-none md:block md:text-12 ssm:hidden"
          placeHolder="search..."
          rightIcon={Search}
          classIcon="lg:w-5 hover:cursor-pointer absolute lg:left-36 md:left-32 md:w-4"
        />
        <img src={Search} alt="" className="md:hidden ssm:w-5" />
        <img
          src={Basket}
          alt="basket"
          className="lg:w-6 hover:cursor-pointer md:w-5 ssm:w-6"
          onClick={() => (window.location = "/basket")}
        />
      </div>
    </div>
  );
}

export default NavBar;
