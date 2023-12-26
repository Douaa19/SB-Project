import React from "react";

function CategoryCard({ name, id }) {
  return (
    <div
      onClick=""
      className="w-24 bg-white border-main border-2 rounded-full h-24 flex justify-center items-center cursor-pointer hover:shadow-md">
      {name}
    </div>
  );
}

export default CategoryCard;
