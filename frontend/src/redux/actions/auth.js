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
    payload: role,
  };
};

export const setIdAction = (id) => {
  return {
    type: "SETID",
    payload: id,
  };
};

export const setEmailAction = (email) => {
  return {
    type: "SETEMAIL",
    payload: email,
  };
};
