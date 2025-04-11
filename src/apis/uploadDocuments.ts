import axios, { AxiosError } from 'axios';

// Ensure the base URL is correctly set in your environment variables
const baseURL = process.env.REACT_APP_BASE_URL;

let token = localStorage.getItem('token');
const api = axios.create({
    baseURL: baseURL,
    // headers: {
    //   Authorization: `Bearer ${token}`,
    //     'Content-Type': 'multipart/form-data' // Ensure correct headers for file upload
    // }
});

export const uploadDocuments = async (upload: any) => {
  try {
    console.log("Upload object:", upload);

    // Validate the upload object
    if (!upload) {
      console.error("No upload data provided");
      return null;
    }

    // Determine the type of file
    let uploadType;
    switch (upload.type) {
      case 1:
        uploadType = "video";
        break;
      case 2:
        uploadType = "audio";
        break;
      case 3:
        uploadType = "photo";
        break;
      default:
        uploadType = "document";
    }

    console.log("Determined upload type:", uploadType);

    // Create FormData
    let formData = new FormData();
    formData.append('user', upload.userID);
    formData.append('type', uploadType);
    formData.append('author', upload.authorName);
    formData.append('genre', upload.category);
    formData.append('title', upload.title);
    formData.append('work_number', upload.workNumber);
    formData.append('registration_date', upload.registrationDate);
    formData.append('file', upload.file);

    console.log("FormData created:", formData);

    // Make the API call to upload the file
    let result = await api.post('intellectual_property/', formData);
    
    console.log("Upload successful:", result.data);
    return result.data;
  } catch (error: AxiosError | any) {
    if (axios.isAxiosError(error)) {
      // Axios-specific error
      console.error("Axios error:", error.response?.data || error.message);
    } else {
      // Generic error
      console.error("Error during file upload:", error.message);
    }
    return null;
  }
};
