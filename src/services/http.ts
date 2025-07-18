import axios from 'axios';
import { getToken } from './auth.service';

const http = axios.create({
  baseURL: 'https://portfolio-api-production-a4d8.up.railway.app/api', // Ganti dengan API-mu
});

http.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default http;

