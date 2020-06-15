import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

export const api = {
  get(endpoint) {
    return axiosInstance.get(endpoint).then((response) => response);
  },
};

export function getAddress(zipCode) {
  return axios.get(`https://viacep.com.br/ws/${zipCode}/json/`);
}
