import React, { useState } from "react";
import Basket from "../../assets/icons/basket-svgrepo-com.svg";
import Search from "../../assets/icons/search-svgrepo-com.svg";
import Logo from "../../assets/icons/Logo_White.png";
import Input from "../atoms/Input";

function NavBar() {
  const location = window.location.href;
  const [searchValue, setSearchValue] = useState("");

  let links = [
    { name: "home", link: "/" },
    { name: "best selling", link: "/best-selling" },
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
    <div className="h-max bg-white md:flex md:flex-row md:items-center md:justify-around gap-4 md:w-full md:pt-6 ssm:pt-2 font-normal md:gap-1 md:px-6 ssm:flex ssm:flex-col ssm:items-start ssm:px-8 ssm:gap-1 ssm:justify-center">
      <div className="logo flex justify-center items-center">
        <a href="/">
          <img
            src={Logo}
            alt="logo"
            className="text-main lg:w-20 text-center p-2 text-18 hover:cursor-pointer md:w-16 ssm:w-12"
          />
        </a>
      </div>
      <div className="menu lg:block lg:text-18 lg:w-640 flex justify-center items-center md:block md:text-14 ssm:text-10 md:w-500 ssm:w-full p-0">
        <ul
          className={`md:flex md:pr-0 md:justify-around md:flex-row w-full ssm:z-1 z-[1] capitalize ssm:flex ssm:flex-col ssm:items-end md:static ssm:absolute ssm:pr-8 transition-all duration-100 ease-in ${
            open ? "top-10 opacity-100 z-[1]" : "top-[-480px]"
          } ssm:opacity-100 opacity-0`}>
          {links.map((link) => (
            <li key={link.name} className="ssm:pt-2.5 md:pt-0">
              <a
                href={link.link}
                className={`costum-list list ${
                  open
                    ? `${
                        location.slice(22) !== "home"
                          ? "text-dark"
                          : "sm:text-white ssm:text-dark"
                      }`
                    : "sm:text-white ssm:text-dark md:text-dark"
                }`}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="btns md:static flex justify-between items-center md:gap-2 w-max ssm:gap-2 ssm:absolute ssm:right-8">
        {location.slice(22) !== "best-selling" &&
          location.slice(22) !== "products" && (
            <>
              <Input
                className="border rounded-5 border-main lg:text-14 lg:block px-3 py-2 outline-none md:block md:text-12 ssm:hidden"
                placeHolder="search..."
                rightIcon={Search}
                name="search"
                classIcon="lg:w-5 hover:cursor-pointer absolute lg:left-40 pr-2 md:left-36 md:w-4"
                value={searchValue}
                onChange={(e) => {
                  setSearchValue(e.target.value);
                }}
                onIconClick={handleSubmit}
              />
              <img
                src={Search}
                alt=""
                className="md:hidden ssm:w-4 hover:cursor-pointer"
              />
            </>
          )}
        <img
          src={Basket}
          alt="basket"
          className="lg:w-6 hover:cursor-pointer md:w-5 ssm:w-4"
          onClick={() => (window.location = "/basket")}
        />
        <div className="md:hidden">
          <button
            className="relative group flex items-center outline-none"
            onClick={() => setOpen(!open)}>
            <div
              className={`relative flex items-center justify-center w-5 h-5 transform transition-all bg-white duration-200`}>
              <div
                className={`flex flex-col justify-between w-[15px] h-[15px] transform transition-all duration-300 ${
                  open ? "group-focus:-rotate-[45deg] origin-center" : ""
                }`}>
                <div
                  className={`bg-dark h-[2px] w-1/2 rounded transform transition-all duration-300 ${
                    open
                      ? "group-focus:-rotate-90 group-focus:h-[1px] origin-right delay-75 group-focus:-translate-y-[1px]"
                      : ""
                  }`}></div>
                <div className={`bg-dark h-[1px] rounded`}></div>
                <div
                  className={`bg-dark h-[2px] w-1/2 rounded self-end transform transition-all duration-300 ${
                    open
                      ? "group-focus:-rotate-90 group-focus:h-[1px] origin-left delay-75 group-focus:translate-y-[1px]"
                      : ""
                  }`}></div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
