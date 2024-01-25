import React from "react";
import { NavBar, Footer } from "../components/layout";
import { useParams } from "react-router";
import { BigItemCard } from "../components/organismes";
import { useSelector } from "react-redux";
import { getItemById } from "../redux/selectors/selectors";

function Product({}) {
  const params = useParams();
  const bestItems = useSelector((state) => state.bestSellingItems);
  const newestItems = useSelector((state) => state.newestItems);
  const url = window.location.href;
  const bestSellingURL = url.includes("best-selling");
  const item = useSelector((state) =>
    getItemById(state.newestItems, params.itemId)
  );
  console.log(item);

  return (
    <>
      <NavBar />
      <BigItemCard itemId={params.itemId} url={url} />
      <Footer />
    </>
  );
}

export default Product;
