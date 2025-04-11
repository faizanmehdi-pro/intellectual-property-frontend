import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
    baseURL: baseURL
}); 


export const getDocument = async (id: any) => {
    let token = localStorage.getItem('token');
    let result = await api.get(`intellectual_property/${id}`, {
    //   headers: {
    //       Authorization: `Bearer ${token}`,
    //   },
  });   
    return result.data;
};

