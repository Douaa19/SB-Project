import React, { useState } from "react";
import Logo from "../../assets/images/small-logo-sabaembroidery.svg";
import { useDispatch, useSelector } from "react-redux";
import { LogIn, ShoppingCart, LogOut } from "lucide-react";
import {
  setIdAction,
  setRoleAction,
  logoutAction,
} from "../../redux/actions/auth";

function NavBar() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const orders = useSelector((state) => state.orders.orders);
  const userId = useSelector((state) => state.user_id);

  const userOrders = orders[userId] || [];

  let links = [
    { name: "home", link: "/" },
    { name: "best selling", link: "/best-selling" },
    { name: "our products", link: "/products" },
    { name: "about us", link: "/about" },
    { name: "contact us", link: "/contact" },
    isLoggedIn !== true
      ? { name: "login", link: "/login" }
      : { name: "logout", link: "/" },
  ];

  let [open, setOpen] = useState(false);

  const isOpen = open ? "open" : "";

  const logout = async () => {
    window.location = "/";
    localStorage.removeItem("token");
    dispatch(setRoleAction(""));
    dispatch(setIdAction(""));
    dispatch(logoutAction(""));
  };

  return (
    <div className="h-max relative bg-white md:flex md:flex-row md:items-center md:justify-around gap-4 md:w-full md:pt-3 ssm:pt-2 font-normal md:gap-1 md:px-6 ssm:flex ssm:flex-col ssm:items-start ssm:px-8 ssm:gap-1 ssm:justify-center">
      <div className="logo flex justify-center items-center md:ml-0 ssm:ml-[2rem]">
        <a href="/">
          <img
            src={Logo}
            alt="logo"
            className="text-main lg:w-20 text-center p-2 text-18 hover:cursor-pointer md:w-16 ssm:w-12"
          />
        </a>
      </div>
      <div
        className={`lg:block lg:text-18 lg:w-640 flex justify-center items-center md:block md:text-16 ssm:text-10 md:w-500 ssm:w-full p-0`}>
        <ul
          className={`${
            open ? `menu ${isOpen}` : "ssm:hidden"
          } md:flex md:pr-0 md:justify-around md:flex-row w-full ssm:z-1 z-[1] capitalize ssm:flex ssm:flex-col ssm:items-end md:static ssm:pr-12 transition-all duration-100 ease-in ssm:opacity-100 opacity-0`}>
          {links.map((link, index) => (
            <li key={link.name} className="ssm:pt-2.5 md:pt-0">
              {/* {link.name !== "search" ? ( */}
              <a
                href={link.link}
                style={{ animationDelay: `0.${index + 1}s` }}
                onClick={link.name === "logout" ? logout : () => {}}
                className={`costum-list ${
                  open ? "open" : ""
                } list sm:text-16 ssm:text-14 cursor-pointer ${
                  open
                    ? `appear text-white opacity-1 hover:text-secondary`
                    : "md:text-dark"
                } md:${link.name === "login" ? "hidden" : "block"} md:${
                  link.name === "logout" ? "hidden" : "block"
                }`}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="btns md:static flex justify-between items-center md:gap-2 w-max ssm:gap-2 ssm:absolute ssm:right-8">
        <div className="">
          {isLoggedIn !== true ? (
            <button
              onClick={() => (window.location = "/login")}
              className="flex items-center justify-center mr-1 outline-none ssm:hidden md:w-[24px] md:block">
              <LogIn
                size={20}
                strokeWidth={1}
                className="hover:text-main text-dark"
              />
            </button>
          ) : (
            <button
              onClick={logout}
              className="flex items-center justify-center mr-1 outline-none ssm:hidden md:w-[24px] md:block">
              <LogOut
                size={20}
                strokeWidth={1}
                className="hover:text-main text-dark"
              />
            </button>
          )}
        </div>

        {/* {inputContent} */}
        <div className="relative lg:w-6 md:w-5 ssm:w-12 ssm:mr-0 md:mr-0">
          <button
            className="hover:cursor-pointer w-full flex items-center justify-center"
            onClick={() => {
              if (isLoggedIn) {
                window.location = "/basket";
              } else {
                window.location = "/login";
              }
            }}>
            <div className={`${open ? "mr-14" : ""}`}>
              <ShoppingCart
                size={20}
                strokeWidth={1}
                className="hover:text-main text-dark"
              />
            </div>
          </button>
          {userOrders.length > 0 && (
            <div className="cursor-pointer length text-white w-4 text-center text-8 border border-red bg-red rounded-full absolute bottom-3 left-3 md:p-1 ssm:p-1">
              <span className="">{userOrders.length}</span>
            </div>
          )}
        </div>

        <div className="md:hidden">
          <button
            className={`relative group flex items-center outline-none burger w-10 h-10 ${
              open ? "mr-8 mt-1" : ""
            } ${isOpen}`}
            onClick={() => setOpen(!open)}>
            <div
              className={`relative flex items-center justify-center w-5 h-5 transform transition-all bg-none duration-200`}>
              <div
                className={`flex flex-col justify-between w-[15px] h-[15px] transform transition-all duration-300 ${
                  open ? "group-focus:-rotate-[45deg] origin-center" : ""
                }`}>
                <div
                  className={`bg-main h-[2px] w-1/2 rounded transform transition-all duration-300 ${
                    open
                      ? `bg-white group-focus:-rotate-90 group-focus:h-[1px] origin-right delay-75 group-focus:-translate-y-[1px] ${open}`
                      : ""
                  }`}></div>
                <div
                  className={`h-[1px] rounded ${
                    open ? "bg-white" : "bg-main"
                  }`}></div>
                <div
                  className={`bg-main h-[2px] w-1/2 rounded self-end transform transition-all duration-300 ${
                    open
                      ? "bg-white group-focus:-rotate-90 group-focus:h-[1px] origin-left delay-75 group-focus:translate-y-[1px]"
                      : ""
                  }`}></div>
              </div>
            </div>
          </button>
          <div className={`background ${isOpen}`}></div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
