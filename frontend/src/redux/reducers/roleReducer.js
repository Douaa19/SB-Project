const roleReducer = (state = null, action) => {
  const { type } = action;
  switch (type) {
    case "SETUSERROLE":
      return action.payload;

    default:
      return state;
  }
};

export default roleReducer;
