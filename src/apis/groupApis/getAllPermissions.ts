import { QueryKey } from "@tanstack/react-query";
import axios from "axios";
const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
    baseURL: baseURL
}); 

export const getAllPermissions = async () => {
  let token = localStorage.getItem("token");
  let result = await api.get(`permissions/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return result.data;
};
