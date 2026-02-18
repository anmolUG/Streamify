import axios from "axios";

const BASE_URL = import.meta.env.MODE === "development" 
  ? "http://localhost:5001/api" 
  : import.meta.env.VITE_API_URL || "https://streamify-1-1s6d.onrender.com/api";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // send cookies with the request
});
