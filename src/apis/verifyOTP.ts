import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
    baseURL: baseURL
}); 


export const verifyOTP = async (credentials: Credentials) => {
    let result = await api.post('verify_code/', {
        email: credentials.email,
        code: credentials.code,
    });
    return result.data;
};

interface Credentials {
    email: string | undefined;
    code: number;
}
