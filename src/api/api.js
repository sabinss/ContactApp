import axios from 'axios';
const BASE_URI = 'https://contactapp-server.herokuapp.com';

const api = axios.create({
  baseURL: BASE_URI,
});

export default api;
