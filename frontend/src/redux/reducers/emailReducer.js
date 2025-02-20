const emailReducer = (state = null, action) => {
  const { type } = action;
  switch (type) {
    case "SETEMAIL":
      return action.payload;

    default:
      return state;
  }
};

export default emailReducer;
