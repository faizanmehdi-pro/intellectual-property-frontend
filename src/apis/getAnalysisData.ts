import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
    baseURL: baseURL
}); 

export const getAnalysisData = async () => {
  let result = await api.get(`get_analytics/`);
  return result.data;
};
