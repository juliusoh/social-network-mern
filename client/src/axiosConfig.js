import axios from 'axios';

const api = axios.create({
  baseURL: 'https://socialmern-api.juliusoh.com',
});

export default api;