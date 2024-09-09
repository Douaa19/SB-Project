const resetOrderSent = (state = false, action) => {
  switch (action.type) {
    case "SETORDERSENT":
      return action.payload;
    default:
      return state;
  }
};

export default resetOrderSent;
