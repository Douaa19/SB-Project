import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../components/layout/Header";
import PresentationCards from "../components/layout/PresentationCards";
import SectionCards from "../components/layout/SectionCards";
import Footer from "../components/layout/Footer";
import { loadMoreItems } from "../redux/actions/items";

function Home() {
  const dispatch = useDispatch();
  const bestSellingItems = useSelector((state) => state.bestSellingItems);
  const newestItems = useSelector((state) => state.newestItems);
  const limit = useSelector((state) => state.loadMoreItems.limit);

  const [displayLimit, setDisplayLimit] = useState(limit);

  useEffect(() => {
    setDisplayLimit(limit);
  }, [limit]);

  return (
    <div>
      <h1>test deployement</h1>
      <Header />
      <PresentationCards />
      <SectionCards
        items={bestSellingItems}
        title="best selling"
        buttonText="View more"
        page="best-selling"
        limit={displayLimit}
        transition={false}
      />
      <SectionCards
        items={newestItems}
        title="new products"
        buttonText="View more"
        page="products"
        limit={displayLimit}
        transition={false}
      />
      <Footer />
    </div>
  );
}

export default Home;
