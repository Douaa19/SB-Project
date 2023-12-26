import axios from "axios";
const BACKEND_URL = "http://localhost:8008/api/categories/";

// get best selling products
export const getCategories = async () => {
  const result = await axios.get(`${BACKEND_URL}get-categories`);
  return result.data;
};
