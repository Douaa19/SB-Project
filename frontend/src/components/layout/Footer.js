import React from "react";
import Logo from "../../assets/images/big-logo-sabaembroidery.svg";
import { Phone, Mail, Facebook, Instagram, Pin } from "lucide-react";
import FooterBg from "../../assets/images/footer-bg.svg";
import { motion } from "framer-motion";

function Footer() {
  return (
    <div
      className="w-full relative bottom-0 left-0 mt-16 bg-main lg:py-8 ssm:py-6 lg:px-28 ssm:px-16 h-max bg-cover bg-repeat"
      style={{ backgroundImage: `url(${FooterBg})` }}>
      <div className="flex justify-between flex-row items-start mt-4">
        <div className="w-1/2 mb-4 mx-0 flex items-start">
          <a href="/">
            <img src={Logo} alt="logo" className="md:w-60 ssm:w-36" />
          </a>
        </div>
        <div className="flex justify-between flex-row w-full pt-4 mb-6 gap-2 ssm:flex-col-reverse">
          <div className="flex lg:justify-between items-start gap-2 lg:w-full md:w-full ssm:justify-between h-auto">
            <div className="">
              <h6 className="md:text-xl ssm:text-lg capitalize pb-4 font-bold text-gray-100">
                main menu
              </h6>
              <ul className="text-md text-gray-400">
                <motion.li
                  whileHover={{ x: 8, color: "#f3f4f6" }} // Moves right & changes color
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="pb-2 capitalize cursor-pointer">
                  <a href="/best-selling">best selling</a>
                </motion.li>
                <motion.li
                  whileHover={{ x: 8, color: "#f3f4f6" }} // Moves right & changes color
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="pb-2 capitalize cursor-pointer">
                  <a href="/products">newest products</a>
                </motion.li>
              </ul>
            </div>
            <div className="">
              <h6 className="md:text-xl ssm:text-lg capitalize pb-4 font-bold text-gray-100">
                helpful informations
              </h6>
              <ul className="text-md text-gray-400">
                <motion.li
                  whileHover={{ x: 8, color: "#f3f4f6" }} // Moves right & changes color
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="pb-2 capitalize cursor-pointer">
                  <a href="/about">about us</a>
                </motion.li>
                <motion.li
                  whileHover={{ x: 8, color: "#f3f4f6" }} // Moves right & changes color
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="pb-2 capitalize cursor-pointer">
                  <a href="/contact">contact us</a>
                </motion.li>
              </ul>
            </div>
            <div className="flex flex-col justify-start items-start md:w-fit ssm:w-1/2 ssm:mt-4 lg:mt-0">
              <ul className="text-md text-gray-400">
                <li className="pb-2">
                  <div className="flex items-center gap-2">
                    <Phone size={20} className="" strokeWidth={1} />
                    <span>+212634242755</span>
                  </div>
                </li>
                <li className="pb-2">
                  <div className="flex items-center gap-2">
                    <Mail size={20} className="" strokeWidth={1} />
                    <span>contact@sabaembroidery.com</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-full flex flex-col justify-between mt-6">
        <div className="flex justify-end items-center gap-5">
          <a
            href="https://www.facebook.com/p/Embroidery-Saba-100087891292627/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center flex-row-reverse gap-1 border border-gray-400 p-3 rounded-full text-gray-400 hover:text-white hover:border-white">
            <Facebook strokeWidth={1} size={20} className="" />
          </a>
          <a
            href="https://www.instagram.com/embroiderysaba?igsh=NGVhN2U2NjQ0Yg=="
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center flex-row-reverse gap-1 border border-gray-400 p-3 rounded-full text-gray-400 hover:text-white hover:border-white">
            <Instagram strokeWidth={1} size={20} className="" />
          </a>
          <a
            href="https://www.pinterest.com/sabaembroidery/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center flex-row-reverse gap-1 border border-gray-400 p-3 rounded-full text-gray-400 hover:text-white hover:border-white">
            <Pin strokeWidth={1} size={20} className="" />
          </a>
        </div>
        <div className="h-[1px] bg-gray-400 w-full rounded-full mb-4 mt-6"></div>
        <div className="text-start w-full">
          <span className="text-gray-400 text-md">
            Copyright © 2025 Saba Embroidery
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
