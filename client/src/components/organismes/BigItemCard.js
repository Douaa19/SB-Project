import React, { useEffect, useState } from "react";
import Slider from "react-slick";

function BigItemCard({ url, item }) {
  const [images, setImages] = useState([]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: null,
    prevArrow: null,
    useTransform: true,
  };
  console.log(item.color);

  useEffect(() => {
    const fetchItemImages = async () => {
      try {
        const response = await fetch(
          `http://localhost:8008/api/items/${item._id}/images`
        );
        const data = await response.json();

        setImages(data.images);
      } catch (error) {
        console.error("Error fetching item images", error);
      }
    };

    fetchItemImages();
  }, []);

  return (
    <div className="lg:py-8 ssm:py-6 sm:px-10 ssm:px-6">
      <div className="flex flex-col gap-3">
        <div className="capitalize text-16">
          <p>
            <a href="/" className="hover:underline hover:text-main">
              home
            </a>{" "}
            /{" "}
            <a
              href={`/${url.slice(22, -30)}`}
              className="hover:underline hover:text-main">
              {url.slice(22, -30)}
            </a>{" "}
            / <span className="text-main">{item.title}</span>
          </p>
        </div>
        <div className="flex justify-between items-center gap-16">
          <div className="flex justify-start w-1/2">
            <div className="w-full">
              {item.images.length > 0 ? (
                <>
                  <Slider {...settings}>
                    {images.map((imageData, index) => (
                      <div className="w-full max-h-[500px]">
                        <img
                          key={index}
                          src={`data:image/png;base64,${imageData}`}
                          alt="item_img"
                        />
                      </div>
                    ))}
                  </Slider>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="flex justify-start w-full">
            <div className="text-start">
              <div className="">
                <h3>{item.title}</h3>
                <span>{item.price}</span>
              </div>
              <div className="">
                <p>{item.description}</p>
                <span>{item.size}</span>
                <div
                  className={`border h-4 w-4 rounded-full ${
                    item.color === "black"
                      ? "bg-dark"
                      : item.color === "white"
                      ? "bg-white"
                      : "bg-main"
                  }`}></div>
                {/* <div className="">
                  {item.colors.map((color, index) => (
                    <div>{color}</div>
                  ))}
                </div> */}
              </div>
              <div className="flex flex-col gap-4 mt-56">
                <button className="border border-main font-bold text-18 hover:bg-main hover:text-white text-main rounded-md py-3 capitalize">
                  add to card
                </button>
                <button className="border border-main font-bold text-18 hover:bg-white hover:text-main bg-main text-white rounded-md py-3 capitalize">
                  buy now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BigItemCard;
