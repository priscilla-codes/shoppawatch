import axios from 'axios';

const baseUrl = 'http://localhost:8000';
const products = 'api/v1/products/';
const addItem = 'api/v1/carts/add_item';
const updateItem = 'api/v1/carts/update_item';
const removeItem = 'api/v1/carts/remove_item';
const cart = 'api/v1/carts/get_cart';
const registrations = '/api/v1/registrations';
const sessions = '/api/v1/sessions';
const loggedIn = '/api/v1/logged_in';
const logOut = '/api/v1/logout';

axios.defaults.baseURL = baseUrl;

const api = {
  baseUrl,
  products,
  addItem,
  updateItem,
  removeItem,
  registrations,
  sessions,
  loggedIn,
  logOut,
  cart
};

export default api;
