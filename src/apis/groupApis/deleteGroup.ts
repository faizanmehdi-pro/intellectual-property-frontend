import axios from "axios";
const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
    baseURL: baseURL
}); 
export const deleteGroup = async (id: number) => {
  let token = localStorage.getItem("token");
  let result = await api.delete(`groups/${id}/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return result.data;
};
