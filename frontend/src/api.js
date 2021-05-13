import axios from 'axios';

const baseUrl = 'http://localhost:8000';
const products = 'api/v1/products/';
const addItem = 'api/v1/carts/add_item';
const updateItem = 'api/v1/carts/update_item';
const removeItem = 'api/v1/carts/remove_item';
const cart = 'api/v1/carts/get_cart';
const registrations = '/api/v1/registrations';

axios.defaults.baseURL = baseUrl;

const api = {
  baseUrl,
  products,
  addItem,
  updateItem,
  removeItem,
  registrations,
  cart
};

export default api;
