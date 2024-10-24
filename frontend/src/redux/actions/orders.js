export const setOrders = (user, item, quantity, colors) => {
  return {
    type: "SETORDERS",
    payload: { user, item, quantity, colors },
  };
};

export const removeOrder = (userId, itemId, color) => {
  return {
    type: "REMOVEORDER",
    payload: { userId, itemId, color },
  };
};

export const clearUserOrders = (userId) => {
  return {
    type: "CLEARUSERORDERS",
    payload: userId,
  };
};
