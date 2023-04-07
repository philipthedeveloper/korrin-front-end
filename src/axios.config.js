import axios from "axios";

export const http = axios.create({
  baseURL: "https://korrin.vercel.app/v1",
});
