import axios, { AxiosError } from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
    baseURL: baseURL,
});

export const postLogging = async () => {
    try {
        const token = localStorage.getItem('token');
        const userID = localStorage.getItem('user_id');

        if (!token || !userID) {
            throw new Error('Token or user ID is missing'); // Handle missing token or user ID
        }

        const response = await api.post(
            'logging/',
            {
                user: userID,
                note: '',
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        return response.data;
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            const axiosError: AxiosError = error;
            if (axiosError.response) {
                console.error('Error response:', axiosError.response.data);
                console.error('Error status:', axiosError.response.status);
                console.error('Error headers:', axiosError.response.headers);
            } else {
                console.error('Network error:', error.message);
            }
        } else {
            console.error('Unexpected error:', error.message);
        }
        throw error;
    }
};
