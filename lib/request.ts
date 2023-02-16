import axios, { AxiosInstance, AxiosError, AxiosResponse } from 'axios';

// create a new axios instance
const api: AxiosInstance = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// add a request interceptor
api.interceptors.request.use(
  (config) => {
    // add custom logic before request is sent
    console.log('Request sent with config: ', config);
    return config;
  },
  (error: AxiosError) => {
    // handle request error
    console.error('Error occurred while sending request: ', error);
    return Promise.reject(error);
  }
);

// add a response interceptor
api.interceptors.response.use(
  (response: AxiosResponse) => {
    // add custom logic after response is received
    console.log('Response received with data: ', response.data);
    return response;
  },
  (error: AxiosError) => {
    // handle response error
    console.error('Error occurred while receiving response: ', error);
    return Promise.reject(error);
  }
);

export default api;
