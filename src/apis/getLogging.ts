import axios, { AxiosError } from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
    baseURL: baseURL
}); 

export const getLogging = async () => {
    let token = localStorage.getItem('token');
    
    try {
        let result = await api.get('logging/', {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json', // Use 'application/json' instead of 'multipart/form-data'
            },
        });
        return result.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError: AxiosError = error;
            if (axiosError.response) {
                console.log('Error response:', axiosError.response.data);
                console.log('Error status:', axiosError.response.status);
                console.log('Error headers:', axiosError.response.headers);
            }
        }
        throw error;
    }
};
