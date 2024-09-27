import React from "react";
import { getItemsByCategory } from "../../services/itemsServices";
import { useDispatch} from "react-redux";
import { setCategoryItems } from "../../redux/actions/items";

function CategoryCard({ name, id }) {
  const location = window.location.href.slice(22);
  const dispatch = useDispatch();

  const categoryItems = async () => {
    const type = location === "best-selling" ? "best-selling" : "all";
    getItemsByCategory(id, type).then((result) => {
      dispatch(setCategoryItems(result));
    });
  };

  return (
    <div
      onClick={categoryItems}
      className="category-card bg-cover lg:w-24 md:w-20 ssm:w-16 rounded-full lg:h-24 md:h-20 ssm:h-16 flex justify-center text-center items-center cursor-pointer transform transition duration-500 hover:scale-110 text-main">
      <span className="transition-all duration-300 ease-in leading-relaxed md:text-16 ssm:text-12 opacity-0 hover:opacity-80 lg:w-24 md:w-20 ssm:w-16 lg:h-24 md:h-20 ssm:h-16 flex items-center justify-center">
        {name}
      </span>
    </div>
  );
}

export default CategoryCard;
