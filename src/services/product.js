import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

export const productService = {
  getAllProducts(endpoint) {
    return axiosInstance.get(endpoint).then((response) => response);
  },
};
