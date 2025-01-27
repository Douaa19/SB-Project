import React, { useState } from "react";
import { BACK_URL } from "../../config";

function ItemCard({ description, price, id, colors, url, title }) {
  const [hover, setHover] = useState(false);

  const openProduct = (item_id) => {
    window.location = `/${url}/item/${item_id}`;
  };

  const itemImg = `${BACK_URL}/items/${id}/image`;

  function getTextColor(bgColor) {
    // Convert hex color to RGB
    const hexToRgb = (hex) => {
      let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
          }
        : null;
    };

    const rgb = hexToRgb(bgColor);
    if (!rgb) return "#000";
    const brightness = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;

    return brightness > 128 ? "#000" : "#fff";
  }

  return (
    <div
      className={`bg-white h-full text-dark hover:cursor-pointer rounded-md overflow-hidden border border-gray-100 order-gray flex flex-col justify-start items-start gap-4 hover:shadow-lg transition-all duration-300 ease-in-out mx-2`}
      onClick={() => openProduct(id)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <div className="w-full relative mx-auto overflow-hidden">
        {!itemImg ? (
          <div className="w-full h-74 rounded-md animate-pulse bg-gray-100"></div>
        ) : (
          <img
            src={itemImg}
            alt=""
            className={`object-cover w-full h-[24rem] relative z-0 transition-all duration-300 ${
              hover ? "scale-110" : ""
            }`}
          />
        )}
      </div>
      <div className="px-4 pt-2 pb-4 md:text-16 ssm:text-14 flex flex-col justify-start items-start gap-4">
        <span className="font-bold">{title}</span>
        <p className="font-normale">{description}</p>
        <div className="flex flex-row justify-between items-start w-full mb-2">
          <span className="font-bold">{price}DH</span>
          <div className="flex gap-2">
            {colors.map((color, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: color,
                  color: getTextColor(color),
                }}
                className={`w-5 h-5 font-normal text-14 py-1 px-2 border border-gray-100 rounded-full`}></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
