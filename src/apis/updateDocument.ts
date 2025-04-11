import axios, { AxiosError } from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
  baseURL: baseURL,
});

export const updateDocument = async (update: any) => {
  let token = localStorage.getItem('token');
  
  // Log the token and update data to inspect before the request
  console.log("Token: ", token);
  console.log("update Data: ", update);

  try {
    let formData = new FormData();
    
    // Only append the fields that are different from the initial values
    if (update.author) {
      formData.append('author', update.author);
    }
    if (update.type) {
      formData.append('type', update.type);
    }
    if (update.title) {
      formData.append('title', update.title);
    }
    if (update.workNumber) {
      formData.append('work_number', update.workNumber);
    }
    if (update.category) {
      formData.append('genre', update.category);
    }
    if (update.registrationDate) {
      formData.append('registration_date', update.registrationDate);
    }

    // Ensure that the file exists before appending
    if (update.file) {
      formData.append('file', update.file);
    } else {
      console.warn('File is missing from the update data.');
    }

    // Log formData entries for debugging purposes
    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });

    let result = await api.patch(`intellectual_property/${update.id}/`, formData, {
      // headers: {
      //   Authorization: `Bearer ${token}`,
      //   'Content-Type': 'multipart/form-data',
      // },
    });

    // Log the result for debugging
    console.log("API Response: ", result.data);

    return result.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError: AxiosError = error;

      // Improved logging
      if (axiosError.response) {
        console.error('Error response data:', axiosError.response.data);
        console.error('Error response status:', axiosError.response.status);
        console.error('Error response headers:', axiosError.response.headers);
      } else {
        console.error('No response from server:', axiosError.message);
      }
    } else {
      console.error('Non-Axios error:', error);
    }

    throw error;
  }
};
