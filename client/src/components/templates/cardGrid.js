import React from "react";
import CategoryCard from "../organismes/CategoryCard";

function CardGrid({ type, categories }) {
  return (
    <div className="flex items-center justify-between sm:pt-6 ssm:pt-4 w-1/2">
      {type === "category" && (
        <>
          {categories.length > 0 && (
            <>
              {categories.map((category, key) => (
                <CategoryCard
                  name={category.name}
                  id={category._id}
                  key={key}
                />
              ))}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default CardGrid;
