import React from "react";
import NavBar from "../components/layout/NavBar";
import HeaderProducts from "../components/layout/HeaderProducts";
import CardGrid from "../components/templates/CardGrid";
import Footer from "../components/layout/Footer";
import { useSelector } from "react-redux";

function Products({ title }) {
  const categories = useSelector((state) => state.categories);

  return (
    <>
      <NavBar />
      <div className="lg:px-28 md:py-10">
        <HeaderProducts title={title} categories={categories} type="category" />
        <CardGrid />
      </div>
      <Footer />
    </>
  );
}

export default Products;
