import React, { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch } from "react-redux";
import { setBestSellingItems, setNewestItems } from "./redux/actions/items";
import { setCategories } from "./redux/actions/categoris";
import {
  getBestSellingProducts,
  getNewestItems,
} from "./services/itemsServices";
import { getCategories } from "./services/categoriesServices";

function App() {
  const dispatch = useDispatch();
  // get best selling products
  useEffect(() => {
    getBestSellingProducts().then((result) => {
      dispatch(setBestSellingItems(result));
    });
    getNewestItems().then((result) => {
      dispatch(setNewestItems(result));
    });
    getCategories().then((result) => {
      dispatch(setCategories(result));
    });
  }, []);

  return (
    <React.Fragment>
      <AppRoutes />
    </React.Fragment>
  );
}

export default App;
