import axios from "axios";
const BACK_URL = "http://localhost:8008/api/auth/";

export const login = async (data) => {
  const res = await axios.post(`${BACK_URL}login`, data);
    localStorage.setItem("token", JSON.stringify(res.data.myToken));
    return res;
};
