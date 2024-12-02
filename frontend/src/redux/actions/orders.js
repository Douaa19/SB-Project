export const setOrders = (user, item, quantity, colors) => {
  return {
    type: "SETORDERS",
    payload: { user, item, quantity, colors },
  };
};

export const setMultipleOrders = (user_id, orders) => {
  return {
    type: "SETMULTIPLEORDERS",
    payload: { user_id, orders },
  };
};

export const removeOrder = (userId, itemId, color) => {
  return {
    type: "REMOVEORDER",
    payload: { userId, itemId, color },
  };
};

export const editOrder = (userId, itemId, colors, newQuantity) => {
  return {
    type: "EDITORDER",
    payload: { userId, itemId, newQuantity, colors },
  };
};

export const clearUserOrders = (userId) => {
  return {
    type: "CLEARUSERORDERS",
    payload: userId,
  };
};
