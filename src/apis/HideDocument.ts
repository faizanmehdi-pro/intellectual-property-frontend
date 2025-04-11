import axios, { AxiosError } from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
    baseURL: baseURL
}); 


export const hideDocument = async (upload: any) => {

  let token = localStorage.getItem('token');
  try {
    let formData = new FormData();
    formData.append('is_hidden', upload.is_hidden);

    console.log("first", upload.id, upload.is_hidden)

    let result = await api.patch(`documents/${upload.id}/`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
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
