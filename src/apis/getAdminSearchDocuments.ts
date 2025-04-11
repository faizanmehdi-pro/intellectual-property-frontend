import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
    baseURL: baseURL
}); 

export const getAdminSearchDocuments = async (page: any) => {
  let result = await api.get(`get_documents_admin/?page=${page}`);
  return result.data;
};
