export const setContactDone = (popupStatus) => {
  return {
    type: "SETCONTACTDONE",
    payload: popupStatus,
  };
};

export const setForgetPassword = (popupStatus) => {
  return {
    type: "SETFORGETPASSWORD",
    payload: popupStatus,
  };
};
