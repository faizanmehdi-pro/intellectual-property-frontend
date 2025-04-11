import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
    baseURL: baseURL
}); 


export const getHyperLinkDocument = async (hyperLinkData: any) => {
  
  let result = await api.post('fetch_document_by_ley_year/', {
    law_number: hyperLinkData.hyperLinkNumber,
    year: hyperLinkData.hyperLinkYear,
  });
  return result.data;
};

