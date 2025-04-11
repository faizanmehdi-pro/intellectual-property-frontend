import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
    baseURL: baseURL
}); 

export const generateThumbnail = async (credentials: any) => {

  const id = credentials;
  // console.log("cre", id)

  // Update the data object with the 'name' field
  let result = await api.post('fix_thumbnail_manually/', {
      doc_id: id,
      DocumentName: "",
      Created: "",
      CreatedBy: "",
      Modified: "",
      ModifiedBy: "",
      Pages: 26,
      Documento: "Ley",
      NumLey: "3",
      Year: "",
      Caja: "",
      Titulo: "",
      Tipo: "",
      Estatus: "",
      Fecha: "",
      NombreAgencia: "",
      Municipio: ""
  });

  return result.data;
};

