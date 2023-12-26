import React from "react";
import NavBar from "../components/layout/NavBar";
import HeaderProducts from "../components/layout/HeaderProducts";
import CardGrid from "../components/templates/CardGrid";
import Footer from "../components/layout/Footer";

function Products({ title, categories }) {
  return (
    <>
      <NavBar />
      <div className="lg:px-28 md:py-10">
        <HeaderProducts title={title} categories={categories} />
        <CardGrid />
      </div>
      <Footer />
    </>
  );
}

export default Products;
