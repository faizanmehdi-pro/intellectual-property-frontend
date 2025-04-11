import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
    baseURL: baseURL
}); 


export const getLatestLaws = async () => {
  
  let result = await api.get('latest_documents/');
  return result.data;
};
