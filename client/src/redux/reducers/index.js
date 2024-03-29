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
import authReducer from "./authReducer";
import roleReducer from "./roleReducer";
import idUserReducer from "./idUserReducer";

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
  auth: authReducer,
  role: roleReducer,
  user_id: idUserReducer,
});

export default allReducers;
