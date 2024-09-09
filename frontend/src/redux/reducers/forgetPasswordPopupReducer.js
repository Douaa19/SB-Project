const forgetPasswordPopup = (state = false, action) => {
  switch (action.type) {
    case "SETFORGETPASSWORD":
      return action.payload;
    default:
      return state;
  }
};

export default forgetPasswordPopup;
