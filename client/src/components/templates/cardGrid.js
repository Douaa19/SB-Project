import React from "react";
import Slider from "react-slick";
import CategoryCard from "../organismes/CategoryCard";
import ItemCard from "../organismes/ItemCard";
import AboutCard from "../organismes/AboutCard";
import { useSelector } from "react-redux";

function CardGrid({ type, categories, items, aboutItems, url, limit }) {
  const categoryItems = useSelector((state) => state.categoryItems);
  // console.log(categoryItems);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    useTransform: true,
    pauseOnHover: true,
    rtl: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <>
      {type === "category" ? (
        <div className="md:w-9/12 ssm:w-full my-4">
          <Slider {...settings}>
            {categories.map((c, key) => (
              <div className="flex items-center justify-between w-1/2 py-2">
                <CategoryCard name={c.name} id={c._id} key={key} />
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        <>
          {type === "products" ? (
            <>
              <div className="grid xl:grid-cols-4 gap-6 mt-10 md:grid-cols-3 ssm:grid-cols-2">
                {items.slice(0, limit).map((item, key) => (
                  <ItemCard
                    description={item.description}
                    id={item._id}
                    price={item.price}
                    key={key}
                    url={url}
                  />
                ))}
              </div>
            </>
          ) : (
            <>
              {aboutItems.map((item, key) => (
                <AboutCard
                  title={item.title}
                  text={item.text}
                  image={item.image}
                />
              ))}
            </>
          )}
        </>
      )}
    </>
  );
}

export default CardGrid;
