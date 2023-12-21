import React from "react";
import Logo from "../../assets/icons/Logo_White.png";
import FacebookIcon from "../../assets/icons/face-icon-png.png";
import InstagramIcon from "../../assets/icons/instagram-icone.png";
import PinterestIcon from "../../assets/icons/pinterest-icon-svg.png";

function Footer() {
  return (
    <div className="mt-10 bg-dark py-8 px-28 h-max text-white">
      <div className="flex justify-between flex-col items-start">
        <div className="w-20 mb-4">
          <img src={Logo} alt="logo" className="" />
        </div>
        <div className="flex justify-between w-full pt-4 mb-6">
          <div className="flex flex-col justify-start items-start w-fit">
            <ul className="sm:text-14 ssm:text-12 flex flex-col h-max">
              <li className="pb-2">+212657453213</li>
              <li className="pb-2">
                Qu Saada Rue Abdessamad El Kanfaoui N° 12
              </li>
              <li className="pb-2">saba.larif97@gmail.com</li>
            </ul>
          </div>
          <div className="">
            <h6 className="text-18 capitalize pb-4">main menu</h6>
            <ul className="sm:text-14 ssm:text-12">
              <li className="pb-2 capitalize hover:text-main hover:cursor-pointer">
                <a href="/bestSelling">best selling</a>
              </li>
              <li className="pb-2 capitalize hover:text-main hover:cursor-pointer">
                <a href="/products">newest products</a>
              </li>
            </ul>
          </div>
          <div className="">
            <h6 className="text-18 capitalize pb-4">helpful informations</h6>
            <ul>
              <li className="pb-2 capitalize hover:text-main hover:cursor-pointer">
                <a href="/aboutUs">about us</a>
              </li>
              <li className="pb-2 capitalize hover:text-main hover:cursor-pointer">
                <a href="/contactUs">contact us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="h-24 w-full flex flex-col justify-between">
        <div className="flex justify-between items-center w-28 gap-4">
          <a href="https://www.facebook.com">
            <img
              src={FacebookIcon}
              className="hover:cursor-pointer"
              alt="facebook"
            />
          </a>
          <a href="https://www.instagram.com">
            <img
              src={InstagramIcon}
              className="hover:cursor-pointer"
              alt="pintrest"
            />
          </a>
          <a href="https://www.pinterest.com">
            <img
              src={PinterestIcon}
              className="hover:cursor-pointer"
              alt="instagram"
            />
          </a>
        </div>
        <div className="h-[1px] bg-main w-full rounded-full"></div>
        <div className="">
          <span className="text-white sm:text-12 ssm:text-10 text-start">
            @ 2023 Saba Embroidery
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
