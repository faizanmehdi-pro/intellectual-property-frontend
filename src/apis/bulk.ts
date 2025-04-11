import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
    baseURL: baseURL
}); 

export const bulk = async (bulkData: any) => {
  const formData = new FormData();

  bulkData.ids.forEach((id: any, index: number) => {
    formData.append(`id`, id);
  });

  formData.append('is_hidden', bulkData.is_hidden);
  formData.append('is_indexed', bulkData.is_indexed);
  formData.append('is_titled', bulkData.is_titled);
  formData.append('is_completed', bulkData.is_completed);

  let result = await api.post('bulk_edit/', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });

  return result.data;
};
