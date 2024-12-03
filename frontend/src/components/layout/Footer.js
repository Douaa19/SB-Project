import React from "react";
import Logo from "../../assets/images/big-logo-sabaembroidery.svg";
import { Phone, Mail, Facebook, Instagram, Pin } from "lucide-react";
import MultiS from "../../assets/images/multi-s.svg";

function Footer() {
  return (
    <div className="w-full relative bottom-0 left-0 mt-10 bg-main lg:py-8 ssm:py-6 lg:px-28 ssm:px-16 h-max">
      <div className="z-[-1] absolute top_0 left-0 bg-cover w-auto bg-repeat-x">
        <img src={MultiS} alt="Saba Embroidery logo" className="w-full" />
      </div>
      <div className="flex justify-between flex-col items-start">
        <div className="w-full mb-4 mx-0 flex items-center lg:justify-center ssm:justify-center">
          <a href="/">
            <img src={Logo} alt="logo" className="md:w-52 ssm:w-36" />
          </a>
        </div>
        <div className="flex lg:justify-between lg:flex-row w-full pt-4 mb-6 gap-2 ssm:flex-col-reverse">
          <div className="flex flex-col justify-start items-start md:w-fit ssm:w-1/2 ssm:mt-4 lg:mt-0">
            <ul className="md:text-14 ssm:text-12 flex flex-col h-max text-gray-400">
              <li className="pb-2">
                <div className="flex items-center gap-2">
                  <Phone size={20} className="" strokeWidth={1} />
                  <span>+212634242755</span>
                </div>
              </li>
              <li className="pb-2">
                <div className="flex items-center gap-2">
                  <Mail size={20} className="" strokeWidth={1} />
                  <span>embroidery.saba12@gmail.com</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex lg:justify-around items-center gap-2 lg:w-1/2 md:w-full ssm:justify-between">
            <div className="">
              <h6 className="md:text-18 ssm:text-16 capitalize pb-4 font-bold text-gray-100">
                main menu
              </h6>
              <ul className="text-14 text-gray-400">
                <li className="pb-2 capitalize hover:text-gray-100 hover:cursor-pointer">
                  <a href="/best-selling">best selling</a>
                </li>
                <li className="pb-2 capitalize hover:text-gray-100 hover:cursor-pointer">
                  <a href="/products">newest products</a>
                </li>
              </ul>
            </div>
            <div className="">
              <h6 className="md:text-18 ssm:text-16 capitalize pb-4 font-bold text-gray-100">
                helpful informations
              </h6>
              <ul className="text-14 text-gray-400">
                <li className="pb-2 capitalize hover:text-gray-100 hover:cursor-pointer">
                  <a href="/about">about us</a>
                </li>
                <li className="pb-2 capitalize hover:text-gray-100 hover:cursor-pointer">
                  <a href="/contact">contact us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-full flex flex-col justify-between">
        <div className="flex justify-center items-center gap-5 mb-4">
          <a
            href="https://www.facebook.com/p/Embroidery-Saba-100087891292627/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center flex-row-reverse gap-1 border border-gray-400 p-3 rounded-full text-gray-400 hover:text-gray-100">
            <Facebook strokeWidth={1} size={20} className="" />
          </a>
          <a
            href="https://www.instagram.com/embroiderysaba?igsh=NGVhN2U2NjQ0Yg=="
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center flex-row-reverse gap-1 border border-gray-400 p-3 rounded-full text-gray-400 hover:text-gray-100">
            <Instagram strokeWidth={1} size={20} className="" />
          </a>
          <a
            href="https://www.pinterest.com/sabaembroidery/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center flex-row-reverse gap-1 border border-gray-400 p-3 rounded-full text-gray-400 hover:text-gray-100">
            <Pin strokeWidth={1} size={20} className="" />
          </a>
        </div>
        <div className="h-[1px] bg-gray-400 w-full rounded-full mb-2"></div>
        <div className="text-center w-full">
          <span className="text-gray-400 md:text-12 ssm:text-10">
            @ 2024 Saba Embroidery
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
