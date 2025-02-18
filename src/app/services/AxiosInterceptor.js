import axios from 'axios';
import { timerAlert } from '../utils/alerts';

// Crear una instancia de Axios
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// Interceptor de solicitud
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor de respuesta
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response) {
      const statusMessage = `Error: ${error.response.status}`;
      const errorMessage = error.response.data.error || 'Error';
      await timerAlert('Error al procesar la solicitud', errorMessage, 'error', 3000);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;