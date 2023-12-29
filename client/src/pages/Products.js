import React from "react";
import NavBar from "../components/layout/NavBar";
import HeaderProducts from "../components/layout/HeaderProducts";
import CardGrid from "../components/templates/CardGrid";
import Footer from "../components/layout/Footer";
import { useSelector } from "react-redux";

function Products({ title }) {
  const categories = useSelector((state) => state.categories);
  const url = window.location.href;
  const bestSellingItems = useSelector((state) => state.bestSellingItems);
  const newestItems = useSelector((state) => state.newestItems);

  return (
    <>
      <NavBar />
      <div className="md:px-[4.5rem] lg:px-32 ssm:px-8 ssm:pt-4 w-full">
        <HeaderProducts title={title} categories={categories} type="category" />
        <CardGrid
          type="products"
          items={
            url.slice(22) === "best-selling" ? bestSellingItems : newestItems
          }
        />
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Products;
