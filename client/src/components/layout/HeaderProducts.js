import React from "react";
import Input from "../atoms/Input";
import CardGrid from "../templates/CardGrid";
import Search from "../../assets/icons/search-svgrepo-com.svg";

function HeaderProducts({ title, categories }) {
  return (
    <div>
      <div className="capitalize sm:text-32 ssm:text-24 font-extrabold text-main text-start">
        {title}
      </div>
      <div className="flex justify-between items-center gap-4">
        <CardGrid type="category" categories={categories} />
        <Input
          className="border rounded-5 border-main lg:text-14 lg:block px-3 py-2 outline-none md:block md:text-12 ssm:hidden"
          placeHolder="search..."
          rightIcon={Search}
          name="search"
          classIcon="lg:w-5 hover:cursor-pointer absolute lg:left-40 md:left-36 md:w-4"
          // value={searchValue}
          // onChange={(e) => {
          //   setSearchValue(e.target.value);
          // }}
        />
      </div>
    </div>
  );
}

export default HeaderProducts;
