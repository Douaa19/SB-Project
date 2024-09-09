const categoriesReducer = (state = {}, action) => {
  switch (action.type) {
    case "SETCATEGORIES":
      return action.payload;
    default:
      return state;
  }
};

export { categoriesReducer };
