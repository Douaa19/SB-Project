let token;
let user;

try {
  token = localStorage.getItem("token");
} catch (error) {
  user = null;
}

user = token ? token : null;

console.log(user);

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
        user: user,
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
