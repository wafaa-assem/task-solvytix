import axios from "axios";

export const getSpecificProduct = (id) => {
  return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
};
