const ordersReducer = (state = { orders: {} }, action) => {
  switch (action.type) {
    case "SETORDERS":
      const { user, item, quantity, colors } = action.payload;
      const userOrders = { ...state.orders };

      if (!userOrders[user]) {
        userOrders[user] = [];
      }

      const existingItemIndex = userOrders[user].findIndex(
        (order) =>
          order.item._id === item._id &&
          JSON.stringify(order.colors) === JSON.stringify(colors)
      );

      if (existingItemIndex !== -1) {
        return state;
      } else {
        userOrders[user].push({ item, quantity, colors });
      }

      return { ...state, orders: userOrders };

    case "REMOVEORDER":
      const {
        userId: removeUserId,
        itemId: removeItemId,
        color,
      } = action.payload;
      const filtredOrders = { ...state.orders };

      if (filtredOrders[removeUserId]) {
        filtredOrders[removeUserId] = filtredOrders[removeUserId].filter(
          (order) =>
            !(
              order.item._id === removeItemId &&
              JSON.stringify(order.colors) === JSON.stringify(color)
            )
        );
      }

      return { ...state, orders: filtredOrders };

    case "EDITORDER":
      const {
        userId,
        itemId,
        colors: editColors,
        newQuantity,
      } = action.payload;
      const updatedOrders = { ...state.orders };

      if (updatedOrders[userId]) {
        const itemIndex = updatedOrders[userId].findIndex(
          (order) =>
            order.item._id === itemId &&
            JSON.stringify(order.colors) === JSON.stringify(editColors)
        );

        if (itemIndex !== -1) {
          updatedOrders[userId][itemIndex].quantity = newQuantity;
        }
      }

      return { ...state, orders: updatedOrders };

    case "CLEARUSERORDERS":
      const userIdToClear = action.payload;
      const newOrders = { ...state.orders };
      delete newOrders[userIdToClear];
      return { ...state, orders: newOrders };

    default:
      return state;
  }
};

export default ordersReducer;
