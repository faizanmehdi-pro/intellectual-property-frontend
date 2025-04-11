import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
    baseURL: baseURL
}); 


export const changePassword = async (credentials: Credentials) => {
    let result = await api.post('reset_password/', {
        id: credentials.id,
        new_password: credentials.newPassword,
        confirm_password: credentials.confirmPassword,
    });
    return result.data;
};

interface Credentials {
    id: number;
    newPassword: string;
    confirmPassword: string;
}
