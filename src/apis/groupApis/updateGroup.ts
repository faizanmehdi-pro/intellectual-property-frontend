import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
    baseURL: baseURL
}); 

export const updateUserGroup = async (groupData: any, id: number | undefined) => {
    let token = localStorage.getItem("token");
    let result = await api.put(`/groups/${id}/`, groupData, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return result.data;
};

