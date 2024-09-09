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

export const setResetPassword = (popupStatus) => {
  return {
    type: "SETRESETPASSWORD",
    payload: popupStatus,
  };
};

export const setOrderSent = (popupStatus) => {
  return {
    type: "SETORDERSENT",
    payload: popupStatus,
  };
};
