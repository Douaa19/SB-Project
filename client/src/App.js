import React, { useEffect, useState } from "react";
import AppRoutes from "./routes/AppRoutes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getBestSellingProducts } from "./services/itemsServices";

function App() {
  const [bestSellingProducts, setBestSellingroducts] = useState({});
  // get best selling products
  useEffect(() => {
    getBestSellingProducts().then((result) => {
      setBestSellingroducts(result);
    });
  }, []);

  return (
    <React.Fragment>
      <AppRoutes bestSellingProducts={bestSellingProducts} />
    </React.Fragment>
  );
}

export default App;
