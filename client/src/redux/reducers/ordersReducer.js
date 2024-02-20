const ordersReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case "SETORDERS":
      const newItem = action.payload;
      const existingItemIndex = state.orders.findIndex(
        (item) => item.item._id === newItem.item._id
      );
      if (existingItemIndex !== -1) {
        const updateOrders = [...state.orders];
        updateOrders[existingItemIndex].quantity += newItem.quantity;
        return { ...state, orders: updateOrders };
      } else {
        return { ...state, orders: [...state.orders, newItem] };
      }
    case "REMOVEORDER":
      return {
        ...state,
        orders: state.orders.filter(
          (order) => order.item._id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default ordersReducer;
