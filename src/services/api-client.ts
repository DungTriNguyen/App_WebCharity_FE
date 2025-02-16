import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_URL,
  timeout: 30000,
});

export { api };
