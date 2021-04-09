import axios from 'axios';

const baseUrl = 'http://localhost:8000';
const products = 'api/v1/products/';

axios.defaults.baseURL = baseUrl;

const api = {
  baseUrl,
  products
};

export default api;
