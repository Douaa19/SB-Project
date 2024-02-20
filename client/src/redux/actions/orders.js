export const setOrders = (orders) => {
  return {
    type: "SETORDERS",
    payload: orders,
  };
};

export const removeOrder = (itemId) => {
  return {
    type: "REMOVEORDER",
    payload: itemId,
  };
};
