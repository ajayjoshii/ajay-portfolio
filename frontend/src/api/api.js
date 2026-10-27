
import axios from "axios";

const api = axios.create({
  baseURL: "https://ajay-portfolio-backend.vercel.app/api",
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
