export const setBestSellingItems = (items) => {
  return {
    type: "SETBESTSELLINGITEMS",
    payload: items,
  };
};

export const setNewestItems = (items) => {
  return {
    type: "SETNEWESTITEMS",
    payload: items,
  };
};

export const setCategoryItems = (items) => {
  return {
    type: "SETCATEGORYITEMS",
    payload: items,
  };
};
