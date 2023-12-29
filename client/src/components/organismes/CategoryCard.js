import React from "react";

function CategoryCard({ name, id }) {
  return (
    <div
      onClick=""
      className="category-card w-24 border-main border-1 rounded-full h-24 flex justify-center text-center items-center cursor-pointer transform transition duration-500 hover:scale-110 text-white">
      <span className="leading-relaxed">{name}</span>
    </div>
  );
}

export default CategoryCard;
