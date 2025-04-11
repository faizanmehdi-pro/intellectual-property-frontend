import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
    baseURL: baseURL
}); 

export const deleteDocument = async (deleteID: any) => {
  let token = localStorage.getItem('token');
  let result = await api.delete(
    `intellectual_property/${deleteID}/`,
    {
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
    }
  );
  return result.data;
};
