import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
    baseURL: baseURL
}); 

export const filterAdmins = async () => {
  let result = await api.get(`filter_users/?is_staff=true`);
  return result.data;
};
