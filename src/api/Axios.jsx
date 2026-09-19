import axios from 'axios';

const api = axios.create({
    baseURL: 'https://personal-website-0e8g.onrender.com'
});

export default api;
