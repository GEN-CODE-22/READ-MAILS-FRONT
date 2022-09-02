import axios from "axios";

const baseURL = process.env.URL_SERVER;

export const mailsApi = axios.create({
  baseURL,
});
