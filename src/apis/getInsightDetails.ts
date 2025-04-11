import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
    baseURL: baseURL
}); 


export const getInsightDetails = async () => {
  let result = await api.get(`insights_api/`);
  return result.data;
};
