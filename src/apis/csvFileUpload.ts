import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
    baseURL: baseURL
}); 

export const csvFileUpload = async (credentials: any) => {
  // console.log("first", credentials.csv_record)

  const formData = new FormData();
  formData.append('csv_record', credentials.csv_record);

  let result = await api.post('sync_record/', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });

  return result.data;
};
