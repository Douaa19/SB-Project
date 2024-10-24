export const setOrders = (user, item, quantity, colors) => {
  return {
    type: "SETORDERS",
    payload: { user, item, quantity, colors },
  };
};

export const removeOrder = (userId, itemId) => {
  return {
    type: "REMOVEORDER",
    payload: { userId, itemId },
  };
};

export const clearUserOrders = (userId) => {
  return {
    type: "CLEARUSERORDERS",
    payload: userId,
  };
};
