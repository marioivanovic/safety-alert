import axios from "axios";

const config = { headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "text/plain", }, };


const instance = axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_BASE_URL,
    https: config
});

export default instance;