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

export { bestSellingItemsReducer, newestItemsReducer };
