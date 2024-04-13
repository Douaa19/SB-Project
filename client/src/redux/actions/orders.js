export const setOrders = (user, item, quantity) => {
  return {
    type: "SETORDERS",
    payload: { user, item, quantity },
  };
};

export const removeOrder = (itemId) => {
  return {
    type: "REMOVEORDER",
    payload: itemId,
  };
};
