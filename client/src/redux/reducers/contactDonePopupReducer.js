const contactDonePopup = (state = false, action) => {
  switch (action.type) {
    case "SETCONTACTDONE":
      return action.payload;
    default:
      return state;
  }
};

export default contactDonePopup;
