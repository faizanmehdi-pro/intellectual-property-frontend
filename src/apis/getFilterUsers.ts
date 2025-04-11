import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
    baseURL: baseURL
}); 

export const getFilterUsers = async () => {
  let result = await api.get(`filter_users/`);
  return result.data;
};
