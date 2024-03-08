import React, { useState } from "react";
import Basket from "../../assets/icons/basket-svgrepo-com.svg";
import Search from "../../assets/icons/search-svgrepo-com.svg";
import Logo from "../../assets/icons/Logo_White.png";
import Input from "../atoms/Input";
import { useDispatch, useSelector } from "react-redux";
import { setSearchResults } from "../../redux/actions/items";

function NavBar() {
  const dispatch = useDispatch();
  const location = window.location.href;
  const [searchQuery, setSearchQuery] = useState("");
  const allItems = useSelector((state) => state.newestItems);
  const orders = useSelector((state) => state.orders.orders);

  let links = [
    { name: "home", link: "/" },
    { name: "best selling", link: "/best-selling" },
    { name: "our products", link: "/products" },
    { name: "about us", link: "/about" },
    { name: "contact us", link: "/contact" },
  ];

  let [open, setOpen] = useState(false);

  const isOpen = open ? "open" : "";
  console.log(open, isOpen);

  const handleSearch = () => {
    const queryString = String(searchQuery).trim();

    if (queryString !== "") {
      const lowercaseQuery = queryString.toLowerCase();
      const filteredResults = allItems.filter((item) => {
        const { title, description } = item;

        return (
          title.toLowerCase().includes(lowercaseQuery) ||
          description.toLowerCase().includes(lowercaseQuery) ||
          item.price.toString().includes(lowercaseQuery)
        );
      });
      dispatch(setSearchResults(filteredResults));
      window.location = "http://localhost:3000/products";
    }
  };

  return (
    <div className="h-max relative bg-white md:flex md:flex-row md:items-center md:justify-around gap-4 md:w-full md:pt-6 ssm:pt-2 font-normal md:gap-1 md:px-6 ssm:flex ssm:flex-col ssm:items-start ssm:px-8 ssm:gap-1 ssm:justify-center">
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
          } md:flex md:pr-0 md:justify-around md:flex-row w-full ssm:z-1 z-[1] capitalize ssm:flex ssm:flex-col ssm:items-end md:static ssm:pr-8 transition-all duration-100 ease-in ssm:opacity-100 opacity-0`}>
          {links.map((link, index) => (
            <li key={link.name} className="ssm:pt-2.5 md:pt-0">
              <a
                href={link.link}
                style={{ animationDelay: `0.${index + 1}s` }}
                className={`costum-list list sm:text-16 ssm:text-14 ${
                  open ? `appear text-white opacity-1` : "md:text-dark"
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
                classIcon="lg:w-5 hover:cursor-pointer absolute lg:left-40 pr-2 md:left-36 md:w-4 ssm:w-6"
                value={searchQuery}
                onChange={(e) => {
                  const query = e.target.value.toString();
                  setSearchQuery(query);
                }}
                onIconClick={() => handleSearch()}
              />
            </>
          )}
        <div className="relative lg:w-6 md:w-5 ssm:w-12 ssm:mr-2 md:mr-0">
          <img
            src={Basket}
            alt="basket"
            className="hover:cursor-pointer w-full"
            onClick={() => (window.location = "/basket")}
          />
          {orders.length > 0 && (
            <div className="length text-white w-4 text-center text-8 border border-red bg-red rounded-full absolute bottom-3 left-3 md:p-1 ssm:p-1">
              <span className="">{orders.length}</span>
            </div>
          )}
        </div>
        <div className="md:hidden">
          <button
            className={`relative group flex items-center outline-none burger w-10 h-10 ${isOpen}`}
            onClick={() => setOpen(!open)}>
            <div
              className={`relative flex items-center justify-center w-5 h-5 transform transition-all bg-none duration-200`}>
              <div
                className={`flex flex-col justify-between w-[15px] h-[15px] transform transition-all duration-300 ${
                  open ? "group-focus:-rotate-[45deg] origin-center" : ""
                }`}>
                <div
                  className={`bg-dark h-[2px] w-1/2 rounded transform transition-all duration-300 ${
                    open
                      ? `bg-white group-focus:-rotate-90 group-focus:h-[1px] origin-right delay-75 group-focus:-translate-y-[1px] ${open}`
                      : ""
                  }`}></div>
                <div
                  className={`h-[1px] rounded ${
                    open ? "bg-white" : "bg-dark"
                  }`}></div>
                <div
                  className={`bg-dark h-[2px] w-1/2 rounded self-end transform transition-all duration-300 ${
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
