import axios from 'axios';
const BASE_URL = 'http://152.67.176.72:8081/userauth?username=nullpointer&password=nullpointer';

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});