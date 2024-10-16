import React from "react";
import CategoryCard from "../organismes/CategoryCard";
import AboutCard from "../organismes/AboutCard";
import { ItemCard } from "../organismes";

function CardGrid({
  type,
  categories,
  items,
  aboutItems,
  url,
  limit,
  transition,
}) {
  return (
    <>
      {type === "category" ? (
        <div className="md:w-9/12 ssm:w-full my-4 flex items-center gap-2 flex-wrap">
          {categories?.map((c, key) => (
            <CategoryCard name={c.name} id={c._id} key={key} />
          ))}
        </div>
      ) : (
        <>
          {type === "products" ? (
            <>
              <div className="grid xl:grid-cols-3 sm:grid-cols-2 ssm:grid-cols-2 gap-6 mt-10 ssm:px-2 sm:px:0">
                {items?.slice(0, limit).map((item, key) => (
                  <ItemCard
                    description={item.description}
                    id={item._id}
                    price={item.price}
                    key={key}
                    url={url}
                    transition={transition}
                  />
                ))}
              </div>
            </>
          ) : (
            <>
              {aboutItems?.map((item, key) => (
                <AboutCard
                  key={key}
                  title={item.title}
                  text={item.text}
                  image={item.image}
                  reverse={key % 2 === 1}
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
