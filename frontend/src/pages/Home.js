import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Header, Loading } from "../components/layout";
import PresentationCards from "../components/layout/PresentationCards";
import SectionCards from "../components/layout/SectionCards";
import Footer from "../components/layout/Footer";
import { Star } from "lucide-react";

function Home() {
  const bestSellingItems = useSelector((state) => state.bestSellingItems);
  const newestItems = useSelector((state) => state.newestItems);
  const limit = useSelector((state) => state.loadMoreItems.limit);
  const [loading, setLoading] = useState(false);

  const [displayLimit, setDisplayLimit] = useState(limit);

  useEffect(() => {
    setDisplayLimit(limit);
  }, [limit]);

  return (
    <>
      {loading === false ? (
        <>
          <Header setLoading={setLoading} />
          <PresentationCards />
          <SectionCards
            items={bestSellingItems}
            title="best selling products"
            buttonText="View more"
            page="best-selling"
            limit={displayLimit}
            transition={false}
            icon={<Star />}
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
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Home;
