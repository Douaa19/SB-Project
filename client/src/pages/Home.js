import React from "react";
import Header from "../components/layout/Header";
import PresentationCards from "../components/layout/PresentationCards";
import SectionCards from "../components/layout/SectionCards";
import Footer from "../components/layout/Footer";
import Product from "../assets/images/eniko-kis-KsLPTsYaqIQ-unsplash.jpg";

function Home({ bestSellingItems, newestItems }) {
  return (
    <div>
      <Header />
      <PresentationCards />
      <SectionCards
        items={bestSellingItems}
        title="best selling"
        buttonText="View more"
        page="bestSelling"
      />
      <SectionCards
        items={newestItems}
        title="new products"
        buttonText="View more"
        page="products"
      />
      <Footer />
    </div>
  );
}

export default Home;
