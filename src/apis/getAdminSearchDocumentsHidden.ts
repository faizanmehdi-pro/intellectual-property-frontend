import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
    baseURL: baseURL
}); 

export const getAdminSearchDocumentsHidden = async () => {
  // console.log('Base URL:', baseURL); 
  let result = await api.get('get_documents_admin/?hidden=true');
  return result.data;
};
