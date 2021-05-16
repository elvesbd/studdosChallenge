import axios from 'axios';

const api = axios.create({
  //baseURL: 'https://run.mocky.io/v3/865096e8-cdb8-49d7-b548-6488db4c8129',
  baseURL: 'http://localhost:3000/',
});

export default api;