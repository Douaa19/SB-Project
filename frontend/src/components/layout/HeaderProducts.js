import React, { useEffect, useState } from "react";
import Input from "../atoms/Input";
import CardGrid from "../templates/CardGrid";
import Search from "../../assets/icons/search-svgrepo-com.svg";
import { PageTitle } from "../atoms";
import { useDispatch, useSelector } from "react-redux";
import { setSearchResults } from "../../redux/actions/items";
import { Package, Star } from "lucide-react";

function HeaderProducts({ title, categories }) {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const allItems = useSelector((state) => state.newestItems);

  const updatedCategories = [{ _id: "all", name: "All" }, ...categories];

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
    <div className="ssm:px-4 sm:px:0">
      <PageTitle
        title={title}
        icon={
          title === "best selling" ? <Star size={32} /> : <Package size={32} />
        }
        colorIcon="yellow-500"
      />
      <div className="h-full flex md:justify-between md:items-start md:flex-row md:gap-4 ssm:flex-col ssm:gap-4 sm:pt-4 sm:pb-2 ssm:py-4 mt-6">
        <CardGrid type="category" categories={updatedCategories} />
        <div className="flex md:justify-end ssm:justify-end items-start h-full md:my-4 ssm:my-0">
          <Input
            className="border border-gray-100 rounded-5 lg:text-14 px-3 py-2 outline-none ssm:text-12 ssm:w-[11rem] text-main"
            placeHolder="search..."
            rightIcon={Search}
            name="search"
            classIcon="lg:w-5 hover:cursor-pointer absolute lg:left-38 top-[0.35rem] ssm:left-[9.5rem] ssm:w-4"
            value={searchQuery}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}

export default HeaderProducts;
