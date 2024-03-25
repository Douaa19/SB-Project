export const loginAction = () => {
  return {
    type: "LOGIN",
  };
};

export const logoutAction = () => {
  return {
    type: "LOGOUT",
  };
};

export const setRoleAction = (role) => {
  return {
    type: "SETUSERROLE",
  };
};

export const setIdAction = (id) => {
  return {
    type: "SETID",
  };
};
