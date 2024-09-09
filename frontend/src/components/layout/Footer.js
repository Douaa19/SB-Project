import React from "react";
import Logo from "../../assets/images/big-logo-sabaembroidery.svg";
import FacebookIcon from "../../assets/icons/face-icon-png.png";
import InstagramIcon from "../../assets/icons/instagram-icone.png";
import PinterestIcon from "../../assets/icons/pinterest-icon-svg.png";
import { Phone, Mail } from "lucide-react"

function Footer() {
  return (
    <div className="mt-10 bg-blue lg:py-8 ssm:py-6 lg:px-28 ssm:px-16 h-max text-white">
      <div className="flex justify-between flex-col items-start">
        <div className="w-full mb-4 mx-0 flex items-center lg:justify-center ssm:justify-center">
          <a href="/">
            <img src={Logo} alt="logo" className="md:w-48 ssm:w-32" />
          </a>
        </div>
        <div className="flex lg:justify-between lg:flex-row w-full pt-4 mb-6 gap-2 ssm:flex-col-reverse">
          <div className="flex flex-col justify-start items-start md:w-fit ssm:w-1/2 ssm:mt-4 lg:mt-0">
            <ul className="md:text-14 ssm:text-12 flex flex-col h-max">
              <li className="pb-2">
                <div className="flex items-center gap-2">
                  <Phone size={20} className="text-secondary" strokeWidth={1} />
                  <span>+212634242755</span>
                </div>
              </li>
              <li className="pb-2">
                <div className="flex items-center gap-2">
                  <Mail size={20} className="text-secondary" strokeWidth={1} />
                  <span>embroidery.saba12@gmail.com</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex lg:justify-around items-center gap-2 lg:w-1/2 md:w-full ssm:justify-between">
            <div className="">
              <h6 className="md:text-18 ssm:text-14 capitalize pb-4 font-bold">
                main menu
              </h6>
              <ul className="md:text-14 ssm:text-12">
                <li className="pb-2 capitalize hover:text-secondary hover:cursor-pointer">
                  <a href="/best-selling">best selling</a>
                </li>
                <li className="pb-2 capitalize hover:text-secondary hover:cursor-pointer">
                  <a href="/products">newest products</a>
                </li>
              </ul>
            </div>
            <div className="">
              <h6 className="md:text-18 ssm:text-14 capitalize pb-4 font-bold">
                helpful informations
              </h6>
              <ul className="md:text-14 ssm:text-12">
                <li className="pb-2 capitalize hover:text-secondary hover:cursor-pointer">
                  <a href="/about">about us</a>
                </li>
                <li className="pb-2 capitalize hover:text-secondary hover:cursor-pointer">
                  <a href="/contact">contact us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:h-24 ssm:h-20 w-full flex flex-col justify-between">
        <div className="flex justify-between items-center lg:w-28 ssm:w-24 gap-4">
          <a
            href="https://www.facebook.com/p/Embroidery-Saba-100087891292627/"
            target="_blank">
            <img
              src={FacebookIcon}
              className="hover:cursor-pointer"
              alt="facebook"
            />
          </a>
          <a
            href="https://www.instagram.com/embroiderysaba?igsh=NGVhN2U2NjQ0Yg=="
            target="_blank">
            <img
              src={InstagramIcon}
              className="hover:cursor-pointer"
              alt="pintrest"
            />
          </a>
          <a href="https://www.pinterest.com/sabaembroidery/" target="_blank">
            <img
              src={PinterestIcon}
              className="hover:cursor-pointer"
              alt="instagram"
            />
          </a>
        </div>
        <div className="h-[1px] bg-main w-full rounded-full"></div>
        <div className="">
          <span className="text-white md:text-12 ssm:text-10 text-start">
            @ 2024 Saba Embroidery
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
