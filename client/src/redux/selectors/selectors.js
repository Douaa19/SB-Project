export const getItemById = (state, itemId) => {
  return state && state ? state.find((item) => item._id === itemId) : null;
};
