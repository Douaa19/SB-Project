import React from "react";
import Header from "../components/layout/Header";
import PresentationCards from "../components/templates/PresentationCards";
import SectionCards from "../components/templates/SectionCards";
import Product from "../assets/images/eniko-kis-KsLPTsYaqIQ-unsplash.jpg";

function Home() {
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
    <div className="">
      <Header />
      <PresentationCards />
      <SectionCards
        items={bestSellingItems}
        title="best selling"
        buttonText="View more"
        page="bestSelling"
      />
      <SectionCards
        items={newProductsItems}
        title="new products"
        buttonText="View more"
        page="newProducts"
      />
    </div>
  );
}

export default Home;
