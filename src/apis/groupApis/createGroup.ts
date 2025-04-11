import axios from "axios";
const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
    baseURL: baseURL
}); 

export const createGroup = async (groupData: any) => {
  let token = localStorage.getItem("token");
  let result = await api.post(
    "groups/",
    groupData
    ,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return result.data;
};

interface GroupDataType {
  name: string;
  level: string;
  permissions?: [];
}
