import { combineReducers } from "redux";
import { bestSellingItemsReducer, newestItemsReducer } from "./itemsReducer";
import { categoriesReducer } from "./categoriesReducer";

const allReducers = combineReducers({
  bestSellingItems: bestSellingItemsReducer,
  newestItems: newestItemsReducer,
  categories: categoriesReducer,
});

export default allReducers;
