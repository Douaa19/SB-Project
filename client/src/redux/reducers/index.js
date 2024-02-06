import { combineReducers } from "redux";
import {
  bestSellingItemsReducer,
  newestItemsReducer,
  categoryItems,
  loadItems,
} from "./itemsReducer";
import { categoriesReducer } from "./categoriesReducer";
import contactDonePopup from "./contactDonePopupReducer";
import cities from "./citiesReducer";
import orders from "./ordersReducer";

const allReducers = combineReducers({
  bestSellingItems: bestSellingItemsReducer,
  newestItems: newestItemsReducer,
  categories: categoriesReducer,
  contactDonePopup,
  categoryItems,
  loadMoreItems: loadItems,
  cities,
  orders,
});

export default allReducers;
