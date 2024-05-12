import axios from "axios";

export const api = axios.create({
  baseURL: "https://movie-api-8elo.onrender.com",
});
