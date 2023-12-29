import React from "react";

function CategoryCard({ name, id }) {
  return (
    <div
      onClick=""
      className="category-card lg:w-24 md:w-20 ssm:w-16 rounded-full lg:h-24 md:h-20 ssm:h-16 flex justify-center text-center items-center cursor-pointer transform transition duration-500 hover:scale-110 text-white">
      <span className="transition-all duration-300 ease-in leading-relaxed md:text-16 ssm:text-12 opacity-0 hover:opacity-80 lg:w-24 md:w-20 ssm:w-16 lg:h-24 md:h-20 ssm:h-16 flex items-center justify-center">
        {name}
      </span>
      <span className="hidden">{id}</span>
    </div>
  );
}

export default CategoryCard;
