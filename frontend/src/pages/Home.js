import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Header, Loading, ContactSection } from "../components/layout";
import PresentationCards from "../components/layout/PresentationCards";
import SectionCards from "../components/layout/SectionCards";
import Footer from "../components/layout/Footer";
import { Star, Package } from "lucide-react";

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
            title="best selling"
            buttonText="View more"
            page="best-selling"
            limit={displayLimit}
            transition={false}
            lineSize="24"
          />
          <SectionCards
            items={newestItems}
            title="our products"
            buttonText="View more"
            page="products"
            limit={displayLimit}
            transition={false}
            lineSize="24"
          />
          {/* Partners/Clients section */}
          <ContactSection />
          <Footer />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Home;
