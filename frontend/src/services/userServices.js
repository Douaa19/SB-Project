import axios from "axios";
import { BACK_URL } from "../config";

export const sendMessage = async (data) => {
  const result = axios.post(`${BACK_URL}/user/contact`, { data });
  return result;
};

export const getUser = async () => {
  const result = axios.get(`${BACK_URL}/user/profile`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return result;
};
