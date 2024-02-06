const ordersReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case "SETORDERS":
      return {
        ...state,
        orders: state.orders.concat(action.payload),
      };
    default:
      return state;
  }
};

export default ordersReducer;
