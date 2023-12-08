import React, { useState } from "react";
import Basket from "../../assets/icons/basket.png";
import Search from "../../assets/icons/loupe.png";
import Logo from "../../assets/icons/Logo_White.png";
import Menu from "../../assets/icons/burger-bar-black.png";
import Close from "../../assets/icons/close-black.png";
import Input from "../atoms/Input";

function NavBar() {
  const [searchValue, setSearchValue] = useState("");

  let links = [
    { name: "home", link: "/" },
    { name: "best selling", link: "/besst-selling" },
    { name: "our products", link: "/products" },
    { name: "about us", link: "/about" },
    { name: "contact us", link: "/contact" },
  ];

  let [open, setOpen] = useState(false);

  const handleSubmit = () => {
    if (searchValue.length > 0) {
      console.log(searchValue);
    }
  };

  return (
    <div className="h-max bg-white ssm:bg-slate-50 md:flex md:flex-row md:items-center md:justify-around gap-4 md:w-full pt-6 font-normal md:gap-1 md:px-6 ssm:flex ssm:flex-col ssm:items-start ssm:px-8 ssm:gap-1">
      <div className="logo flex justify-center items-center">
        <img
          src={Logo}
          alt="logo"
          className="text-main lg:w-20 text-center p-2 text-18 hover:cursor-pointer md:w-16 ssm:w-14"
        />
      </div>
      <div className="menu lg:block lg:text-18 lg:w-640 flex justify-center md:block md:text-14 md:w-500 ssm:w-full">
        <ul
          className={`md:flex md:justify-around md:flex-row w-full ssm:z-1 z-[-1] capitalize ssm:flex ssm:flex-col ssm:items-end md:static ssm:absolute ssm:pr-8 transition-all duration-500 ease-in ${
            open ? "top-20 opacity-100" : "top-[-490px]"
          } ssm:opacity-100 opacity-0`}>
          {links.map((link) => (
            <li key={link.name} className="ssm:pt-2.5">
              <a href={link.link} className="costum-list list">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="btns md:static flex justify-between items-center md:gap-2 w-max ssm:gap-2 ssm:mt-2 ssm:absolute ssm:right-8">
        <Input
          className="border rounded-5 border-main lg:text-14 lg:block px-3 py-2 outline-none md:block md:text-12 ssm:hidden"
          placeHolder="search..."
          rightIcon={Search}
          name="search"
          classIcon="lg:w-5 hover:cursor-pointer absolute lg:left-36 md:left-32 md:w-4"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          onIconClick={handleSubmit}
        />
        <img
          src={Search}
          alt=""
          className="md:hidden ssm:w-5 hover:cursor-pointer"
        />
        <img
          src={Basket}
          alt="basket"
          className="lg:w-6 hover:cursor-pointer md:w-5 ssm:w-6"
          onClick={() => (window.location = "/basket")}
        />
        <div
          className="w-5 cursor-pointer md:hidden"
          onClick={() => setOpen(!open)}>
          {open !== true ? (
            <img src={Menu} alt="menu" />
          ) : (
            <img src={Close} alt="menu" />
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
