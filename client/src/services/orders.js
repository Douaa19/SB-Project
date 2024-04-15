import axios from "axios";
const BACK_URL = "http://localhost:8008/api/orders";
const token = localStorage.getItem("token");


export const sendOrder = (data) => {
  const res = axios.post(`${BACK_URL}/create-order`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
