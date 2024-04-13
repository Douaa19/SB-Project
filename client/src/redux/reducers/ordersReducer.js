const ordersReducer = (state = { orders: {} }, action) => {
  switch (action.type) {
    case "SETORDERS":
      const { user, item, quantity } = action.payload;
      const userOrders = { ...state.orders };

      if (!userOrders[user]) {
        userOrders[user] = [];
      }

      const existingItemIndex = userOrders[user].findIndex(
        (order) => order.item._id === item._id
      );

      if (existingItemIndex !== -1) {
        userOrders[user][existingItemIndex].quantity += quantity;
      } else {
        userOrders[user].push({ item, quantity });
      }

      return { ...state, orders: userOrders };

    case "REMOVEORDER":
      const { userId, itemId } = action.payload;
      const updateOrders = { ...state.ordres };

      if (updateOrders[userId]) {
        updateOrders[userId] = updateOrders[userId].filter(
          (order) => order.item_id !== itemId
        );
      }

      return { ...state, orders: updateOrders };
    default:
      return state;
  }
};

export default ordersReducer;
