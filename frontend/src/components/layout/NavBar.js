import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/images/small-logo-sabaembroidery.svg";
import { useDispatch, useSelector } from "react-redux";
import { ShoppingCart, UserRound } from "lucide-react";
import {
  setIdAction,
  setRoleAction,
  setEmailAction,
  logoutAction,
} from "../../redux/actions/auth";

function NavBar(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const orders = useSelector((state) => state.orders.orders);
  const userId = useSelector((state) => state.user_id);
  const guestOrders = JSON.parse(localStorage.getItem("guestOrders")) || [];

  const userOrders = orders[userId] || [];

  const allOrders = isLoggedIn ? userOrders : guestOrders;

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
    { name: "contact us", link: "/#contact" },
    isLoggedIn !== true
      ? { name: "login", link: "/login" }
      : { name: "logout", link: "/" },
  ];

  let [open, setOpen] = useState(false);

  const isOpen = open ? "open" : "";

  const logout = async () => {
    navigate("/");
    localStorage.removeItem("token");
    dispatch(setRoleAction(""));
    dispatch(setIdAction(""));
    dispatch(setEmailAction(""));
    dispatch(logoutAction(""));
    props.setLoading(true);

    setTimeout(() => {
      props.setLoading(false);
    }, 2000);
  };

  return (
    <div
      className={`bg-light h-max fixed top-0 w-full z-[60] md:flex md:flex-row md:items-center md:justify-between gap-4 md:w-full font-normal md:gap-1 ssm:flex ssm:flex-col ssm:items-start ssm:gap-1 ssm:justify-center py-2 md:px-10 ssm:px-8 transition-colors duration-300`}>
      <div className="flex justify-center items-center md:ml-0 ssm:ml-[2rem]">
        <a href="/">
          <img
            src={Logo}
            alt="logo"
            className="text-main text-center hover:cursor-pointer md:w-16 ssm:w-12"
          />
        </a>
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
        <div className="relative lg:w-10 md:w-8 ssm:w-12 ssm:mr-0 md:mr-0">
          <button
            className="hover:cursor-pointer flex items-center justify-center w-10 h-10"
            onClick={() => {
              window.location = "/basket";
            }}>
            <div className={`${open ? "mr-[3.2rem]" : ""}`}>
              <ShoppingCart
                size={18}
                strokeWidth={1.2}
                className="text-main hover:text-secondary hover:bg-main hover:duration-300 hover:shadow-md w-8 h-8 p-2 hover:scale-110 border border-main rounded-full transition-all ease-in-out"
              />
            </div>
          </button>
          {allOrders.length > 0 && (
            <div className="cursor-pointer length text-white w-4 text-center text-8 border border-red bg-red rounded-full absolute bottom-4 left-4 p-1">
              <span className="">{allOrders.length}</span>
            </div>
          )}
        </div>
        <div className="w-full flex justify-center items-center md:gap-2 ssm:gap-2">
          {isLoggedIn !== true ? (
            <button
              onClick={() => (window.location = "/login")}
              className={`mr-1 md:block ssm:hidden outline-none text-main lg:text-16 ssm:text-14 py-2 px-6 rounded-full hover:scale-110 transition-all ease-in-out border border-main hover:bg-main hover:text-secondary hover:duration-300 hover:shadow-md`}>
              <span className="">Log in</span>
            </button>
          ) : (
            <button
              onClick={logout}
              className={`mr-1 md:block ssm:hidden outline-none text-main lg:text-16 ssm:text-14 py-2 px-6 rounded-full hover:scale-110 transition-all ease-in-out border border-main hover:bg-main hover:text-secondary hover:duration-300 hover:shadow-md`}>
              <span className="">Log out</span>
            </button>
          )}
        </div>
        {isLoggedIn !== false && (
          <div className="relative group">
            <a href="/profile">
              <button className="flex items-center justify-center w-8 h-8 border border-main rounded-full text-main transition-all ease-in-out hover:bg-main hover:text-secondary hover:shadow-md hover:scale-110 duration-300">
                <UserRound size={18} strokeWidth={1.5} />
              </button>
            </a>
          </div>
        )}

        {/* {inputContent} */}

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
