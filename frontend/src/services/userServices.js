import axios from "axios";
import { BACK_URL } from "../config";

export const sendMessage = async (data) => {
  const result = axios.post(`${BACK_URL}/user/contact`, { data });
  return result;
};
