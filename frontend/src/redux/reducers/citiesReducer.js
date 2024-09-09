const citiesReducer = (state = [], action) => {
  switch (action.type) {
    case "SETCITIES":
      return action.payload;
    default:
      return state;
  }
};

export default citiesReducer;
