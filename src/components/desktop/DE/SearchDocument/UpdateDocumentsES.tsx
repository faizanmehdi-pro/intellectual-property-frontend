import React, { useEffect, useState } from "react";
import "./SearchDocuments.scss";
import { Input } from "reactstrap";
import { Controller, useForm } from "react-hook-form";
import Footer from "../Footer";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import FormSelector from "../FormSelector/FormSelector";
import { getDocument } from "../../../../apis/getDocument";
import RadioButtonsProperty from "./RadioButtonsProperty";
import UploadHeader from "../Header/UploadHeader";
import { GenderOptions } from "./Data/DataES";
import { updateDocument } from "../../../../apis/updateDocument";
import UploadHeaderES from "../Header/UploadHeaderES";
import RadioButtonsPropertyES from "./RadioButtonsPropertyES";

type Props = {}; 

export interface SearchData { 
  type: any;
  author: any;
  category: any;
  file: any;
  workNumber: any;
  title: any;
  registrationDate: any;
  work_number: any;
  registration_date: any;
  genre: any;
}

const UpdateDocumentsES = (props: Props) => {
  const location = useLocation();
  const id = new URLSearchParams(location.search).get("id");
  const navigateLink = new URLSearchParams(location.search).get("link");
  const [editResult, setEditResult] = useState<SearchData | null>(null);

  useEffect(() => {
    if (id) {
      getDocument(id)
        .then((resp) => {
          setEditResult(resp);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
  };

  const navigate = useNavigate();
  const bottomRef = React.useRef<HTMLDivElement>(null);

  const scrollHandler = () => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCancel = () => {
    if (navigateLink) {
      navigate(`${navigateLink}`);
    } else {
      navigate("/");
    }
  };

  const [isRadio, setIsRadio] = useState<number | null>(1);
  const [selectedFile, setSelectedFile] = useState<any | undefined>(
    editResult?.file
  );
  const [selectedCategory, setSelectedCategory] = useState<any | undefined>(
    editResult?.genre
  );

  const handleCategoriesChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  const { handleSubmit, control, setValue } = useForm<SearchData>({
    defaultValues: {
      author: "",
      category: "",
      type: "",
      workNumber: "",
      title: "",
      file: "",
      registrationDate: "",
    },
    mode: "onChange",
  });

  useEffect(() => {
    if (editResult) {
      setValue("type", editResult.type ?? isRadio);
      setValue("author", editResult.author ?? "");
      setValue("title", editResult.title ?? "");
      setValue("workNumber", editResult.work_number ?? "");
      setValue("genre", editResult.genre ?? ""); // <-- this is okay
      setSelectedCategory(editResult.genre); // <-- this is the important one
      setSelectedFile(editResult.file);
      setValue("registrationDate", editResult.registration_date ?? "");
      
      // Set Radio Selection
      if (editResult.type === "video") setIsRadio(1);
      else if (editResult.type === "audio") setIsRadio(2);
      else if (editResult.type === "photo") setIsRadio(3);
      else if (editResult.type === "document") setIsRadio(4);
      else setIsRadio(1);
    }
  }, [editResult, setValue]);
  

  if (!isRadio) {
    return null;
  }

  let searchType: string;
  if (isRadio === 1) searchType = "video";
  else if (isRadio === 2) searchType = "audio";
  else if (isRadio === 3) searchType = "photo";
  else if (isRadio === 4) searchType = "document";
  else searchType = "video";

  


  const onUpdateDocuments = (data: SearchData) => {
    const updatedData: any = { id };
  
    // Only include fields that have been updated by the user
    if (data.author !== editResult?.author) {
      updatedData.author = data.author;
    }
    if (data.title !== editResult?.title) {
      updatedData.title = data.title;
    }
    if (data.workNumber !== editResult?.work_number) {
      updatedData.workNumber = data.workNumber;
    }
    if (selectedCategory !== editResult?.genre) {
      updatedData.category = selectedCategory;
    }
    if (data.registrationDate !== editResult?.registration_date) {
      updatedData.registrationDate = data.registrationDate;
    }
    if (selectedFile !== editResult?.file) {
      updatedData.file = selectedFile;
    }
    if (searchType !== editResult?.type) {
      updatedData.type = searchType;
    }
  
    setIsLoading(true);
    updateDocument(updatedData)
      .then((response) => {
        toast.success("Document Updated Successfully");
        setIsLoading(false);
        if (navigateLink) {
          navigate(navigateLink);
        } else {
          navigate("/en");
        }
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        toast.error("Error uploading documents. Please try again.");
      });
  };
  


  return (
    <div className="search-document-page">
      <UploadHeaderES />
      <div className="search-documents-container">
        <div className="search-document">
          <div className="form-container">
            <h1 className="page-title">Actualizar Archivo</h1>
            <form
              className="search-documents-form"
              onSubmit={handleSubmit(onUpdateDocuments)}
            >
              <div className="search-bars">
                <div className="search-form-field">
                  <label>Seleccionar Tipo</label>
                  <div className="radio-buttons">
                    <RadioButtonsPropertyES
                      isRadio={isRadio}
                      setIsRadio={setIsRadio}
                    />
                  </div>
                </div>

                <div className="search-form-field">
                  <label>Nombre del Autor</label>
                  <Controller
                    name="author"
                    control={control}
                    render={({
                      field: { onChange, value },
                      fieldState: { error },
                    }) => (
                      <Input
                        value={value}
                        error={error}
                        id="author"
                        type="text"
                        name="author"
                        placeholder="Introduzca el nombre del Autor"
                        onChange={onChange}
                        className="document-input"
                        required
                      />
                    )}
                  />
                </div>

                <h3 className="search-title">Genre:</h3>
                <FormSelector
  value={selectedCategory}
  options={GenderOptions}
  onChange={handleCategoriesChange}
/>

                <div className="search-form-field">
                  <label>Título</label>
                  <Controller
                    name="title"
                    control={control}
                    render={({
                      field: { onChange, value },
                      fieldState: { error },
                    }) => (
                      <Input
                        value={value}
                        error={error}
                        id="title"
                        type="text"
                        name="title"
                        placeholder="Ingrese el Título"
                        onChange={onChange}
                        className="document-input"
                        required
                      />
                    )}
                  />
                </div>

                <div className="search-form-field">
                  <label>Número de Obra</label>
                  <Controller
                    name="workNumber"
                    control={control}
                    render={({
                      field: { onChange, value },
                      fieldState: { error },
                    }) => (
                      <Input
                        value={value}
                        error={error}
                        id="workNumber"
                        type="text"
                        name="workNumber"
                        placeholder="Ingrese el Número de Obra"
                        onChange={onChange}
                        className="document-input"
                        required
                      />
                    )}
                  />
                </div>
                
                <div className="search-form-field">
                  <label>Fecha de Inscripción</label>
                  <Controller
                    name="registrationDate"
                    control={control}
                    render={({
                      field: { onChange, value },
                      fieldState: { error },
                    }) => (
                      <Input
                        value={value}
                        error={error}
                        id="registrationDate"
                        type="date"
                        name="registrationDate"
                        placeholder="Ingrese la fecha de Inscripción"
                        onChange={onChange}
                        className="document-input"
                        required
                      />
                    )}
                  />
                </div>
                <div className="search-form-field">
                  <label>Archivo</label>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.mp4,.mov,.avi,.mp3,.wav,.jpg,.jpeg,.png,.gif"
                    onChange={handleFileChange}
                    className="document-input"
                  />
                  {editResult?.file && (
                    <div className="file-name">
                      <label>
                      Archivo Actual:</label> {editResult.file}
                    </div>
                  )}
                </div>
              </div>

              <div className="actions">
                <button
                  className="document-button"
                  type="button"
                  onClick={handleCancel}
                >
                  Cancelar
                </button>
                <button
                  className="document-button"
                  type="submit"
                  disabled={isLoading}
                  style={{
                    cursor: isLoading ? "not-allowed" : "pointer",
                    background: isLoading ? "#000" : "#3b4d53",
                    opacity: isLoading ? 0.6 : 1
                  }}
                >
                  {isLoading ? "Actualizando..." : "Actualizar Archivo"}
                </button>
              </div>

              <div className="note">
                <h6>
                  Si requieren una ley certificada deberán pasar por el
                  Departamento de Estado toda vez que conlleva costo.
                </h6>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UpdateDocumentsES;
