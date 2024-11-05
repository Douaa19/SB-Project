import axios from "axios";
import { BACK_URL } from "../config";

export const login = async (data) => {
  const res = await axios.post(`${BACK_URL}/auth/login`, data);
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

  const res = await axios.post(`${BACK_URL}/auth/register`, infos, {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  });
  if (res) {
    return res;
  }
};

export const forgetPassword = async (email) => {
  const res = await axios.post(`${BACK_URL}/auth/forget-password`, { email });
  return res;
};

export const recreatPassword = async (data, user_id) => {
  const res = axios.post(`${BACK_URL}/auth/recreat-password/${user_id}`, {
    data,
  });
  return res;
};
