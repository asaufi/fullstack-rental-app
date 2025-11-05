import axios from "axios";

const API_URL = "http://localhost:8080/api";

// Create a single axios instance
const api = axios.create({
  baseURL: API_URL,
});

// Automatically attach the JWT token to each request if present
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ✅ Use the configured `api` instance for all calls
export const getOffers = () => api.get("/offers");
export const createOffer = (offer) => api.post("/offers", offer);
export const registerUsers = (user) => api.post("/users", user);
export const loginUsers = (credentials) => api.post("/auth/login", credentials);
