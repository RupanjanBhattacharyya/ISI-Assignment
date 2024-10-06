import axios from 'axios';
const BASE_URL = 'http://152.67.176.72:8081/userauth?username=${username}&password=${password}';

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.get({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});