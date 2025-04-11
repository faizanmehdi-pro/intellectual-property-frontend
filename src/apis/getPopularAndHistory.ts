import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
    baseURL: baseURL
}); 


export const getPopularAndHistory = async () => {
  
  let result = await api.get('historical_and_popular_documents/');
  return result.data;
};
