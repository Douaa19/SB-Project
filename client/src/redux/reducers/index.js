import { combineReducers } from "redux";
import { bestSellingItemsReducer, newestItemsReducer } from "./itemsReducer";

const allReducers = combineReducers({
  bestSellingItems: bestSellingItemsReducer,
  newestItems: newestItemsReducer,
});

export default allReducers;
