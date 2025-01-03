import axiosProvider from "axios";

// Axios Interceptor Instance
export const axios = axiosProvider.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
});

axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        console.log(token);
        // const accessToken = JSON.parse(token);

        // If token is present, add it to request's Authorization Header
        // if (accessToken) {
        //     if (config.headers) config.headers.token = accessToken;
        // }
        return config;
    },
    (error) => {
        // Handle request errors here
        return Promise.reject(error);
    }
);