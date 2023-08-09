import axios from 'axios';

// Create a base configuration for Axios
const axiosConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: Number(process.env.NEXT_PUBLIC_API_TIMEOUT),
};

// Create an instance of Axios with the base configuration
const instance = axios.create(axiosConfig);

// Request interceptor
instance.interceptors.request.use(
  // Do something before request is sent
  config => config,

  // Handle request error
  error => Promise.reject(error),
);

// Response interceptor
instance.interceptors.response.use(
  // Handle successful responses
  response => response,

  // Handle response errors
  error => Promise.reject(error),
);

export default instance;
