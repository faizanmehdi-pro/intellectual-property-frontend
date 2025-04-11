import React, { useState } from "react";
import "./SearchDocuments.scss";
import { Input } from "reactstrap";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import FormSelector from "../FormSelector/FormSelector";
import { uploadDocuments } from "../../../../apis/uploadDocuments";
import FooterES from "../FooterES";
import UploadHeaderES from "../Header/UploadHeaderES";
import RadioButtonsPropertyES from "./RadioButtonsPropertyES";
import { GenderOptions } from "./Data/DataES";

type Props = {};

export interface SearchData {
  authorName: string;
  title: any;
  workNumber: any;
  registrationDate: any;
  type: any;
  file: any;
}

const UploadDocumentsES = (props: Props) => {
  
  let User_ID = localStorage.getItem('user_id');;
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState("");
  const handleCategoriesChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
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
    navigate("/");
  };
  const [isRadio, setIsRadio] = useState<any>(1);

  const { handleSubmit, control } = useForm<SearchData>({
    defaultValues: {
      authorName: "",
      title: "",
      workNumber: "",
      registrationDate: "",
      type: isRadio,
    },
    mode: "onChange",
  });

  const onUploadDocuments = (data: SearchData) => {
    const upload = {
      type: isRadio,
      authorName: data.authorName,
      title: data.title,
      workNumber: data.workNumber,
      registrationDate: data.registrationDate,
      file: selectedFile,
      category: selectedCategory,
      userID: User_ID
    };
    setIsLoading(true);
    uploadDocuments(upload)
      .then((response) => {
        toast.success("Cargar Archivo Exitosamente");
        setIsLoading(false);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        toast.error("Error al cargar el archivo. Por favor inténtalo de nuevo.");
      });
  };

  return (
    <div className="search-document-page">
      <UploadHeaderES />
      <div className="search-documents-container">
        <div className="search-document">
          <div className="form-container">
            <h1 className="page-title">Subir Archivo</h1>
            <form
              className="search-documents-form"
              onSubmit={handleSubmit(onUploadDocuments)}
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
                  <label>Nombre de Autor</label>
                  <Controller
                  name="authorName"
                  control={control}
                  defaultValue="authorName"
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <Input
                      value={value}
                      error={error}
                      id="authorName"
                      type="text"
                      name="authorName"
                      placeholder="Ingresar Nombre de Autor"
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
                  defaultValue="title"
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
                  defaultValue="workNumber"
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
                  defaultValue="registrationDate"
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
                      placeholder="Ingrese la Fecha de Inscripción"
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
                    required
                    onChange={handleFileChange}
                    className="document-input"
                  />
                </div>
              </div>
              <div className="actions">
                <button
                  className="document-button"
                  type="submit"
                  onClick={handleCancel}
                >
                  Cancelar
                </button>
                <button
                  className="document-button"
                  type="submit"
                  onClick={scrollHandler}
                  disabled={isLoading}
                  style={{
                    cursor: isLoading ? "not-allowed" : "pointer",
                    background: isLoading ? "#000" : "#3b4d53",
                    opacity: isLoading ? 0.6 : 1
                  }}
                >
                  {isLoading ? "Subiendo..." : "Subir Archivo"}
                </button>
              </div>
              <div className="note">
                <h6>
                  si requieren una ley certificada, por favor pase por el
                  Departamento de Estado cada vez que hay un costo.
                </h6>
              </div>
            </form>
          </div>
        </div>
      </div>
      <FooterES />
    </div>
  );
};

export default UploadDocumentsES;
