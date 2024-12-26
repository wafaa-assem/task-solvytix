import axios from "axios";

export const getProducts = (pageNumber = 1) => {
return axios.get(`https://ecommerce.routemisr.com/api/v1/products?limit=10&page=${pageNumber}`)
}