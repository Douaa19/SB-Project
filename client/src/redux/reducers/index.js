import { combineReducers } from "redux";
import {
  bestSellingItemsReducer,
  newestItemsReducer,
  categoryItems,
  loadItems,
} from "./itemsReducer";
import { categoriesReducer } from "./categoriesReducer";
import contactDonePopup from "./contactDonePopupReducer";

const allReducers = combineReducers({
  bestSellingItems: bestSellingItemsReducer,
  newestItems: newestItemsReducer,
  categories: categoriesReducer,
  contactDonePopup,
  categoryItems,
  loadMoreItems: loadItems,
});

export default allReducers;
