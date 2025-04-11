import axios from 'axios';
const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
    baseURL: baseURL
}); 

export const updateUser = async (credentials: Credentials) => {
  let token = localStorage.getItem('token');
  let result = await api.put(
    `users/${credentials.id}/`,
    {
      ...credentials.user,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return result.data;
};

interface Credentials {
  id: string | number;
  user: any;
}
