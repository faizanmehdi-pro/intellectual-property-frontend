import axios, { AxiosResponse, AxiosError } from 'axios';
import { toast } from 'react-toastify';

const baseURL = process.env.REACT_APP_BASE_URL;
const api = axios.create({
  baseURL: baseURL
});

export const downloadSingleDocument = async (onDemandDownload: any, signal: AbortSignal): Promise<{ pdf_url?: string[] }> => {
  // console.log("APIDemand", onDemandDownload);

  const config = {
    signal: signal,
  };

  try {
    const result: AxiosResponse<{ pdf_url?: string[] }> = await api.post('download_document_api/', onDemandDownload, config);
    return result.data;
  } catch (error) {
    if (axios.isCancel(error)) {
      // Request was cancelled
      // console.log('Request cancelled:', (error as AxiosError).message);
      toast.error("Request Cancelled.");
      throw new Error('Request cancelled');
    } else {
      // Handle other errors
      toast.error("Internet Issue.");
      throw error;
    }
  }
};
