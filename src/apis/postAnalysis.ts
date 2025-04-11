import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
    baseURL: baseURL
}); 


export const postAnalysis = async (credentials: any) => {
  
  let result = await api.post('post_analytics/', {
    home_page: credentials.home,
    search_page: credentials.search
  });
  return result.data;
};

