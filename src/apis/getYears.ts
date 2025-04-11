import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
    baseURL: baseURL
}); 

export const getYears = async (searchType: any) => {
  let result = await api.get(`total_hits/?type=${searchType}`);
  return result.data;
};
