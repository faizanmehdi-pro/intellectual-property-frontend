import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
    baseURL: baseURL
}); 


export const getTemplate = async () => {
  let result = await api.get(`leyes_template/1`);
  return result.data;
};
