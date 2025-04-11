import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
    baseURL: baseURL
}); 


export const getSignUpUserDetail = async (id: any) => {
  let token = localStorage.getItem('token');
  let result = await api.get(`sign_up/${id}/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return result.data;
};
