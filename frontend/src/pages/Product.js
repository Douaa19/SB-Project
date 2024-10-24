import React from "react";
import { NavBar, Footer } from "../components/layout";
import { useParams } from "react-router";
import { BigItemCard } from "../components/organismes";
import { useSelector } from "react-redux";
import { getItemById } from "../redux/selectors/selectors";
import { SectionCards } from "../components/layout";

function Product() {
  const params = useParams();
  const newestItems = useSelector((state) => state.newestItems);
  const location = window.location.href;
  const item = useSelector((state) => getItemById(newestItems, params.itemId));
  const items = useSelector((state) => state.bestSellingItems);
  const url = location.includes("best-selling") ? "best-selling" : "products";

  // filter items based on category_id
  const mismatchedCategories = items.filter(
    (i) => i.category_id._id !== item.category_id._id
  );

  return (
    <>
      <NavBar />
      <BigItemCard url={url} item={item} />
      <div className="mt-10">
        <SectionCards
          title="You might also like"
          items={mismatchedCategories}
          page={url}
          buttonText="View More"
        />
      </div>
      <Footer />
    </>
  );
}

export default Product;
