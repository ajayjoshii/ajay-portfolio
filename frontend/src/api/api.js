
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
});

export const sendContactMessage = async (formData) => {
  const response = await api.post("/contact", formData);
  return response.data;
};

export default api;
