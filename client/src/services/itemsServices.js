import axios from "axios";
const BACKEND_URL = "http://localhost:8008/api/items/";

// get best selling products
export const getBestSellingProducts = async () => {
  const result = await axios.get(`${BACKEND_URL}/best-selling`);
  return result.data;
};

// get item's image
export const getItemImage = async (id) => {
  const res = await axios.get(`${BACKEND_URL}${id}/image`);
  return res.data;
};
