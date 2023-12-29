import React from "react";
import CategoryCard from "../organismes/CategoryCard";
import ItemCard from "../organismes/ItemCard";

function CardGrid({ type, categories, items }) {
  return (
    <>
      {type === "category" ? (
        categories.map((category, key) => (
          <div className="flex items-center justify-between sm:pt-6 ssm:pt-4 w-1/2">
            <CategoryCard name={category.name} id={category._id} key={key} />
          </div>
        ))
      ) : (
        <div className="grid lg:grid-cols-4 gap-6 mt-10 md:grid-cols-3 sm:grid-cols-2">
          {items.map((item, key) => (
            <ItemCard
              description={items.description}
              id={item._id}
              price={item.price}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default CardGrid;
