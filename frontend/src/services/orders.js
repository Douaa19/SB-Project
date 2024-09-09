import axios from "axios";
import { BACK_URL } from "../config";
const token = localStorage.getItem("token");

export const sendOrder = (shipping, items) => {
  const res = axios.post(
    `${BACK_URL}/orders/create-order`,
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
