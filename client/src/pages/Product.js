import React from "react";
import { NavBar, Footer } from "../components/layout";
import { useParams } from "react-router";
import { BigItemCard } from "../components/organismes";
import { useSelector } from "react-redux";
import { getItemById } from "../redux/selectors/selectors";

function Product({}) {
  const params = useParams();
  const newestItems = useSelector((state) => state.newestItems);
  const url = window.location.href;
  const item = useSelector((state) => getItemById(newestItems, params.itemId));
  const items = useSelector((state) => state.bestSellingItems);

  //   filter items based on category_id
  const mismatchedCategories = items.filter(
    (i) => i.category_id !== item.category_id
  );

  return (
    <>
      <NavBar />
      <BigItemCard url={url} item={item} />
      <Footer />
    </>
  );
}

export default Product;
