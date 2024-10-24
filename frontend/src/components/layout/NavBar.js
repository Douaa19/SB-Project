import React, { useState, useEffect } from "react";
import Logo from "../../assets/images/small-logo-sabaembroidery.svg";
import { useDispatch, useSelector } from "react-redux";
import { ShoppingCart } from "lucide-react";
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

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <div
      className={`bg-light h-max fixed top-0 w-full z-[60] md:flex md:flex-row md:items-center md:justify-between gap-4 md:w-full font-normal md:gap-1 ssm:flex ssm:flex-col ssm:items-start ssm:gap-1 ssm:justify-center py-2 md:px-10 ssm:px-8 transition-colors duration-300`}>
      <div className="flex justify-center items-center md:ml-0 ssm:ml-[2rem]">
        <img
          src={Logo}
          alt="logo"
          className="text-main text-center hover:cursor-pointer md:w-16 ssm:w-12"
        />
      </div>
      <div
        className={`lg:block lg:text-16 lg:w-640 flex justify-center items-center md:block ssm:text-14 md:w-500 ssm:w-full p-0`}>
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
                } list cursor-pointer ${
                  open
                    ? `appear text-white opacity-1`
                    : "md:text-main hover:font-semibold"
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
        <div className="w-full">
          {isLoggedIn !== true ? (
            <button
              onClick={() => (window.location = "/login")}
              className={`mr-1 md:block ssm:hidden outline-none text-main lg:text-16 ssm:text-14 py-1 px-6 rounded-full hover:scale-110 transition-all ease-in-out border border-main hover:bg-main hover:text-light hover:duration-300 hover:shadow-md`}>
              <span className="">Log in</span>
            </button>
          ) : (
            <button
              onClick={logout}
              className={`mr-1 md:block ssm:hidden outline-none text-main lg:text-16 ssm:text-14 py-1 px-6 rounded-full hover:scale-110 transition-all ease-in-out border border-main hover:bg-main hover:text-light hover:duration-300 hover:shadow-md`}>
              <span className="">Log out</span>
            </button>
          )}
        </div>

        {/* {inputContent} */}
        <div className="relative lg:w-6 md:w-5 ssm:w-12 ssm:mr-0 md:mr-0">
          <button
            className="hover:cursor-pointer w-full flex items-center justify-center"
            onClick={() => {
              window.location = "/basket";
            }}>
            <div className={`${open ? "mr-[3.2rem]" : ""}`}>
              <ShoppingCart
                size={20}
                strokeWidth={1.2}
                className="text-main hover:text-light hover:bg-main hover:duration-300 hover:shadow-md w-7 h-7 p-2 hover:scale-110 border border-main rounded-full transition-all ease-in-out"
              />
            </div>
          </button>
          {userOrders.length > 0 && (
            <div className="cursor-pointer length text-white w-4 text-center text-8 border border-red bg-red rounded-full absolute bottom-4 left-4 p-1">
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
