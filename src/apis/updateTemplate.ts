import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
    baseURL: baseURL
}); 


export const updateTemplate = async (credentials: any) => {
  let token = localStorage.getItem('token');
  let result = await api.patch(
    `leyes_template/1/`,
    {
      ...credentials,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return result.data;
};
