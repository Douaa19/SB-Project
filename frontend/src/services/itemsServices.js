import axios from "axios";
import { BACK_URL } from "../config";

// get best selling products
export const getBestSellingProducts = async () => {
  const result = await axios.get(`${BACK_URL}/items/best-selling`);
  return result.data;
};

// get item's first image
export const getItemImage = async (id) => {
  const res = await axios.get(`${BACK_URL}/items/${id}/image`);
  console.log(res.data);
  return res.data;
};

// get newest items
export const getNewestItems = async () => {
  const result = await axios.get(`${BACK_URL}/items/newest-items`);
  return result.data;
};

// get category items
export const getItemsByCategory = async (category_id, type) => {
  const result = await axios.get(
    `${BACK_URL}/items/get-items/${category_id}/${type}`
  );
  return result.data;
};

// get mismatched category items
export const getMismatchedCategoryItems = async (category_id) => {
  const result = await axios.get(`${BACK_URL}/items/mismatch/${category_id}`);
  return result.data;
};
