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
      title: "about us",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet facilisis ipsum. Nunc rutrum feugiat tortor, quis vestibulum urna hendrerit ac. Pellentesque ut ultricies velit.",
      image: Image,
    },
    {
      title: "our paission for embroidery",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet facilisis ipsum. Nunc rutrum feugiat tortor, quis vestibulum urna hendrerit ac. Pellentesque ut ultricies velit.",
      image: Image3,
    },
    {
      title: "what we offer ?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet facilisis ipsum. Nunc rutrum feugiat tortor, quis vestibulum urna hendrerit ac. Pellentesque ut ultricies velit.",
      image: Image2,
    },
    {
      title: "our mession",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet facilisis ipsum. Nunc rutrum feugiat tortor, quis vestibulum urna hendrerit ac. Pellentesque ut ultricies velit.",
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
