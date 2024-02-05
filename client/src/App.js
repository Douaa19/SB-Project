import React, { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { setBestSellingItems, setNewestItems } from "./redux/actions/items";
import { setCategories } from "./redux/actions/categoris";
import {
  getBestSellingProducts,
  getNewestItems,
} from "./services/itemsServices";
import { getCategories } from "./services/categoriesServices";
import { setCities } from "./redux/actions/cities";
import { cities } from "morocco-cities";

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
    dispatch(
      setCities(
        cities.map((city) => {
          return { label: city.name, value: city.iso3 };
        })
      )
    );
  }, []);

  return (
    <React.Fragment>
      <AppRoutes />
    </React.Fragment>
  );
}

export default App;
