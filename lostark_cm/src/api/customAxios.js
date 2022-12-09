import axios, { AxiosInstance } from "axios";

export const customAxios = axios.create({
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
  },
});
