import axios from "axios";
const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
    baseURL: baseURL
}); 

export const lockUser = async (id: number | undefined) => {
    let token = localStorage.getItem('token');
  let result = await api.post(`users/${id}/set_lock/`, {},{
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return result.data;
};

