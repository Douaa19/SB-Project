import React, { useEffect, useState } from "react";
import NavBar from "../components/layout/NavBar";
import HeaderProducts from "../components/layout/HeaderProducts";
import CardGrid from "../components/templates/CardGrid";
import Footer from "../components/layout/Footer";
import { useDispatch, useSelector } from "react-redux";
import { loadMoreItems } from "../redux/actions/items";
import { Button } from "../components/atoms";

function Products({ title }) {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const url = window.location.href;
  const bestSellingItems = useSelector((state) => state.bestSellingItems);
  const newestItems = useSelector((state) => state.newestItems);

  const limit = useSelector((state) => state.loadMoreItems.limit);
  const [displayLimit, setDisplayLimit] = useState(limit);
  console.log(limit);

  useEffect(() => {
    setDisplayLimit(limit);
  }, [limit]);

  useEffect(() => {
    setDisplayLimit(10);
  }, []);

  const handleLoadMore = () => {
    const newLimit = displayLimit + 10;

    dispatch(loadMoreItems(newLimit));

    setDisplayLimit(newLimit);
  };

  return (
    <>
      <NavBar />
      <div className="md:px-[4.5rem] lg:px-32 ssm:px-8 ssm:pt-4 w-full">
        <HeaderProducts title={title} categories={categories} type="category" />
        <CardGrid
          type="products"
          items={
            url.slice(22) === "best-selling" ? bestSellingItems : newestItems
          }
          url={url.slice(22)}
          limit={displayLimit}
        />
        <div className="flex justify-center items-center">
          <Button
            className="mt-8 w-1/5 outline-none border border-main font-bold md:text-16 ssm:text-14 hover:bg-main hover:text-white text-main rounded-md py-3 capitalize"
            text="load more"
            onClick={handleLoadMore}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Products;
