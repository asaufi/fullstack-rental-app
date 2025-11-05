import axios from "axios"


const API_URL = "http://localhost:8080/api"


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



export const getOffers = () => axios.get(`${API_URL}/offers`)
export const createOffer = (offer) => axios.post(`${API_URL}/offers`,offer)
export const registerUsers = (user)=> axios.post(`${API_URL}/users`, user)
export const loginUsers = (credentials) => axios.post("http://localhost:8080/api/auth/login", credentials); 
