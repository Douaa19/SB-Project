let user;

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

const authReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case "LOGIN":
      return {
        ...state,
        isLoggedIn: true,
        user: localStorage.getItem("token")
          ? localStorage.getItem("token")
          : null,
      };
    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
