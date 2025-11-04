import axios from "axios"


const API_URL = "http://localhost:8080/api"
export const getOffers = () => axios.get(`${API_URL}/offers`)
export const createOffer = (offer) => axios.post(`${API_URL}/offers`,offer)
export const registerUsers = (user)=> axios.post(`${API_URL}/users`, user)
export const loginUsers = (credentials)=> axios.post(`${API_URL}/auth/login`, credentials)
