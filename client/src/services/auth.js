import axios from "axios";
const BACK_URL = "http://localhost:8008/api/auth/";

export const login = async (data) => {
  const res = await axios.post(`${BACK_URL}login`, data);
  localStorage.setItem("token", JSON.stringify(res.data.token));
  return res;
};

export const register = async (data) => {
  const infos = {
    email: data.email,
    username: data.username,
    password: data.password,
    phoneNum: data.phone,
    address: data.address,
    role: "client",
  };

  const res = await axios.post(`${BACK_URL}register`, infos, {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  });
  if (res) {
    localStorage.setItem("token", JSON.stringify(res.data.token));
    return res;
  }
};

export const forgetPassword = async (email) => {
  const res = await axios.post(`${BACK_URL}forget-password`, { email });
  return res;
};

export const recreatPassword = async (data, user_id) => {
  const res = axios.post(`${BACK_URL}recreat-password/${user_id}`, { data });
  return res;
};
