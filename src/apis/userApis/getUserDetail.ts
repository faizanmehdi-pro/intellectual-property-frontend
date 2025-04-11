import { QueryKey } from '@tanstack/react-query';
import axios from 'axios';
const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
    baseURL: baseURL
}); 

export const getUserDetail = async (id: any) => {
  let token = localStorage.getItem('token');
  let result = await api.get(`users/${id}/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return result.data;
};

interface Arg {
  id: any;
}
