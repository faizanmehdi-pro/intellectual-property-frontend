import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
    baseURL: baseURL
}); 


export const login = async (credentials: Credentials) => {
  
  let result = await api.post('login/', {
    email: credentials.email,
    password: credentials.password,
  });
  return result.data;
};

interface Credentials {
  email: string;
  password: string;
}
