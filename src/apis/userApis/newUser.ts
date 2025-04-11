import axios from 'axios';
const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
    baseURL: baseURL
}); 

export const newUser = async (id: number | undefined, credentials: Credentials) => {
  let token = localStorage.getItem("token");
  let result = await api.put(`users/${id}/`, {
    
    headers: {
      Authorization: `Bearer ${token}`,
    },
    
    email: credentials.email,
    password: credentials.password,
    name: credentials.name,
  });
  return result.data;
};

interface Credentials {
  email: string;
  password: string;
  name: string;
}
