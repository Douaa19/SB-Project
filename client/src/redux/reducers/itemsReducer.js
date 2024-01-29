const bestSellingItemsReducer = (state = {}, action) => {
  switch (action.type) {
    case "SETBESTSELLINGITEMS":
      return action.payload;
    default:
      return state;
  }
};

const newestItemsReducer = (state = {}, action) => {
  switch (action.type) {
    case "SETNEWESTITEMS":
      return action.payload;
    default:
      return state;
  }
};

const categoryItems = (state = {}, action) => {
  switch (action.type) {
    case "SETCATEGORYITEMS":
      return action.payload;
    default:
      return state;
  }
};

const initialState = {
  items: [],
  limit: 6,
};

const loadItems = (state = initialState, action) => {
  switch (action.type) {
    case "LOADITEMS":
      return {
        ...state,
        items: action.payload,
      };
    case "LOADMOREITEMS":
      return {
        ...state,
        limit: action.payload,
      };
    default:
      return state;
  }
};

export {
  bestSellingItemsReducer,
  newestItemsReducer,
  categoryItems,
  loadItems,
};
