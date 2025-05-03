import axios, { AxiosResponse, AxiosError } from 'axios';
import { NEXT_PUBLIC_API_URL } from '@/utils/constants';

const axiosInstance = axios.create({
    baseURL: NEXT_PUBLIC_API_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});

axiosInstance.interceptors.request.use((config) => {
    return config;
}, (error: AxiosError) => {
    console.error('Request Error:', error.message);
    return Promise.reject(error);
});

axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    (error: AxiosError<{ error?: string }>) => {
        if (error.response) {
            console.error('Server Error:', error.response.status, error.response.data.error);
          } else if (error.request) {
            console.error('Network Error:', error.message);
          } else {
            console.error('Axios Error:', error.message);
          }
      
          const errorMessage = error.response?.data?.error || error.message;
          return Promise.reject(errorMessage); 
    }
);

export default axiosInstance;