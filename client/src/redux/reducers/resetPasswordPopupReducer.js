const resetPasswordPopup = (state = false, action) => {
  switch (action.type) {
    case "SETRESETPASSWORD":
      return action.payload;
    default:
      return state;
  }
};

export default resetPasswordPopup;
