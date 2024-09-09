import React from "react";
import NavBar from "../components/layout/NavBar";
import PageTitle from "../components/atoms/PageTitle";
import CardGrid from "../components/templates/CardGrid";
import Footer from "../components/layout/Footer";
import Image from "../assets/images/blue_view.jpg";
import Image1 from "../assets/images/cristina-gottardi-CSpjU6hYo_0-unsplash.jpg";
import Image2 from "../assets/images/kace-rodriguez-p3OzJuT_Dks-unsplash.jpg";
import Image3 from "../assets/images/matthew-mortimer-CLZpczBurGA-unsplash.jpg";

function About() {
  const aboutItems = [
    {
      title: "“Stitching stories, creating memories”",
      text: `Our slogan represents the focus and the interest on the details to create the beautiful embroidered products we can, to stitch a wonderful memory on your mind. Welcome to our store. We specialize in creating unique, handcrafted embroidered products that are made with love and care`,
      image: Image,
    },
    {
      title: "The passion for the art",
      text: "Passed down from mother to daughter for generations, this tradition is sustained by our love and appreciation for the art. We are driven to keep it alive by creating beautiful products that showcase its beauty.",
      image: Image3,
    },
    {
      title: "The quality commitment",
      text: "Quality is one of our greatest strengths. We believe our products should meet the highest standards, so we use the finest materials to create our embroidered items. We are immensely proud of our work, and we hope you will be just as proud to own one of our products.",
      image: Image2,
    },
    {
      title: "The sustainability devoteduess",
      text: "Our products are not only beautiful but also sustainable. We prioritize eco-friendly materials and methods whenever possible and support local communities by sourcing our materials from local suppliers.",
      image: Image1,
    },
    {
      title: "Our mission",
      text: "Our mission is to create beautiful, high-quality embroidered products that bring happiness and preserve unforgettable memories. We aim for our products to be cherished for generations.",
      image: Image1,
    },
    {
      title: "",
      text: "Thank you for visiting our store and we hope that you will find something here that speaks to your heart. If you have any questions or comments, please don’t hesitate to contact us",
      image: Image1,
    },
  ];

  return (
    <>
      <NavBar />
      <div className="flex flex-col w-full md:px-28 ssm:px-16 md:mt-8 ssm:mt-4 items-center md:gap-4 ssm:gap-2">
        <PageTitle
          title="about us"
          className="font-extrabold md:text-42 ssm:text-32 capitalize text-main"
        />
        <div className="">
          <CardGrid type="about" aboutItems={aboutItems} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
