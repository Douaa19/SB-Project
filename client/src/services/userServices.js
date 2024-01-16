import axios from "axios";
const BACKEND_URL = "http://localhost:8008/api/user/";

export const sendMessage = async (data) => {
  const result = axios.post(`${BACKEND_URL}contact`, { data });
  return result;
};
