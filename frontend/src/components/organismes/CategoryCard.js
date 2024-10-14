import React from "react";
import { getItemsByCategory } from "../../services/itemsServices";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryItems } from "../../redux/actions/items";

function CategoryCard({ name, id }) {
  const isBestSellingPage = window.location.href.includes("best-selling");
  const dispatch = useDispatch();
  const allProducts = useSelector((state) =>
    isBestSellingPage ? state.bestSellingItems : state.newestItems
  );

  const categoryItems = async () => {
    if (id === "all") {
      dispatch(setCategoryItems(allProducts));
    } else {
      const type = isBestSellingPage ? "best-selling" : "all";
      getItemsByCategory(id, type).then((result) => {
        dispatch(setCategoryItems(result));
      });
    }
  };

  return (
    <div
      onClick={categoryItems}
      className="flex text-14 border border-gray-100 py-2 px-3 rounded-full bg-white text-main hover:bg-main hover:text-white cursor-pointer hover:shadow-md transition-all ease-in-out duration-300">
      <span className="">{name}</span>
    </div>
  );
}

export default CategoryCard;
