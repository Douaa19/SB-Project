import React from "react";
import NavBar from "../components/layout/NavBar";
import CardGrid from "../components/templates/CardGrid";
import Footer from "../components/layout/Footer";
import Image0 from "../assets/images/aboutus1.JPG";
import Image1 from "../assets/images/aboutus2.JPG";
import Image2 from "../assets/images/aboutus3.JPG";
import Image3 from "../assets/images/aboutus4.JPG";
import { PageTitle } from "../components/atoms";
import { Users } from "lucide-react";

function About() {
  const aboutItems = [
    {
      title: "“Stitching stories, creating memories”",
      text: `Our slogan represents the focus and the interest on the details to create the beautiful embroidered products we can, to stitch a wonderful memory on your mind. Welcome to our store. We specialize in creating unique, handcrafted embroidered products that are made with love and care`,
    },
    {
      title: "The passion for the art",
      text: "Passed down from mother to daughter for generations, this tradition is sustained by our love and appreciation for the art. We are driven to keep it alive by creating beautiful products that showcase its beauty.",
      image: Image0,
    },
    {
      title: "The quality commitment",
      text: "Quality is one of our greatest strengths. We believe our products should meet the highest standards, so we use the finest materials to create our embroidered items. We are immensely proud of our work, and we hope you will be just as proud to own one of our products.",
      image: Image1,
    },
    {
      title: "The sustainability devoteduess",
      text: "Our products are not only beautiful but also sustainable. We prioritize eco-friendly materials and methods whenever possible and support local communities by sourcing our materials from local suppliers.",
      image: Image2,
    },
    {
      title: "Our mission",
      text: "Our mission is to create beautiful, high-quality embroidered products that bring happiness and preserve unforgettable memories. We aim for our products to be cherished for generations.",
      image: Image3,
    },
    {
      title: "Thank you",
      text: `For visiting our store and we hope that you will find something here that speaks to your heart. If you have any questions or comments, please don’t hesitate to <a href="/contact" class="text-blue-500 underline">contact us</a>.`,
    },
  ];

  return (
    <>
      <NavBar />
      <div className="mt-24 mb-20 flex flex-col w-full md:px-28 ssm:px-16 items-center md:gap-4 ssm:gap-2">
        <PageTitle
          title="our mission"
          icon={<Users size={32} />}
          colorIcon="secondary"
        />
        <div className="flex flex-col items-center w-10/12">
          <CardGrid type="about" aboutItems={aboutItems} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
