import React, { useEffect, useState } from "react";
import Input from "../atoms/Input";
import CardGrid from "../templates/CardGrid";
import Search from "../../assets/icons/search-svgrepo-com.svg";
import { PageTitle } from "../atoms";
import { useDispatch, useSelector } from "react-redux";
import { setSearchResults } from "../../redux/actions/items";

function HeaderProducts({ title, categories }) {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const allItems = useSelector((state) => state.newestItems);

  useEffect(() => {
    dispatch(setSearchResults(""));
  }, [dispatch]);

  const handleSearch = (query) => {
    const filteredResults = allItems.filter((item) => {
      const { title, description } = item;
      const lowercaseQuery = query.toLowerCase();

      return (
        title.toLowerCase().includes(lowercaseQuery) ||
        description.toLowerCase().includes(lowercaseQuery) ||
        item.price.toString().includes(lowercaseQuery)
      );
    });
    if (searchQuery !== "") {
      dispatch(setSearchResults(filteredResults));
    } else {
      dispatch(setSearchResults(""));
    }
  };

  const handleChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    handleSearch(query);
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
          classIcon="lg:w-5 hover:cursor-pointer absolute lg:left-38 top-[0.35rem] ssm:left-36 ssm:w-4"
          value={searchQuery}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default HeaderProducts;
