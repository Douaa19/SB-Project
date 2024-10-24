const ordersReducer = (state = { orders: {} }, action) => {
  switch (action.type) {
    case "SETORDERS":
      const { user, item, quantity, colors } = action.payload; // Destructure colors here
      const userOrders = { ...state.orders };

      if (!userOrders[user]) {
        userOrders[user] = [];
      }

      const existingItemIndex = userOrders[user].findIndex(
        (order) =>
          order.item._id === item._id &&
          JSON.stringify(order.colors) === JSON.stringify(colors) // Compare colors
      );

      if (existingItemIndex !== -1) {
        userOrders[user][existingItemIndex].quantity += quantity;
      } else {
        userOrders[user].push({ item, quantity, colors }); // Push new order with colors
      }

      return { ...state, orders: userOrders };

    case "REMOVEORDER":
      const { userId, itemId } = action.payload; // Only destructure userId and itemId here
      const updatedOrders = { ...state.orders };

      if (updatedOrders[userId]) {
        updatedOrders[userId] = updatedOrders[userId].filter(
          (order) => !(order.item._id === itemId) // Only compare by itemId
        );
      }

      return { ...state, orders: updatedOrders };

    case "CLEARUSERORDERS":
      const userIdToRemove = action.payload;
      const filteredOrders = {};
      for (const userId in state.orders) {
        if (userId !== userIdToRemove) {
          filteredOrders[userId] = state.orders[userId];
        }
      }
      return { ...state, orders: filteredOrders };

    default:
      return state;
  }
};

export default ordersReducer;
