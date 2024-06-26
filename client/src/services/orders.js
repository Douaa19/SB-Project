import axios from "axios";
const BACK_URL = "http://localhost:8008/api/orders";
const token = localStorage.getItem("token");

export const sendOrder = (shipping, items) => {
  const res = axios.post(
    `${BACK_URL}/create-order`,
    { shipping, items },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (res) {
    return res;
  } else {
    console.log("Error!");
  }
};
