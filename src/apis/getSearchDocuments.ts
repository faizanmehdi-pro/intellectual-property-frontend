import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
    baseURL: baseURL
}); 


export const getSearchDocuments = async (search: any) => {
  console.log(search)
  if (!search) {
    console.error("No search data provided");
    return null;
  }

  // Determine the type of file
  let searchType;
  switch (search.type) {
    case 1:
      searchType = "video";
      break;
    case 2:
      searchType = "audio";
      break;
    case 3:
      searchType = "photo";
      break;
    default:
      searchType = "document";
  }

  console.log("Determined search type:", searchType);
    let result = await api.get(
      `search_properties/?type=${searchType}&author=${search.author}&work_number=${search.workNumber}&title=${search.title}&genre=${search.category}&registration_date=${search.registrationDate}`
    );    
    return result.data;
};

