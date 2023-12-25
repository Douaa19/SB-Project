import React from "react";
import Header from "../components/layout/Header";
import PresentationCards from "../components/layout/PresentationCards";
import SectionCards from "../components/layout/SectionCards";
import Footer from "../components/layout/Footer";
import Product from "../assets/images/eniko-kis-KsLPTsYaqIQ-unsplash.jpg";

function Home({ bestSellingProducts }) {
  const bestSellingItems = [
    {
      image: Product,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
      price: "25",
    },
    {
      image: Product,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
      price: "30",
    },
    {
      image: Product,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
      price: "32",
    },
    {
      image: Product,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
      price: "25",
    },
    {
      image: Product,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
      price: "30",
    },
    {
      image: Product,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
      price: "32",
    },
  ];
  const newProductsItems = [
    {
      image: Product,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
      price: "25",
    },
    {
      image: Product,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
      price: "30",
    },
    {
      image: Product,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
      price: "32",
    },
    {
      image: Product,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
      price: "25",
    },
    {
      image: Product,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
      price: "30",
    },
    {
      image: Product,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
      price: "32",
    },
  ];
  return (
    <div>
      <Header />
      <PresentationCards />
      <SectionCards
        items={bestSellingProducts}
        title="best selling"
        buttonText="View more"
        page="bestSelling"
      />
      <SectionCards
        items={newProductsItems}
        title="new products"
        buttonText="View more"
        page="products"
      />
      <Footer />
    </div>
  );
}

export default Home;