import React, { useEffect, useState } from "react";
import NavBar from "../components/layout/NavBar";
import HeaderProducts from "../components/layout/HeaderProducts";
import CardGrid from "../components/templates/CardGrid";
import Footer from "../components/layout/Footer";
import { useDispatch, useSelector } from "react-redux";
import { loadMoreItems, setCategoryItems } from "../redux/actions/items";
import { Button } from "../components/atoms";
import { NoDataCard } from "../components/organismes";
import { motion } from "framer-motion";

function Products({ title }) {
  const dispatch = useDispatch();
  let categories = useSelector((state) => state.categories);
  const location = window.location.href;
  const bestSellingItems = useSelector((state) => state.bestSellingItems);
  const newestItems = useSelector((state) => state.newestItems);
  // get items's category
  let itemsCategory = useSelector((state) => state.categoryItems);
  // search reasults items
  const searchResults = useSelector((state) => state.searchResults);

  const limit = useSelector((state) => state.loadMoreItems.limit);
  const [displayLimit, setDisplayLimit] = useState(limit);
  const url = location.includes("best-selling") ? "best-selling" : "products";

  useEffect(() => {
    setDisplayLimit(limit);
  }, [limit]);

  useEffect(() => {
    setDisplayLimit(10);

    dispatch(setCategoryItems(null));
  }, [dispatch]);

  const handleLoadMore = () => {
    const newLimit = displayLimit + 10;

    dispatch(loadMoreItems(newLimit));

    setDisplayLimit(newLimit);
  };

  let contentToDisplay;

  if (searchResults.length > 0) {
    contentToDisplay = (
      <>
        <CardGrid
          type="products"
          items={searchResults}
          url={url}
          limit={displayLimit}
          transition={true}
        />
        <div className="mt-10 flex justify-center items-center">
          <Button
            className="capitalize relative flex px-6 py-3 items-center justify-center overflow-hidden bg-main md:text-16 ssm:text-14 font-medium rounded-md text-white shadow-md transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-main hover:shadow-main hover:before:border-[25px]"
            text="load more"
            textClass="relative z-10"
            onClick={handleLoadMore}
          />
        </div>
      </>
    );
  } else if (itemsCategory != null && itemsCategory.length > 0) {
    contentToDisplay = (
      <>
        <CardGrid
          type="products"
          items={itemsCategory}
          url={url}
          limit={displayLimit}
        />
        <div className="mt-10 flex justify-center items-center">
          <Button
            className="capitalize relative flex px-6 py-3 items-center justify-center overflow-hidden bg-main md:text-16 ssm:text-14 font-medium rounded-md text-white shadow-md transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-main hover:shadow-main hover:before:border-[25px]"
            text="load more"
            textClass="relative z-10"
            onClick={handleLoadMore}
          />
        </div>
      </>
    );
  } else if (itemsCategory === null && searchResults.length === 0) {
    contentToDisplay = (
      <>
        <CardGrid
          type="products"
          items={url === "best-selling" ? bestSellingItems : newestItems}
          url={url}
          limit={displayLimit}
          transition={true}
        />
        <div className="mt-10 flex justify-center items-center">
          <Button
            className="capitalize relative flex px-6 py-3 items-center justify-center overflow-hidden bg-main md:text-16 ssm:text-14 font-medium rounded-md text-white shadow-md transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-main hover:shadow-main hover:before:border-[25px]"
            text="load more"
            textClass="relative z-10"
            onClick={handleLoadMore}
          />
        </div>
      </>
    );
  } else if (searchResults.length === 0) {
    contentToDisplay = contentToDisplay = <NoDataCard />;
  } else {
    contentToDisplay = contentToDisplay = <NoDataCard />;
  }

  return (
    <>
      <NavBar />
      <div className="md:px-[4.5rem] lg:px-32 sm:px-4 ssm:pt-4 w-full mt-8">
        <HeaderProducts title={title} categories={categories} type="category" />
        {contentToDisplay}
      </div>
      <Footer />
    </>
  );
}

export default Products;
