import { combineReducers } from "redux";
import {
  bestSellingItemsReducer,
  newestItemsReducer,
  categoryItems,
  loadItems,
  searchResults,
} from "./itemsReducer";
import { categoriesReducer } from "./categoriesReducer";
import contactDonePopup from "./contactDonePopupReducer";
import cities from "./citiesReducer";
import orders from "./ordersReducer";
import auth from "./authReducer";

const allReducers = combineReducers({
  bestSellingItems: bestSellingItemsReducer,
  newestItems: newestItemsReducer,
  categories: categoriesReducer,
  contactDonePopup,
  categoryItems,
  loadMoreItems: loadItems,
  cities,
  orders,
  searchResults,
  auth,
});

export default allReducers;
