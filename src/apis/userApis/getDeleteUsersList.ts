import axios from 'axios';
const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
    baseURL: baseURL
}); 

export const getDeleteUsersList = async () => {
    let token = localStorage.getItem('token');
    let result = await api.get(`get_deleted_users/`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return result.data;
};

