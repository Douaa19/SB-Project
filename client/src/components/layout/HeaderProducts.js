import React, { useState } from "react";
import Input from "../atoms/Input";
import CardGrid from "../templates/CardGrid";
import Search from "../../assets/icons/search-svgrepo-com.svg";
import { PageTitle } from "../atoms";

function HeaderProducts({ title, categories }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = () => {
    if (searchValue.length > 0) {
      console.log(searchValue);
    }
  };

  return (
    <div className="">
      <PageTitle
        title={title}
        className="capitalize md:text-32 ssm:text-24 font-extrabold text-main text-start md:mt-8 ssm:mt-4"
      />
      <div className="flex md:justify-between md:items-center md:flex-row md:gap-4 ssm:flex-col-reverse ssm:gap-2 sm:py-6 ssm:py-4">
        <CardGrid type="category" categories={categories} />
        <Input
          className="border rounded-5 border-main lg:text-14 px-3 py-2 outline-none md:block ssm:text-12 ssm:w-[11rem]"
          placeHolder="search..."
          rightIcon={Search}
          name="search"
          classIcon="lg:w-5 hover:cursor-pointer absolute lg:left-38 ssm:left-36 ssm:w-4"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          onIconClick={handleSubmit}
        />
      </div>
    </div>
  );
}

export default HeaderProducts;
