import React, { useEffect, useState } from "react";
import NavBar from "../components/layout/NavBar";
import HeaderProducts from "../components/layout/HeaderProducts";
import CardGrid from "../components/templates/CardGrid";
import Footer from "../components/layout/Footer";
import { useDispatch, useSelector } from "react-redux";
import { loadMoreItems, setCategoryItems } from "../redux/actions/items";
import { Button } from "../components/atoms";
import { NoDataCard } from "../components/organismes";

function Products({ title }) {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const url = window.location.href;
  const bestSellingItems = useSelector((state) => state.bestSellingItems);
  const newestItems = useSelector((state) => state.newestItems);
  // get items's category
  let itemsCategory = useSelector((state) => state.categoryItems);
  // search reasults items
  const searchResults = useSelector((state) => state.searchResults);

  const limit = useSelector((state) => state.loadMoreItems.limit);
  const [displayLimit, setDisplayLimit] = useState(limit);

  useEffect(() => {
    setDisplayLimit(limit);
  }, [limit]);

  useEffect(() => {
    setDisplayLimit(10);

    dispatch(setCategoryItems(null));
  }, []);

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
          url={url.slice(22)}
          limit={displayLimit}
          transition={true}
        />
        <div className="flex justify-center items-center">
          <Button
            className="mt-8 w-1/5 outline-none border border-main font-bold md:text-16 ssm:text-14 hover:bg-main hover:text-white text-main rounded-md py-3 capitalize"
            text="load more"
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
      </>
    );
  }
  else {
    contentToDisplay = contentToDisplay = <NoDataCard />;
  }

  return (
    <>
      <NavBar />
      <div className="md:px-[4.5rem] lg:px-32 ssm:px-8 ssm:pt-4 w-full">
        <HeaderProducts title={title} categories={categories} type="category" />
        {contentToDisplay}
      </div>
      <Footer />
    </>
  );
}

export default Products;
