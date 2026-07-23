import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000/api", // backend
});

export const aiApi = axios.create({
  baseURL: "http://localhost:8000", // ai-service
});