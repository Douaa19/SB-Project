const idUserReducer = (state = "", action) => {
    const { type } = action;
    switch (type) {
      case "SETID":
        return action.payload;
  
      default:
        return state;
    }
  };
  
  export default idUserReducer;