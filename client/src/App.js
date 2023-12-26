import React, { useEffect, useState } from "react";
import AppRoutes from "./routes/AppRoutes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  getBestSellingProducts,
  getNewestItems,
} from "./services/itemsServices";

function App() {
  const [bestSellingItems, setBestSellingItems] = useState({});
  const [newestItems, setNewestItems] = useState({});
  const [bestSelling, setBestSelling] = useState({});
  const [categories, setCategories] = useState({});
  // get best selling products
  useEffect(() => {
    getBestSellingProducts().then((result) => {
      setBestSellingItems(result);
    });
    getNewestItems().then((result) => {
      setNewestItems(result);
    });
  }, []);

  return (
    <React.Fragment>
      <AppRoutes
        bestSellingItems={bestSellingItems}
        newestItems={newestItems}
        categories={categories}
      />
    </React.Fragment>
  );
}

export default App;
