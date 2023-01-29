import axios from 'axios';

const products = '/api/v1/products/';
const addItem = '/api/v1/carts/add_item';
const updateItem = '/api/v1/carts/update_item';
const removeItem = '/api/v1/carts/remove_item';
const cart = '/api/v1/carts/get_cart';
const registrations = '/api/v1/registrations';
const sessions = '/api/v1/sessions';
const loggedIn = '/api/v1/logged_in';
const logOut = '/api/v1/logout';
const search = '/api/v1/products/search';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.xsrfCookieName = 'CSRF-TOKEN';
axios.defaults.xsrfHeaderName = 'X-CSRF-Token';
axios.defaults.withCredentials = true;

if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://localhost:5000';
}

const api = {
  products,
  addItem,
  updateItem,
  removeItem,
  registrations,
  sessions,
  loggedIn,
  logOut,
  cart,
  search
};

export default api;
